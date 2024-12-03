import { create } from 'zustand';
import { useParams } from 'react-router-dom';

type Language = 'en' | 'sv';

interface LanguageStore {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const useLanguage = create<LanguageStore>((set) => ({
  language: 'sv',
  setLanguage: (lang) => set({ language: lang }),
}));

// Hook to sync URL parameter with language state
export const useSyncLanguage = () => {
  const { lang } = useParams<{ lang: string }>();
  const { language, setLanguage } = useLanguage();

  // Update language state if URL parameter changes
  if (lang && (lang === 'en' || lang === 'sv') && lang !== language) {
    setLanguage(lang);
  }

  return { language, setLanguage };
};