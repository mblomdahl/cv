import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";
import generatePDF from "react-to-pdf";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";

export const PdfExportButton = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const handleDownload = () => {
    console.log("Generating PDF...");
    const options = {
      filename: `${t.name.toLowerCase().replace(" ", "-")}-cv-${language}.pdf`,
      page: {
        margin: 20,
      },
    };

    generatePDF(() => document.getElementById("cv-content"), options)
      .then(() => {
        console.log("PDF generated successfully");
      })
      .catch((error) => {
        console.error("Error generating PDF:", error);
      });
  };

  return (
    <Button
      onClick={handleDownload}
      variant="outline"
      size="sm"
      className="fixed top-4 left-4 glass-card z-50 h-9 min-h-[36px]"
    >
      <FileDown className="h-4 w-4" />
      PDF
    </Button>
  );
};
