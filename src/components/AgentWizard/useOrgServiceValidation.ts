import orgServiceConfigDefinition from './orgServiceConfigDefinition';
import useConfigValidation from './useConfigValidation';
import { 
  FormData, 
  FieldData, 
  ValidationHookResult 
} from './types';

/**
 * Validation hook for Org Service Configuration
 */
function useOrgServiceValidation(
  fields: Record<string, FieldData>,
  enabled: boolean,
  data: FormData,
  updateData: (data: FormData) => void
): ValidationHookResult {
  // Use the generic validation hook with field-based configuration
  return useConfigValidation(
    orgServiceConfigDefinition,
    'orgServiceConfig',
    false, // hasInstances
    data,
    updateData,
    undefined, // No instancesData
    { fields, enabled } // fieldsData
  );
}

export default useOrgServiceValidation;