/**
 * Mock implementation of @docusaurus/useIsomorphicLayoutEffect for Storybook
 */

import { useEffect } from 'react';

// In Storybook, we always use useEffect (browser environment)
export default useEffect;
