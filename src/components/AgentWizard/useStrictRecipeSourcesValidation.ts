import strictRecipeSourcesConfigDefinition from './strictRecipeSourcesConfigDefinition';
import useConfigValidation from './useConfigValidation';
import { 
  FormData, 
  FieldData, 
  ValidationHookResult 
} from './types';

/**
 * Validation hook for Strict Recipe Sources Configuration
 */
function useStrictRecipeSourcesValidation(
  fields: Record<string, FieldData>,
  enabled: boolean,
  data: FormData,
  updateData: (data: FormData) => void
): ValidationHookResult {
  // Use the generic validation hook with field-based configuration
  return useConfigValidation(
    strictRecipeSourcesConfigDefinition,
    'strictRecipeSourcesConfig',
    false, // hasInstances
    data,
    updateData,
    undefined, // No instancesData
    { fields, enabled } // fieldsData
  );
}

export default useStrictRecipeSourcesValidation;