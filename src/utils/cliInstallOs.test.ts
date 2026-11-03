import { beforeEach, describe, expect, it, vi } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useIsWindowsSelected } from './cliInstallOs';

const os = vi.hoisted(() => ({ search: '', stored: null as string | null }));
vi.mock('@docusaurus/theme-common', () => ({ useStorageSlot: () => [os.stored] }));
vi.mock('@docusaurus/router', () => ({ useLocation: () => ({ search: os.search }) }));

describe('useIsWindowsSelected', () => {
  const isWindows = () => renderHook(() => useIsWindowsSelected()).result.current;

  beforeEach(() => {
    os.search = '';
    os.stored = null;
  });

  it('is false with no choice', () => {
    expect(isWindows()).toBe(false);
  });

  it('follows the stored tab choice', () => {
    os.stored = 'windows';
    expect(isWindows()).toBe(true);
  });

  it('lets the os query string override the stored choice', () => {
    os.stored = 'windows';
    os.search = '?os=linux-macos';
    expect(isWindows()).toBe(false);
  });
});
