import { UserMenu } from "@/components/UserMenu";
import { useTranslations } from "next-intl";
import Link from "next/link";


export default function UserLayout({ children }) {

    const t = useTranslations("UserProfile");
    

    return (
      <section className="section">
        <div className="container">
          <h1 className="sectionTitle">{t("majorTitle")}</h1>
          <UserMenu profileText={t("userMenu.profileText")} recipesText={t("userMenu.recipesText")} favotitesText={t("userMenu.favorite")} />
          {children}
        </div>
      </section>
    );
}
