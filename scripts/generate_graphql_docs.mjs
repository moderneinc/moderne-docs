#!/usr/bin/env node
/**
 * Reads `rover graph fetch --format json` from stdin, writes a plain-Markdown
 * GraphQL API reference to stdout.
 *
 * Usage:
 *   rover graph fetch MyGraph@main --format json | node scripts/generate_graphql_docs.mjs
 */
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { parse as gqlParse, print as gqlPrint } from 'graphql';

const SKIP_TYPES = new Set([
  '_Any', '_FieldSet', '_Service', '_Entity',
  'federation__Policy', 'federation__Scope',
  'link__Import', 'link__Purpose',
]);
const ROOT_TYPES = new Set(['Query', 'Mutation', 'Subscription']);
const TYPE_NAME_RE = /\b([A-Z][A-Za-z0-9]*)\b/g;
const JAVADOC_RE = /\{@(?:code|literal|link)\s+([^{}\s][^{}]*?)\}/g;

function formatArgs(args) {
  if (!args || args.length === 0) return '';
  return '(' + args.map(a => {
    let s = `${a.name.value}: ${gqlPrint(a.type)}`;
    if (a.defaultValue != null) s += ` = ${gqlPrint(a.defaultValue)}`;
    return s;
  }).join(', ') + ')';
}

function getDoc(node) {
  const desc = node.description?.value?.trim();
  if (!desc) return '';
  return desc.replace(JAVADOC_RE, '`$1`');
}

function isUserType(name) {
  return !SKIP_TYPES.has(name) && !name.includes('__');
}

function hasInaccessible(node) {
  return (node.directives ?? []).some(d => d.name.value === 'inaccessible');
}

function getDeprecatedReason(node) {
  for (const d of node.directives ?? []) {
    if (d.name.value !== 'deprecated') continue;
    const reason = (d.arguments ?? []).find(a => a.name.value === 'reason');
    return reason ? gqlPrint(reason.value).replace(/^"|"$/g, '') : 'No longer supported';
  }
  return '';
}

function parseFields(defn) {
  return (defn.fields ?? [])
    .filter(f => !hasInaccessible(f))
    .map(f => ({
      name: f.name.value,
      typeRef: gqlPrint(f.type),
      description: getDoc(f),
      args: formatArgs(f.arguments),
      deprecated: getDeprecatedReason(f),
    }));
}

function mergeTypeDef(base, ext) {
  const existingFields = new Set(base.fields.map(f => f.name));
  base.fields.push(...ext.fields.filter(f => !existingFields.has(f.name)));
  const existingValues = new Set(base.enumValues);
  base.enumValues.push(...ext.enumValues.filter(v => !existingValues.has(v)));
  const existingMembers = new Set(base.unionTypes);
  base.unionTypes.push(...ext.unionTypes.filter(m => !existingMembers.has(m)));
  const existingIfaces = new Set(base.implements);
  base.implements.push(...ext.implements.filter(i => !existingIfaces.has(i)));
}

export function parseSchema(sdl) {
  const doc = gqlParse(sdl);
  const ops = [];
  const types = [];
  const seenOps = new Set();
  const typeIndex = new Map();

  function upsertType(t) {
    if (typeIndex.has(t.name)) {
      mergeTypeDef(typeIndex.get(t.name), t);
    } else {
      typeIndex.set(t.name, t);
      types.push(t);
    }
  }

  for (const defn of doc.definitions) {
    const kind = defn.kind;
    const name = defn.name?.value;

    if (kind === 'ObjectTypeDefinition' || kind === 'ObjectTypeExtension') {
      if (ROOT_TYPES.has(name)) {
        const opKind = name.toLowerCase();
        for (const f of defn.fields ?? []) {
          const key = `${opKind}:${f.name.value}`;
          if (!f.name.value.startsWith('_') && !hasInaccessible(f) && !seenOps.has(key)) {
            seenOps.add(key);
            const args = formatArgs(f.arguments);
            ops.push({
              name: f.name.value,
              kind: opKind,
              description: getDoc(f),
              signature: `${f.name.value}${args}: ${gqlPrint(f.type)}`,
              deprecated: getDeprecatedReason(f),
            });
          }
        }
      } else if (isUserType(name) && !hasInaccessible(defn)) {
        upsertType({
          name,
          kind: 'type',
          description: getDoc(defn),
          fields: parseFields(defn),
          enumValues: [],
          unionTypes: [],
          implements: (defn.interfaces ?? []).map(i => i.name.value),
        });
      }
    } else if (kind === 'EnumTypeDefinition' || kind === 'EnumTypeExtension') {
      if (isUserType(name) && !hasInaccessible(defn)) {
        upsertType({
          name,
          kind: 'enum',
          description: getDoc(defn),
          fields: [],
          enumValues: (defn.values ?? []).map(v => v.name.value),
          unionTypes: [],
          implements: [],
        });
      }
    } else if (kind === 'InputObjectTypeDefinition' || kind === 'InputObjectTypeExtension') {
      if (isUserType(name) && !hasInaccessible(defn)) {
        upsertType({ name, kind: 'input', description: getDoc(defn), fields: parseFields(defn), enumValues: [], unionTypes: [], implements: [] });
      }
    } else if (kind === 'InterfaceTypeDefinition' || kind === 'InterfaceTypeExtension') {
      if (isUserType(name) && !hasInaccessible(defn)) {
        upsertType({ name, kind: 'interface', description: getDoc(defn), fields: parseFields(defn), enumValues: [], unionTypes: [], implements: [] });
      }
    } else if (kind === 'UnionTypeDefinition' || kind === 'UnionTypeExtension') {
      if (isUserType(name) && !hasInaccessible(defn)) {
        upsertType({ name, kind: 'union', description: getDoc(defn), fields: [], enumValues: [], unionTypes: (defn.types ?? []).map(t => t.name.value), implements: [] });
      }
    } else if (kind === 'ScalarTypeDefinition' || kind === 'ScalarTypeExtension') {
      if (isUserType(name) && !hasInaccessible(defn) && !typeIndex.has(name)) {
        upsertType({ name, kind: 'scalar', description: getDoc(defn), fields: [], enumValues: [], unionTypes: [], implements: [] });
      }
    }
  }

  return { ops, types };
}

const PLURAL = { query: 'Queries', mutation: 'Mutations', subscription: 'Subscriptions' };
const KIND_ORDER = [
  ['type', 'Object types'], ['interface', 'Interfaces'],
  ['enum', 'Enums'], ['input', 'Input types'],
  ['union', 'Unions'], ['scalar', 'Scalars'],
];

function linkify(text, knownTypes) {
  return text.replace(TYPE_NAME_RE, name => knownTypes.has(name) ? `[${name}](#type-${name.toLowerCase()})` : name);
}

function cell(text) {
  return text.replace(/\|/g, '\\|');
}

export function generateMarkdown(ops, types) {
  const known = new Set(types.map(t => t.name));
  const lines = [
    '---',
    'sidebar_label: GraphQL API reference',
    'description: Complete reference for the Moderne GraphQL API, including all queries, mutations, subscriptions, and types.',
    '---',
    '',
    '# GraphQL API reference',
    '',
    '*This page is auto-generated from the Moderne GraphQL schema. Do not edit manually.*',
    '',
  ];

  for (const kind of ['query', 'mutation', 'subscription']) {
    const group = ops.filter(o => o.kind === kind).sort((a, b) => a.name.localeCompare(b.name));
    if (!group.length) continue;
    lines.push(`## ${PLURAL[kind]}`, '');
    for (const op of group) {
      lines.push(`### \`${op.name}\``, '');
      lines.push('```graphql', op.signature, '```', '');
      if (op.deprecated) lines.push(`> **Deprecated:** ${op.deprecated}`, '');
      if (op.description) lines.push(op.description, '');
    }
  }

  const sortedTypes = [...types].sort((a, b) => a.name.localeCompare(b.name));
  if (sortedTypes.length) {
    lines.push('## Types', '');
    for (const [kindKey, kindLabel] of KIND_ORDER) {
      const group = sortedTypes.filter(t => t.kind === kindKey);
      if (!group.length) continue;
      lines.push(`### ${kindLabel}`, '');
      for (const t of group) {
        lines.push(`#### \`${t.name}\` {#type-${t.name.toLowerCase()}}`, '');
        if (t.implements.length) {
          const impls = t.implements.map(i => `[${i}](#type-${i.toLowerCase()})`).join(', ');
          lines.push(`**Implements:** ${impls}`, '');
        }
        if (t.description) lines.push(t.description, '');
        if (t.kind === 'union') {
          lines.push('= ' + t.unionTypes.map(m => linkify(m, known)).join(' | '), '');
        } else if (t.kind === 'enum' && t.enumValues.length) {
          t.enumValues.forEach(v => lines.push(`- \`${v}\``));
          lines.push('');
        } else if (t.fields.length) {
          lines.push('| Field | Type | Description |', '|-------|------|-------------|');
          for (const f of t.fields) {
            const desc = cell(f.description ?? '');
            const dep = f.deprecated ? `**Deprecated:** ${cell(f.deprecated)}` : '';
            const fullDesc = [dep, desc].filter(Boolean).join(' ');
            const typeStr = cell(linkify(f.args ? `${f.args}: ${f.typeRef}` : f.typeRef, known));
            lines.push(`| \`${f.name}\` | ${typeStr} | ${fullDesc} |`);
          }
          lines.push('');
        }
      }
    }
  }

  return lines.join('\n') + '\n';
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const raw = readFileSync(process.stdin.fd, 'utf-8');
  const sdl = JSON.parse(raw).data.sdl;
  const { ops, types } = parseSchema(sdl);
  process.stdout.write(generateMarkdown(ops, types));
}
