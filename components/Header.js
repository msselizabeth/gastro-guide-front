import { MobileMenu } from "./MobileMenu";
import { MainNavList } from "./MainNavList";
import styles from "../styles/Header.module.scss";
import { daysOne } from "@/app/[locale]/layout";
import { useTranslations } from "next-intl";
import Link from "next-intl/link";
import { Locale } from "./Locale";

export const Header = () => {
  const t  = useTranslations("Header");

  const navList = [
    {
      id: 1,
      title: t("home"),
      path: "/",
      pathUA: "/ua",
      pathEN: "/en"
    },
    {
      id: 2,
      title: t("continents"),
      path: "/continents",
      pathUA: "/ua/continents",
      pathEN: "/en/continents",
    },
    {
      id: 3,
      title: t("countries"),
      path: "/countries",
      pathUA: "/ua/countries",
      pathEN: "/en/countries",
    },
    {
      id: 4,
      title: t("recipes"),
      path: "/recipes",
      pathUA: "/ua/recipes",
      pathEN: "/en/recipes",
    },
    {
      id: 5,
      title: t("products"),
      path: "/products",
      pathUA: "/ua/products",
      pathEN: "/en/products",
    },
    {
      id: 6,
      title: t("manual"),
      path: "/manual",
      pathUA: "/ua/manual",
      pathEN: "/en/manual",
    },
  ];

  const mobileNavList = [
    {
      id: 1,
      title: t("contacts"),
      path: "/ua#contacts",
      pathEn: "/en#contacts"
    },
    {
      id: 2,
      title: t("author"),
      path: "/ua#author",
      pathEn: "/en#author",
    },
    {
      id: 3,
      title: t("resource"),
      path: "/ua#resource",
      pathEn: "/en#resource",
    },
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

         <Locale navList={navList} />          
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
