
import { useTranslations } from "next-intl";
import Link from 'next-intl/link';
import { monsA, daysOne } from "./layout";
import styles from "../../styles/Home.module.scss";
import { WorldMap } from "../../components/icons/WorldMapIcon";
import { HeroHomeSection } from "@/components/HeroHomeSection";
import { PlanetIcon } from "@/components/icons/PlanetIcon";
import { InfoIcon } from "@/components/icons/InfoIcon";
import { PageIcon } from "@/components/icons/PageIcon";
import { DataIcon } from "@/components/icons/DataIcon";

const enMetadata = {
  title: "Gastronomic Guide",
};
const uaMetadata = {
  title: "Гастрономічний гід",
};

export async function generateMetadata({params}) {
  return params.locale === "en" ? enMetadata : uaMetadata;
}


export default function Home() {
  const t = useTranslations("Home.about");

  return (
    <>
      <HeroHomeSection />

      <section className="section" id="resource">
        <div className={`container`}>
          <h2 className={`${styles.aboutTitle} sectionTitle`}>{t("title")}</h2>
          <ul className={styles.aboutList}>
            <li className={styles.aboutListItem}>
              <div>
                <PlanetIcon />
              </div>
              <p className={styles.aboutListText}>
                <span className={daysOne.className}>Gastro Guide </span>
                {t("descriptions.global")}
              </p>
            </li>
            <li className={styles.aboutListItem}>
              <div>
                <InfoIcon />
              </div>
              <p className={styles.aboutListText}>
                <span className={daysOne.className}>Gastro Guide </span>
                {t("descriptions.info")}
              </p>
            </li>
            <li className={styles.aboutListItem}>
              <div>
                <PageIcon />
              </div>
              <p className={styles.aboutListText}>{t("descriptions.pages")}</p>
            </li>
            <li className={styles.aboutListItem}>
              <div>
                <DataIcon />
              </div>
              <p className={styles.aboutListText}>{t("descriptions.data")}</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
