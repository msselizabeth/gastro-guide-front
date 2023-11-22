import { MobileMenu } from "./MobileMenu";
import { MainNavList } from "./MainNavList";
import styles from "../styles/Header.module.scss";
import { daysOne } from "@/app/[locale]/layout";
import { useTranslations } from "next-intl";
import Link from "next-intl/link";
import { Locale } from "./Locale";
import { AuthHeader } from "./AuthHeader";
import Image from "next/image";


export const Header = () => {
  const t  = useTranslations("Header");

  const navList = [
    {
      id: 1,
      title: t("home"),
      path: "/",
      pathUA: "/ua",
      pathEN: "/en",
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
      id: 7,
      title: t("health"),
      path: "/health",
      pathUA: "/ua/health",
      pathEN: "/en/health",
    },
    {
      id: 8,
      title: t("events"),
      path: "/events",
      pathUA: "/ua/events",
      pathEN: "/en/events",
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
      path: "/#contacts",
    },
    {
      id: 2,
      title: t("author"),
      path: "/#author",
    },
    {
      id: 3,
      title: t("resource"),
      path: "/#resource",
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

              <Image
                src="/logo-sections.svg"
                width={100}
                height={100}
                className={styles.logo}
              />

            <div>
              <span className={styles.headerLogoDecorWord}>Gastro</span>
              <span
                className={`${styles.headerLogoDecorWord} ${styles.headerLogo__GuideWord}`}
              >
                Guide
              </span>
            </div>
          </Link>

          <MainNavList navList={navList} />

          <Locale navList={navList} />
          <MobileMenu
            navList={navList}
            mobileNavList={mobileNavList}
            auth={t("auth")}
            registrate={t("registrate")}
            textExit={t("exit")}
            textProfile={t("profile")}
          />
          <AuthHeader
            textAuth={t("auth")}
            textRegister={t("registrate")}
            textExit={t("exit")}
            textProfile={t("profile")}
          />
        </nav>
      </div>
    </header>
  );
};
