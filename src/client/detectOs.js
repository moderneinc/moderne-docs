import { createStorageSlot } from '@docusaurus/theme-common';
import { CLI_INSTALL_OS_STORAGE_KEY, WINDOWS } from '../utils/cliInstallOs';

// Pre-selects the Windows tab for groupId="cli-install-os" before Tabs reads its stored choice.
if (typeof window !== 'undefined') {
  const slot = createStorageSlot(CLI_INSTALL_OS_STORAGE_KEY);
  const platform = navigator.userAgentData?.platform || navigator.platform;
  if (slot.get() === null && /^win/i.test(platform)) {
    slot.set(WINDOWS);
  }
}
