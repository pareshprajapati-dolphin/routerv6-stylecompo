import { useState } from "react";
import Cookies from "js-cookie";

export const useSessionStorage = (keyName, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = Cookies.get(keyName);
      if (value) {
        return value;
      } else {
        Cookies.set("token", defaultValue, { expires: 1 });
        // localStorage.setItem(keyName, defaultValue);
        return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  });

  const setValue = (newValue) => {
    try {
      Cookies.set(keyName, newValue, { expires: 1 });
    } catch (err) {}
    setStoredValue(newValue);
  };

  return [storedValue, setValue];
};