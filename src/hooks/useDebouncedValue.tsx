import { useEffect, useState } from "react";

const useDebouncedValue = (value: string, duration: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const handler = setTimeout(() => {
      setDebouncedValue(value);
      setIsLoading(false);
    }, duration ?? 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [value, duration]);

  return { debouncedValue, isLoading };
};

export default useDebouncedValue;
