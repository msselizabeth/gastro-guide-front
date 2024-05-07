import { useTranslations } from "next-intl";
import Link from "next-intl/link";
import { monsA } from "../../app/[locale]/layout";
import styles from "./Hero.module.scss";
import { slides, slidesEnglish, slidesUkrainian } from "@/data/hero-slider";
import { WorldMap } from "../icons/WorldMapIcon";
import Slider from "./HeroSlider";


export const HeroHomeSection = ({params}) => {
  const t = useTranslations("Home");

  return (
    <section className={`${styles.hero}`}>
      <div className={`${styles.heroContainer}`}>
        <div className={styles.heroTitleContainer}>
          <h1 className={`${styles.heroTitle} ${monsA.className}`}>
            {t("title")}
          </h1>
        </div>

        <div className={styles.chooseTextContainer}>
          <h2 className={`${styles.chooseText} ${monsA.className}`}>
            {t("chooseTitle")}
          </h2>
        </div>
        <Slider exploreBtn={t("heroModalBtns.explore")} closeBtn={t("heroModalBtns.close")} modalTitle={t("heroModalTitle")} />

        {/* <div className={styles.heroMapContainer}> */}
        {/* <WorldMap /> */}
        {/* <Link
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
        </Link></div> */}

        {/* <div className={styles.travelBlock}>
          <h2 className={styles.travelBlockTitle}>Відкрийте світ смаків. Виберіть маршрут.</h2>
          <ul className={styles.travelBlockList}>
            <li className={styles.travelBlockItem}><Link href={"/continents"} className={styles.travelBlockLink}>Continents</Link></li>
            <li className={styles.travelBlockItem}><Link href={"/countries"} className={styles.travelBlockLink}>Countries</Link></li>
          </ul>
        </div> */}
      </div>
    </section>
  );
};
