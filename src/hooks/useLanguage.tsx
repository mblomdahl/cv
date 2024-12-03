import { create } from 'zustand';

type Language = 'en' | 'sv';

interface LanguageStore {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const useLanguage = create<LanguageStore>((set) => ({
  language: 'en',
  setLanguage: (lang) => set({ language: lang }),
}));