import { useMemo, useCallback } from 'react';
import {
  number as numberYup,
  string as stringYup,
  date as dateYup,
  array as arrayYup,
  NumberSchema,
  StringSchema,
  DateSchema,
  bool as boolYup,
  object as objectYup,
  BooleanSchema,
} from 'yup';

export const useFormFieldsSchema = () => {
  const required = useCallback(
    (fieldSchema: NumberSchema | StringSchema | DateSchema | BooleanSchema) =>
      fieldSchema.required('This field is required'),
    [],
  );

  const { number, string, date, bool, array, object } = useMemo(
    () => ({
      number: numberYup().typeError(''),
      string: stringYup().typeError('').trim(),
      date: dateYup().typeError(''),
      bool: boolYup().typeError(''),
      array: arrayYup(),
      object: objectYup().nullable(),
    }),
    [],
  );

  const { onlyLetters, email } = useMemo(
    () => ({
      onlyLetters: string.matches(/^[a-zA-Z]+$/, 'Only letters'),
      email: string.email('Email'),
    }),
    [string],
  );

  return useMemo(
    () => ({
      onlyLetters,
      email,
      string,
      date,
      number,
      bool,
      array,
      object,
      requiredOnlyLetters: required(onlyLetters),
      requiredEmail: required(email),
      requiredString: required(string),
      requiredDate: required(date),
      requiredNumber: required(number),
      requiredBool: required(bool),
      required,
    }),
    [onlyLetters, email, string, date, number, bool, array, object, required],
  );
};
