import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";
import { LanguageSelector } from "@/components/LanguageSelector";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const Index = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <LanguageSelector />
      
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <section className="section-fade mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[#D87D4A]">{t.name}</h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">{t.title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto italic">{t.intro}</p>
        </section>

        <section className="section-fade mb-16">
          <Card className="glass-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-[#D87D4A]">{t.about.title}</h3>
              <p className="text-lg text-gray-700 leading-relaxed">{t.about.content}</p>
            </CardContent>
          </Card>
        </section>

        <section className="section-fade mb-16">
          <Card className="glass-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-[#D87D4A]">{t.expertise.title}</h3>
              <div className="grid gap-4">
                {t.expertise.areas.map((area, index) => (
                  <div
                    key={index}
                    className="slide-in flex items-center p-4 bg-white/50 rounded-lg shadow-sm"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-lg text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="section-fade">
          <Card className="glass-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-[#D87D4A]">{t.contact.title}</h3>
              <div className="space-y-4">
                <p className="text-lg font-medium">{t.contact.name}</p>
                <p className="text-gray-600">{t.contact.role}</p>
                <div className="space-y-2">
                  <a 
                    href={`tel:${t.contact.phone}`} 
                    className="block text-gray-600 hover:text-[#D87D4A] transition-colors"
                  >
                    {t.contact.phone}
                  </a>
                  <a 
                    href={`mailto:${t.contact.email}`} 
                    className="block text-gray-600 hover:text-[#D87D4A] transition-colors"
                  >
                    {t.contact.email}
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Index;