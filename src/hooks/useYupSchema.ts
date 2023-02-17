import { useMemo } from 'react';
import { object } from 'yup';

export const useYupSchema = (validationSchema: Record<string, any>) =>
  useMemo(() => object().shape(validationSchema), [validationSchema]);
