import { useEffect, useState } from "react";

export const useAutoHide = (timeoutDuration) => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const resetTimer = () => {
    setIsVisible(true);
    if (timeoutId) clearTimeout(timeoutId);

    const id = setTimeout(() => {
      setIsVisible(false);
    }, timeoutDuration);
    setTimeoutId(id);
  };

  useEffect(() => {
    const events = ["mousemove", "keydown", "touchstart"];
    events.forEach((event) => {
      window.addEventListener(event, resetTimer);
    });
    const id = setTimeout(() => {
      setIsVisible(false);
    }, timeoutDuration);
    setTimeoutId(id);

    return () => {
      events.forEach((event) => {
        window.removeEventListener(event, resetTimer);
      });
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [timeoutId, timeoutDuration]);
  return { isVisible, resetTimer , setIsVisible};
};
