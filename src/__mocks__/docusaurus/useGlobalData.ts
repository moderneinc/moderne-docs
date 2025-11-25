/**
 * Mock implementation of @docusaurus/useGlobalData for Storybook
 */

export function useGlobalData() {
  return {};
}

export function useAllPluginInstancesData(_pluginName: string) {
  return {};
}

export function usePluginData(_pluginName: string, _pluginId?: string) {
  return {};
}

export default useGlobalData;
