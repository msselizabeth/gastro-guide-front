
// import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo-icon.svg";
import { MobileMenu } from "./MobileMenu";
import { MainNavList } from "./MainNavList";
import styles from "../styles/Header.module.scss";
import { daysOne } from "@/app/[locale]/layout";


import { useTranslations } from "next-intl";
import Link from "next-intl/link";

 
export const Header = () => {
  const t  = useTranslations("Header");

  const navList = [
    { id: 1, title: t("home"), path: "/", pathEn: "/en" },
    { id: 2, title: t("continents"), path: "/continents", pathEn: "/en/continents" },
    { id: 3, title: t("countries"), path: "/countries", pathEn: "en/countries" },
    { id: 4, title: t("recipes"), path: "/recipes", pathEn: "en/recipes" },
    { id: 5, title: t("products"), path: "/products", pathEn: "en/products" },
    { id: 6, title: t("manual"), path: "/manual", pathEn: "en/manual" },
  ];

  const mobileNavList = [
    { id: 1, title: t("contacts"), path: "/#contacts", pathEn: "/en#contacts" },
    {
      id: 2,
      title: t("author"),
      path: "/#author",
      pathEn: "/en#author",
    },
    {
      id: 3,
      title: t("resource"),
      path: "/#resource",
      pathEn: "/#resource",
    },
  ];

  const authList = [
    { id: 1, title: t("auth"), path: "/auth", pathEn: "/en/auth" },
    { id: 2, title: t("registrate"), path: "/register", pathEn: "/en/register" },
  ];

  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.bgContainer} `}>
        <nav className={`${styles.headerNav} container`}>
          <Link
            href="/"
            className={`${styles.headerLogo} ${daysOne.className}`}
          >
            Gastro
            <span className={styles.headerLogoDecorWord}>Guide</span>
          </Link>

          <MainNavList navList={navList} />
          <div className={styles.locale}>
            <Link href="/" locale="en" className={styles.localeLink}>
              EN
            </Link>

            <Link href="/" locale="ua" className={styles.localeLink}>
              УКР
            </Link>
          </div>
          <MobileMenu
            navList={navList}
            mobileNavList={mobileNavList}
            auth={t("auth")}
            registrate={t("registrate")}
          />
          <ul className={styles.authList}>
            <li>
              <Link
                href="#"
                className={`${styles.authListLink} ${styles.authListLinkAuth}`}
              >
                {t("auth")}
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className={`${styles.authListLink} ${styles.authListLinkRegister}`}
              >
                {t("registrate")}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
