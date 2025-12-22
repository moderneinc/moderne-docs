import mavenRepositoryConfigDefinition from './mavenRepositoryConfigDefinition';
import useConfigValidation from './useConfigValidation';
import { 
  FormData, 
  Instance, 
  ValidationHookResult 
} from './types';

/**
 * Validation hook for Maven Repository Configuration
 */
function useMavenRepositoryValidation(
  enabled: boolean,
  instances: Instance[],
  count: number,
  data: FormData,
  updateData: (data: FormData) => void
): ValidationHookResult {
  // Use the generic validation hook with instance-based configuration
  return useConfigValidation(
    mavenRepositoryConfigDefinition,
    'mavenRepositoryConfig',
    true, // hasInstances
    data,
    updateData,
    { instances, enabled, count } // instancesData
  );
}

export default useMavenRepositoryValidation;