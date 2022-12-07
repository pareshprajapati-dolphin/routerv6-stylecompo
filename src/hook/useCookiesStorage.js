import { useState } from "react";
import Cookies from "js-cookie";

export const useCookiesStorage = (keyName, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = Cookies.get(keyName);
      if (value) return value;
    } catch (err) {
      return defaultValue;
    }
  });

  const setValue = (newValue) => {
    try {
      if (newValue === undefined) {
        Cookies.remove(keyName);
      } else {
        Cookies.set(keyName, newValue, { expires: 1 });
      }
    } catch (err) {}
    setStoredValue(newValue);
  };

  return [storedValue, setValue];
};
