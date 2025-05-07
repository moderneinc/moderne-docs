import orgHierarchyAndDevCenterConfigDefinition from './orgHierarchyAndDevCenterConfigDefinition';
import useConfigValidation from './useConfigValidation';
import { 
  FormData, 
  FieldData, 
  ValidationHookResult 
} from './types';

/**
 * Validation hook for Organization Hierarchy and Development Center Configuration
 */
function useOrgHierarchyAndDevCenterValidation(
  fields: Record<string, FieldData>,
  enabled: boolean,
  data: FormData,
  updateData: (data: FormData) => void
): ValidationHookResult {
  // Use the generic validation hook with field-based configuration
  return useConfigValidation(
    orgHierarchyAndDevCenterConfigDefinition,
    'orgHierarchyAndDevCenterConfig',
    false, // hasInstances
    data,
    updateData,
    undefined, // No instancesData
    { fields, enabled } // fieldsData
  );
}

export default useOrgHierarchyAndDevCenterValidation;