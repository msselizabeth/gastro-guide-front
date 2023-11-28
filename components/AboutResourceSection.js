import { useTranslations } from "next-intl";
import styles from "../styles/AboutResourceSection.module.scss";
import { PlanetIcon } from "../components/icons/PlanetIcon";
import { InfoIcon } from "../components/icons/InfoIcon";
import { PageIcon } from "../components/icons/PageIcon";
import { DataIcon } from "../components/icons/DataIcon";
import { LocalIcon } from "./icons/LocalIcon";
import { UsersIcon } from "./icons/UsersIcon";

export const AboutResourceSection = () => {
     const t = useTranslations("Home.about");
    return (
      <section className="section" id="resource">
        <div className={`container`}>
          <h2 className={`${styles.aboutTitle} sectionTitle`}>{t("title")}</h2>
          <ul className={styles.aboutList}>
            <li className={`${styles.aboutListItem} ${styles.aboutListItem__first}`}>
              <div>
                <PlanetIcon />
              </div>
              <p className={styles.aboutListText}>
                <span className={styles.aboutBoldText}>Gastro Guide </span>
                {t("descriptions.global")}
              </p>
            </li>
            <li className={`${styles.aboutListItem} ${styles.aboutListItem__second}`}>
              <div>
                <LocalIcon />
              </div>
              <p className={styles.aboutListText}>{t("descriptions.local")}</p>
            </li>
            <li className={`${styles.aboutListItem} ${styles.aboutListItem__third}`}>
              <div>
                <InfoIcon />
              </div>
              <p className={styles.aboutListText}>
                <span className={styles.aboutBoldText}>Gastro Guide </span>
                {t("descriptions.info")}
              </p>
            </li>
            <li className={`${styles.aboutListItem} ${styles.aboutListItem__first}`}>
              <div>
                <PageIcon />
              </div>
              <p className={styles.aboutListText}>{t("descriptions.pages")}</p>
            </li>
            <li className={`${styles.aboutListItem} ${styles.aboutListItem__second}`}>
              <div>
                <DataIcon />
              </div>
              <p className={styles.aboutListText}>{t("descriptions.data")}</p>
            </li>
            <li className={`${styles.aboutListItem} ${styles.aboutListItem__third}`}>
              <div>
                <UsersIcon />
              </div>
              <p className={styles.aboutListText}>{t("descriptions.user")}</p>
            </li>
          </ul>
        </div>
      </section>
    );
};
