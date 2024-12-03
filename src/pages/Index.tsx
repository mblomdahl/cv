import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";
import { LanguageSelector } from "@/components/LanguageSelector";
import { motion } from "framer-motion";

const Index = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <LanguageSelector />
      
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <section className="section-fade mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.name}</h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">{t.title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.intro}</p>
        </section>

        <section className="section-fade mb-16">
          <div className="glass-card rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-6">{t.skills}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {t.skillsList.map((skill, index) => (
                <div
                  key={index}
                  className="slide-in flex items-center p-4 bg-white/50 rounded-lg"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-lg">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-fade mb-16">
          <div className="glass-card rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-6">{t.contact}</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="font-medium">{t.contactInfo.email}:</span>
                <a href="mailto:contact@example.com" className="text-gray-600 hover:text-gray-900 transition-colors">
                  contact@example.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <span className="font-medium">{t.contactInfo.phone}:</span>
                <a href="tel:+46123456789" className="text-gray-600 hover:text-gray-900 transition-colors">
                  +46 12 345 67 89
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <span className="font-medium">{t.contactInfo.location}:</span>
                <span className="text-gray-600">{t.location}</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;