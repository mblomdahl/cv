import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 right-4 flex gap-2 glass-card p-2 rounded-lg z-50">
      <Button
        variant={language === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('en')}
        className="transition-all duration-300"
      >
        EN
      </Button>
      <Button
        variant={language === 'sv' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('sv')}
        className="transition-all duration-300"
      >
        SV
      </Button>
    </div>
  );
};