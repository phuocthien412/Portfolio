import { vi } from "./locales/vi";
import { en } from "./locales/en";
import type { TranslationSchema } from "./types";

export type { TranslationSchema };

export const translations: Record<"vi" | "en", TranslationSchema> = {
  vi,
  en,
};

export default translations;
