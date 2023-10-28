import { useTranslations } from "next-intl";
import Link from "next-intl/link";
import { monsA } from "../app/[locale]/layout";
import styles from "../styles/Home.module.scss";
import { WorldMap } from "../components/icons/WorldMapIcon";

export const HeroHomeSection = () => {
  const t = useTranslations("Home");
  return (
    <section className={`section ${styles.hero}`}>
      <div className={`container ${styles.heroContainer}`}>
        <WorldMap />
        <Link
          className={`${styles.heroLink} ${styles.heroLinkGreenland}`}
          href="/continents/north-america"
        >
          {t("greenland")}
        </Link>
        <Link
          className={`${styles.heroLink} ${styles.heroLinkNA}`}
          href="/continents/north-america"
        >
          {t("na")}
        </Link>
        <Link
          className={`${styles.heroLink} ${styles.heroLinkSA}`}
          href="/continents/south-america"
        >
          {t("sa")}
        </Link>
        <Link
          className={`${styles.heroLink} ${styles.heroLinkAfrica}`}
          href="/continents/africa"
        >
          {t("africa")}
        </Link>
        <Link
          className={`${styles.heroLink} ${styles.heroLinkEurope}`}
          href="/continents/europe"
        >
          {t("eu")}
        </Link>
        <Link
          className={`${styles.heroLink} ${styles.heroLinkAsia}`}
          href="/continents/asia"
        >
          {t("asia")}
        </Link>
        <Link
          className={`${styles.heroLink} ${styles.heroLinkAU}`}
          href="/continents/australia"
        >
          {t("au")}
        </Link>

        <h1 className={`${styles.heroTitle} ${monsA.className}`}>
          {t("title")}
        </h1>
      </div>
    </section>
  );
};
