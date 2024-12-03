import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";
import { LanguageSelector } from "@/components/LanguageSelector";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <LanguageSelector />
      
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <section className="section-fade mb-16 text-center">
          <div className="flex flex-col items-center mb-8">
            <Avatar className="w-48 h-48 mb-6">
              <AvatarImage src="https://www.kvadrat.se/wp-content/uploads/2023/11/Mats-Blomdahl-1-1024x683.jpg" alt="Mats Blomdahl" />
              <AvatarFallback>MB</AvatarFallback>
            </Avatar>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[#D87D4A]">{t.name}</h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">{t.title}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto italic">{t.intro}</p>
          </div>
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

        <section className="section-fade mb-16">
          <Card className="glass-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-[#D87D4A]">{t.experience.title}</h3>
              <Accordion type="single" collapsible className="space-y-4">
                {t.experience.jobs.map((job, index) => (
                  <AccordionItem
                    key={index}
                    value={`job-${index}`}
                    className="slide-in bg-white/50 rounded-lg shadow-sm border-none"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex flex-col items-start text-left">
                        <h4 className="text-xl font-semibold text-gray-800">{job.company}</h4>
                        <p className="text-lg text-gray-700">{job.role}</p>
                        <p className="text-sm text-gray-500">{job.period}</p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <div className="space-y-4">
                        <div className="prose max-w-none">
                          <p className="text-gray-700 whitespace-pre-wrap">{job.description}</p>
                        </div>
                        
                        <div className="space-y-2">
                          <h5 className="font-semibold text-gray-800">Technologies:</h5>
                          <div className="flex flex-wrap gap-2">
                            {job.technologies.split(", ").map((tech, techIndex) => (
                              <Badge key={techIndex} variant="secondary" className="bg-gray-100">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <h5 className="font-semibold text-gray-800">Keywords:</h5>
                          <div className="flex flex-wrap gap-2">
                            {job.keywords.split(", ").map((keyword, keywordIndex) => (
                              <Badge key={keywordIndex} variant="outline">
                                {keyword}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
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