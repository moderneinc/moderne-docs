import { useLocation } from '@docusaurus/router';
import { useStorageSlot } from '@docusaurus/theme-common';

/** Must match `<Tabs groupId="cli-install-os" queryString="os">` and its `windows` TabItem. */
export const CLI_INSTALL_OS_STORAGE_KEY = 'docusaurus.tab.cli-install-os';
export const CLI_INSTALL_OS_QUERY = 'os';
export const WINDOWS = 'windows';

export function useIsWindowsSelected(): boolean {
  const queryOs = new URLSearchParams(useLocation().search).get(CLI_INSTALL_OS_QUERY);
  const [storedOs] = useStorageSlot(CLI_INSTALL_OS_STORAGE_KEY);
  return (queryOs ?? storedOs) === WINDOWS;
}

export const joinContinuations = (code: string): string => code.replace(/[ \t]*\\\n[ \t]*/g, ' ');
