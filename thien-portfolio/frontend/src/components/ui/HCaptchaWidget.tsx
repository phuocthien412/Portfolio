import React, { useEffect, useRef } from "react";

declare global {
  interface Window {
    hcaptcha?: {
      render: (
        container: HTMLElement,
        params: {
          sitekey: string;
          theme?: "light" | "dark";
          callback?: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
        }
      ) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId?: string) => void;
    };
  }
}

// Web3Forms Free Tier shared public hCaptcha sitekey
const DEFAULT_WEB3FORMS_HCAPTCHA_SITEKEY = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";
const HCAPTCHA_SCRIPT_SRC = "https://js.hcaptcha.com/1/api.js?render=explicit&recaptchacompat=off";

let hcaptchaScriptPromise: Promise<void> | null = null;

function loadHCaptchaScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.hcaptcha) return Promise.resolve();
  if (hcaptchaScriptPromise) return hcaptchaScriptPromise;

  hcaptchaScriptPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src^="https://js.hcaptcha.com/1/api.js"]`);
    if (existing) {
      if (window.hcaptcha) {
        resolve();
        return;
      }
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error("Failed to load hCaptcha script")), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = HCAPTCHA_SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => {
      hcaptchaScriptPromise = null;
      reject(new Error("Failed to load hCaptcha script"));
    };
    document.head.appendChild(script);
  });

  return hcaptchaScriptPromise;
}

interface HCaptchaWidgetProps {
  theme?: "light" | "dark";
  resetSignal?: number;
  onVerify: (token: string) => void;
  onExpire?: () => void;
}

/**
 * Explicit-rendered hCaptcha widget compatible with Web3Forms and React SPAs.
 */
export const HCaptchaWidget: React.FC<HCaptchaWidgetProps> = ({
  theme = "dark",
  resetSignal = 0,
  onVerify,
  onExpire,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<string | null>(null);
  const onVerifyRef = useRef(onVerify);
  const onExpireRef = useRef(onExpire);

  useEffect(() => {
    onVerifyRef.current = onVerify;
    onExpireRef.current = onExpire;
  }, [onVerify, onExpire]);

  const sitekey = import.meta.env.VITE_HCAPTCHA_SITE_KEY || DEFAULT_WEB3FORMS_HCAPTCHA_SITEKEY;

  useEffect(() => {
    let cancelled = false;

    loadHCaptchaScript()
      .then(() => {
        if (cancelled || !containerRef.current || !window.hcaptcha) return;
        containerRef.current.innerHTML = "";
        widgetIdRef.current = window.hcaptcha.render(containerRef.current, {
          sitekey,
          theme,
          callback: (token: string) => onVerifyRef.current(token),
          "expired-callback": () => onExpireRef.current?.(),
          "error-callback": () => onExpireRef.current?.(),
        });
      })
      .catch((err) => {
        console.warn("hCaptcha initialization error:", err);
      });

    return () => {
      cancelled = true;
      if (widgetIdRef.current && window.hcaptcha) {
        try {
          window.hcaptcha.remove(widgetIdRef.current);
        } catch {
          // Ignore cleanup errors if widget was already unmounted
        }
        widgetIdRef.current = null;
      }
    };
  }, [sitekey, theme]);

  useEffect(() => {
    if (resetSignal > 0 && widgetIdRef.current && window.hcaptcha) {
      window.hcaptcha.reset(widgetIdRef.current);
    }
  }, [resetSignal]);

  return <div ref={containerRef} className="min-h-[78px] flex items-center justify-start" />;
};
