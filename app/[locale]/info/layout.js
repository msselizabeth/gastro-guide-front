import { InfoMenu } from "@/components/InfoMenu";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function InfoLayout({ children }) {
    const t = useTranslations("InfoPage");
    
    const infoMenuContent = {
      resource: t("menu.resource"),
      author: t("menu.author"),
      terms: t("menu.terms"),
    };

  return (
    <section className="section">
      <div className="container">
              <h1 className="sectionTitle">{t("title")}</h1>
              <InfoMenu infoMenuContent={infoMenuContent} />
        {children}
      </div>
    </section>
  );
}
