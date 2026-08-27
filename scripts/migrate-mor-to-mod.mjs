#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';
import { glob } from 'glob';

// --mor-* (key) -> --mod-* (value). Authoritative mapping from the spec audit.
const MAP = {
  'font-sans': 'font-family-body',
  'font-mono': 'font-family-code',
  'spectral-1': 'chart-categorical-magenta',
  'spectral-2': 'violet-500',
  'spectral-3': 'color-categorical-blue-fg',
  'spectral-5': 'mint-400',
  'spectral-6': 'chart-categorical-lime',
  spectral: 'gradient-spectral',
  green: 'mint-400',
  'on-accent': 'color-action-on-accent',
  'radius-xs': 'border-radius-x-xs',
  'radius-sm': 'border-radius-x-s',
  'radius-md': 'border-radius-s',
  'radius-lg': 'border-radius-s',
  'radius-xl': 'border-radius-input',
  'radius-2xl': 'border-radius-card',
  'radius-full': 'border-radius-full',
  'radius-button': 'border-radius-button',
  'radius-input': 'border-radius-input',
  'radius-card': 'border-radius-card',
  'radius-pill': 'border-radius-full',
  'font-size-overline': 'font-size-xxs',
  'font-size-xs': 'font-size-xs',
  'font-size-sm': 'font-size-xs',
  'font-size-md': 'font-size-caption',
  'font-size-base': 'font-size-sm',
  'font-size-lg': 'font-size-default',
  'font-size-h2': 'font-size-h5',
  'font-size-doc-h3': 'font-size-h4',
  'font-size-doc-h2': 'font-size-h2',
  'font-size-doc-h1': 'font-size-h1',
  'font-weight-regular': 'font-weight-regular',
  'font-weight-medium': 'font-weight-medium',
  'font-weight-semibold': 'font-weight-semi-bold',
  'font-weight-bold': 'font-weight-bold',
  'space-1': 'spacing_1_2',
  'space-2': 'spacing_1',
  'space-3': 'spacing_1_1_2',
  'space-4': 'spacing_2',
  'space-5': 'spacing_2_1_2',
  'space-6': 'spacing_3',
  'space-7': 'spacing_3_3_4',
  'space-8': 'spacing_5',
  'space-2px': 'spacing_1_4',
  'space-6px': 'spacing_3_4',
  'space-26px': 'spacing_3_1_4',
  'space-28px': 'spacing_3_1_2',
  'space-32px': 'spacing_4',
  'space-48px': 'spacing_6',
  'space-56px': 'spacing_7',
  'space-64px': 'spacing_8',
  bg: 'color-surface-page',
  field: 'color-surface-field',
  card: 'color-surface-data-grid-hover',
  surface: 'color-surface-sunken',
  'surface-2': 'color-surface-sunken-deep',
  'row-hover': 'color-surface-row-hover',
  panel: 'color-surface-search-input',
  neutral: 'color-state-disabled-bg',
  line: 'color-border-primary',
  'line-2': 'color-border-subtle',
  'line-strong': 'color-border-strong',
  text: 'color-text-primary',
  muted: 'color-text-tertiary',
  link: 'color-action-default',
  'link-deep': 'color-action-navy',
  'btn-primary-bg': 'button-primary-bg',
  'btn-primary-fg': 'color-text-on-primary',
  'btn-primary-hover': 'button-primary-bg-hover',
  'ill-panel': 'color-surface-raised',
  'ill-stroke': 'color-border-strong',
  'ill-accent': 'chart-categorical-periwinkle',
  'shadow-card': 'docs-shadow-card',
  'shadow-dropdown': 'docs-shadow-dropdown',
  'shadow-modal': 'docs-shadow-modal',
  'status-info-bg': 'color-feedback-info-bg',
  'status-info-accent': 'toast-info-fg',
  'status-tip-bg': 'color-feedback-success-bg',
  'status-tip-accent': 'color-feedback-success-fg',
  'status-note-bg': 'color-status-neutral-bg',
  'status-note-accent': 'color-text-tertiary',
  'status-warning-bg': 'color-feedback-warning-bg',
  'status-warning-accent': 'color-feedback-warning-fg',
  'status-danger-bg': 'color-feedback-error-bg',
  'status-danger-accent': 'color-text-error',
};

// Longest keys first so replacement order can never shadow a longer token.
const keys = Object.keys(MAP).sort((a, b) => b.length - a.length);

const files = (await glob('src/**/*.{css,tsx,ts}')).filter(
  f => !f.endsWith('src/css/morpheus-tokens.css'),
);

let changed = 0;
for (const file of files) {
  const before = readFileSync(file, 'utf-8');
  let after = before;
  for (const key of keys) {
    after = after.replaceAll(new RegExp(`--mor-${key}(?![\\w-])`, 'g'), `--mod-${MAP[key]}`);
  }
  // Fail loudly if any --mor-* token slipped through the map.
  const leftover = after.match(/--mor-[\w-]+/g);
  if (leftover) {
    throw new Error(`Unmapped --mor-* token(s) in ${file}: ${[...new Set(leftover)].join(', ')}`);
  }
  if (after !== before) {
    writeFileSync(file, after);
    changed++;
  }
}
console.log(`Rewrote ${changed} file(s).`);
