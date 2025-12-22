/**
 * Mock implementation of @docusaurus/useGlobalData for Storybook
 */

export function useGlobalData() {
  return {};
}

export function useAllPluginInstancesData(pluginName: string) {
  console.log('[Storybook Mock] useAllPluginInstancesData:', pluginName);
  return {};
}

export function usePluginData(pluginName: string, pluginId?: string) {
  console.log('[Storybook Mock] usePluginData:', pluginName, pluginId);
  return {};
}

export default useGlobalData;
