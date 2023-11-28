import { ManualMenu } from "@/components/ManualMenu";
import { UserMenu } from "@/components/UserMenu";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function ManualLayout({ children }) {
  const t = useTranslations("ManualPage");

  return (
    <section className="section">
      <div className="container">
              <h1 className="sectionTitle">{t("title")}</h1>
              <ManualMenu />
        {children}
      </div>
    </section>
  );
}
