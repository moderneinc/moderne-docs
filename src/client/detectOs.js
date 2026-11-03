import { createStorageSlot } from '@docusaurus/theme-common';

// Pre-selects the Windows tab for groupId="cli-install-os" before Tabs reads its stored choice.
if (typeof window !== 'undefined') {
  const slot = createStorageSlot('docusaurus.tab.cli-install-os');
  const platform = navigator.userAgentData?.platform || navigator.platform;
  if (slot.get() === null && /^win/i.test(platform)) {
    slot.set('windows');
  }
}
