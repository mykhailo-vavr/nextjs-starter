'use client';

import { useCallback, useState, Dispatch, SetStateAction } from 'react';

export const useToggle = (initialState = false): [boolean, () => void, Dispatch<SetStateAction<boolean>>] => {
  const [state, setState] = useState(initialState);

  const toggle = useCallback(() => setState((prevState) => !prevState), []);

  return [state, toggle, setState];
};
