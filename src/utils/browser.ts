export const setItem = (key: string, value: unknown) => localStorage.setItem(key, String(value));

export const getItem = (key: string) => localStorage.getItem(key);

export const removeItem = (key: string) => localStorage.removeItem(key);
