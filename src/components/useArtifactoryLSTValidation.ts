import artifactoryLSTConfigDefinition from './artifactoryLSTConfigDefinition';
import useConfigValidation from './useConfigValidation';
import { 
  FormData, 
  Instance, 
  ValidationHookResult 
} from './types';

/**
 * Validation hook for Artifactory LST Configuration
 */
function useArtifactoryLSTValidation(
  enabled: boolean,
  instances: Instance[],
  count: number,
  data: FormData,
  updateData: (data: FormData) => void
): ValidationHookResult {
  // Use the generic validation hook with instance-based configuration
  return useConfigValidation(
    artifactoryLSTConfigDefinition,
    'artifactoryLSTConfig',
    true, // hasInstances
    data,
    updateData,
    { instances, enabled, count } // instancesData
  );
}

export default useArtifactoryLSTValidation;