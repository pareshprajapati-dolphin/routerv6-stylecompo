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
        // var inFifteenMinutes = new Date(new Date().getTime() + 15 * 60 * 1000); /// expire after 15 mins
        // var inHalfDay = 0.5; /// expire after 12 Hours
        // var in30Minutes = 1 / 48; /// expire after 30 Mintus

        // Cookies.set("token", newValue, {expires: 1});

        Cookies.set(keyName, newValue, { expires: 1 });
      }
    } catch (err) {}
    setStoredValue(newValue);
  };

  return [storedValue, setValue];
};
