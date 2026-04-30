import { useEffect, useState } from "react";

export function useExchangeRate() {
  const [usdRub, setUsdRub] = useState<number>();

  useEffect(() => {
    const controller = new AbortController();

    async function loadRate() {
      try {
        const response = await fetch("/api/rates/usd-rub", {
          signal: controller.signal
        });

        if (!response.ok) {
          return;
        }

        const payload = (await response.json()) as { rate?: number };
        setUsdRub(payload.rate);
      } catch {
        if (!controller.signal.aborted) {
          setUsdRub(undefined);
        }
      }
    }

    loadRate();

    return () => controller.abort();
  }, []);

  return usdRub;
}
