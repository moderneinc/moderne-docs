import { describe, it, expect } from 'vitest';
import { parseSchema, generateMarkdown } from './generate_graphql_docs.mjs';

const SAMPLE_SDL = `
  type Query {
    """Look up a user account."""
    user(id: ID!): User
    users(first: Int = 10, after: String): [User!]!
    """Old search endpoint."""
    search(q: String): [User!]! @deprecated(reason: "Use users instead")
  }

  type User implements Node {
    id: ID!
    """The user's display name."""
    name: String!
    role: UserRole!
    secret: String @inaccessible
    """Legacy identifier."""
    legacyId: String @deprecated(reason: "Use id instead")
  }

  interface Node {
    id: ID!
  }

  enum UserRole {
    ADMIN
    MEMBER
  }

  input UserFilter {
    name: String
    role: UserRole
  }

  union SearchResult = User

  scalar DateTime
`;

const FEDERATION_SDL = `
  type Query { _service: _Service }
  type _Service { sdl: String }
  scalar _Any
  scalar _FieldSet
  type join__Graph { name: String }
`;

describe('parseSchema', () => {
  it('parses query operations', () => {
    const { ops } = parseSchema(SAMPLE_SDL);
    const names = ops.map(o => o.name);
    expect(names).toContain('user');
    expect(names).toContain('users');
  });

  it('includes default arg in signature', () => {
    const { ops } = parseSchema(SAMPLE_SDL);
    const users = ops.find(o => o.name === 'users');
    expect(users.signature).toContain('first: Int = 10');
    expect(users.signature).toContain('after: String');
  });

  it('parses object type', () => {
    const { types } = parseSchema(SAMPLE_SDL);
    const user = types.find(t => t.name === 'User');
    expect(user.kind).toBe('type');
    expect(user.fields.map(f => f.name)).toContain('id');
    expect(user.fields.map(f => f.name)).toContain('name');
  });

  it('excludes @inaccessible fields', () => {
    const { types } = parseSchema(SAMPLE_SDL);
    const user = types.find(t => t.name === 'User');
    expect(user.fields.map(f => f.name)).not.toContain('secret');
  });

  it('parses implements', () => {
    const { types } = parseSchema(SAMPLE_SDL);
    const user = types.find(t => t.name === 'User');
    expect(user.implements).toContain('Node');
  });

  it('parses enum', () => {
    const { types } = parseSchema(SAMPLE_SDL);
    const role = types.find(t => t.name === 'UserRole');
    expect(role.kind).toBe('enum');
    expect(role.enumValues).toContain('ADMIN');
    expect(role.enumValues).toContain('MEMBER');
  });

  it('parses input type', () => {
    const { types } = parseSchema(SAMPLE_SDL);
    const uf = types.find(t => t.name === 'UserFilter');
    expect(uf.kind).toBe('input');
    expect(uf.fields.map(f => f.name)).toContain('name');
  });

  it('parses interface', () => {
    const { types } = parseSchema(SAMPLE_SDL);
    const node = types.find(t => t.name === 'Node');
    expect(node.kind).toBe('interface');
    expect(node.fields.map(f => f.name)).toContain('id');
  });

  it('parses union', () => {
    const { types } = parseSchema(SAMPLE_SDL);
    const sr = types.find(t => t.name === 'SearchResult');
    expect(sr.kind).toBe('union');
    expect(sr.unionTypes).toContain('User');
  });

  it('parses scalar', () => {
    const { types } = parseSchema(SAMPLE_SDL);
    expect(types.find(t => t.name === 'DateTime').kind).toBe('scalar');
  });

  it('excludes federation-internal types and operations', () => {
    const { ops, types } = parseSchema(FEDERATION_SDL);
    expect(types.map(t => t.name)).not.toContain('_Service');
    expect(types.map(t => t.name)).not.toContain('_Any');
    expect(types.map(t => t.name)).not.toContain('_FieldSet');
    expect(types.map(t => t.name)).not.toContain('join__Graph');
    expect(ops.map(o => o.name)).not.toContain('_service');
  });

  it('parses @deprecated reason on operation', () => {
    const { ops } = parseSchema(SAMPLE_SDL);
    const search = ops.find(o => o.name === 'search');
    expect(search.deprecated).toBe('Use users instead');
  });

  it('parses @deprecated reason on field', () => {
    const { types } = parseSchema(SAMPLE_SDL);
    const user = types.find(t => t.name === 'User');
    const legacy = user.fields.find(f => f.name === 'legacyId');
    expect(legacy.deprecated).toBe('Use id instead');
  });

  it('merges extend type fields', () => {
    const sdl = `
      type Org { id: ID! }
      extend type Org { repos: [String!]! }
    `;
    const { types } = parseSchema(sdl);
    const org = types.find(t => t.name === 'Org');
    const fieldNames = org.fields.map(f => f.name);
    expect(fieldNames).toContain('id');
    expect(fieldNames).toContain('repos');
    expect(types.filter(t => t.name === 'Org').length).toBe(1);
  });
});

describe('generateMarkdown', () => {
  const md = () => {
    const { ops, types } = parseSchema(SAMPLE_SDL);
    return generateMarkdown(ops, types);
  };

  it('starts with frontmatter', () => {
    expect(md()).toMatch(/^---\n/);
    expect(md()).toContain('sidebar_label: GraphQL API reference');
  });

  it('includes do-not-edit notice', () => {
    expect(md().toLowerCase()).toContain('do not edit manually');
  });

  it('has Queries section with operation heading', () => {
    const out = md();
    expect(out).toContain('## Queries');
    expect(out).toContain('#### `user`');
  });

  it('renders signature as graphql code block', () => {
    const out = md();
    expect(out).toContain('```graphql\nuser(id: ID!): User\n```');
  });

  it('renders description', () => {
    expect(md()).toContain('Look up a user account.');
  });

  it('renders deprecated operation notice', () => {
    expect(md()).toContain('> **Deprecated:** Use users instead');
  });

  it('renders Returns line with link for known type', () => {
    expect(md()).toContain('**Returns:** [User](#user)');
  });

  it('renders Returns line with list type linkified', () => {
    const out = md();
    const usersSection = out.slice(out.indexOf('#### `users`'));
    expect(usersSection).toContain('**Returns:** [[User](#user)!]!');
  });

  it('has Types section with Object types subsection', () => {
    const out = md();
    expect(out).toContain('## Types');
    expect(out).toContain('### Object types');
  });

  it('renders type heading', () => {
    expect(md()).toContain('##### `User`');
  });

  it('renders implements link', () => {
    expect(md()).toContain('**Implements:** [Node](#node)');
  });

  it('renders field table', () => {
    const out = md();
    expect(out).toContain('| `id` | ID! |');
  });

  it('linkifies known type names in field table', () => {
    expect(md()).toContain('[UserRole](#userrole)');
  });

  it('renders enum values', () => {
    const out = md();
    expect(out).toContain('### Enums');
    expect(out).toContain('##### `UserRole`');
    expect(out).toContain('- `ADMIN`');
    expect(out).toContain('- `MEMBER`');
  });

  it('renders union members', () => {
    const out = md();
    expect(out).toContain('### Unions');
    expect(out).toContain('= [User](#user)');
  });

  it('renders deprecated field in table', () => {
    const out = md();
    const legacyRow = out.split('\n').find(l => l.includes('`legacyId`'));
    expect(legacyRow).toContain('**Deprecated:** Use id instead');
  });

  it('does not show deprecated notice on non-deprecated operation', () => {
    const out = md();
    const userSection = out.slice(out.indexOf('#### `user`'), out.indexOf('#### `users`'));
    expect(userSection).not.toContain('Deprecated');
  });
});
