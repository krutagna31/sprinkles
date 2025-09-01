import { useEffect, useRef, useState } from "react";

function useCopyToClipboard(timeout = 1000) {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const copy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => setCopied(false), timeout);
  };

  return { copied, copy };
}

export { useCopyToClipboard };
