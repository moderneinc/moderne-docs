import React from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import ShellCommand from './index';

const os = vi.hoisted(() => ({ query: null as string | null, stored: null as string | null }));
vi.mock('@docusaurus/theme-common', () => ({ useStorageSlot: () => [os.stored] }));
vi.mock('@docusaurus/theme-common/internal', () => ({ useQueryStringValue: () => os.query }));

const lines = ['mod claude chat ./work --org "Legacy Java Apps"', '--prompt "Upgrade to Java 25."'];
const code = () => render(<ShellCommand lines={lines} />).container.textContent;

describe('ShellCommand', () => {
  beforeEach(() => {
    os.query = null;
    os.stored = null;
  });

  it('continues lines with a backslash by default', () => {
    expect(code()).toBe(`${lines[0]} \\\n  ${lines[1]}`);
  });

  it('joins onto one line when Windows is stored', () => {
    os.stored = 'windows';
    expect(code()).toBe(lines.join(' '));
  });

  it('lets the os query string override the stored choice', () => {
    os.stored = 'windows';
    os.query = 'linux-macos';
    expect(code()).toBe(`${lines[0]} \\\n  ${lines[1]}`);
  });
});
