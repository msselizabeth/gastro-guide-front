import Link from "next/link";
import { useTranslations } from "next-intl";
import styles from "../styles/Home.module.scss";

export const StartTravel = () => {
    const t = useTranslations("Travel");

    return (
      <section className="section">
        <div className={`container ${styles.travelContainer}`}>
          <h2 className={styles.travelTitle}>{t("title")}</h2>
          <ul className={styles.travelList}>
            <li className={styles.travelItem}>
              <div className={styles.travelLinkContainer}>
                <Link href="/continents" className={styles.travelLink}>
                  {t("choose.continent")}
                </Link>
              </div>
            </li>
            <li className={styles.travelItem}>
              <div className={styles.travelLinkContainer}>
                <Link href="/countries" className={styles.travelLink}>
                  {t("choose.country")}
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </section>
    );
}