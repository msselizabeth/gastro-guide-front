import Link from "next/link";
import { useTranslations } from "next-intl";
import Image from "next/image";
import styles from "../styles/ContinentsPage.module.scss";

export const ContinentalCuisine = () => {
    const t = useTranslations("ContinentsPage.section");
    return (
      <section className="section">
        <div className="container">
          <h2 className="sectionTitle">{t("title")}</h2>

          <p className={styles.kitchenText}>{t("description.part1")}</p>
          <p className={styles.kitchenText}>{t("description.part2")}</p>

          <ul className={styles.continentsList}>
            <li className={styles.continentsItem}>
              <Link href="/continents/europe" className={styles.continentsLink}>
                <Image
                  src="/continents/europe.svg"
                  alt="Picture of the author"
                  width={310}
                  height={310}
                  className={styles.continentsLinkIcon}
                />
              </Link>

              <h3 className={styles.continentsItemTitle}>
                {t("europe.title")}
              </h3>
              <ul className={styles.continentList}>
                <li className={styles.continentItem}>
                  {t("europe.features.first")}
                </li>
                <li className={styles.continentItem}>
                  {t("europe.features.second")}
                </li>
                <li className={styles.continentItem}>
                  {t("europe.features.third")}
                </li>
              </ul>
              <div className={styles.continentLinkContainer}>
                <Link
                  href="/continents/europe"
                  className={styles.continentLinkButton}
                >
                  {t("textbtn")}
                </Link>
              </div>
            </li>
            <li className={styles.continentsItem}>
              <Link href="/continents/africa" className={styles.continentsLink}>
                <Image
                  src="/continents/africa.svg"
                  alt="Picture of the author"
                  width={310}
                  height={310}
                  className={styles.continentsLinkIcon}
                />
              </Link>

              <h3 className={styles.continentsItemTitle}>
                {t("africa.title")}
              </h3>
              <ul className={styles.continentList}>
                <li className={styles.continentItem}>
                  {t("africa.features.first")}
                </li>
                <li className={styles.continentItem}>
                  {t("africa.features.second")}
                </li>
                <li className={styles.continentItem}>
                  {t("africa.features.third")}
                </li>
                <li className={styles.continentItem}>
                  {t("africa.features.fourth")}
                </li>
              </ul>
              <div className={styles.continentLinkContainer}>
                <Link
                  href="/continents/africa"
                  className={styles.continentLinkButton}
                >
                  {t("textbtn")}
                </Link>
              </div>
            </li>
            <li className={styles.continentsItem}>
              <Link href="/continents/asia" className={styles.continentsLink}>
                <Image
                  src="/continents/asia.svg"
                  alt="Picture of the author"
                  width={310}
                  height={310}
                  className={styles.continentsLinkIcon}
                />
              </Link>

              <h3 className={styles.continentsItemTitle}>{t("asia.title")}</h3>
              <ul className={styles.continentList}>
                <li className={styles.continentItem}>
                  {t("asia.features.first")}
                </li>
                <li className={styles.continentItem}>
                  {t("asia.features.second")}
                </li>
                <li className={styles.continentItem}>
                  {t("asia.features.third")}
                </li>
              </ul>
              <div className={styles.continentLinkContainer}>
                <Link
                  href="/continents/asia"
                  className={styles.continentLinkButton}
                >
                  {t("textbtn")}
                </Link>
              </div>
            </li>
            <li className={styles.continentsItem}>
              <Link
                href="/continents/north-america"
                className={styles.continentsLink}
              >
                <Image
                  src="/continents/northamerica.svg"
                  alt="Picture of the author"
                  width={310}
                  height={310}
                  className={styles.continentsLinkIcon}
                />
              </Link>

              <h3 className={styles.continentsItemTitle}>
                {t("northamerica.title")}
              </h3>
              <ul className={styles.continentList}>
                <li className={styles.continentItem}>
                  {t("northamerica.features.first")}
                </li>
                <li className={styles.continentItem}>
                  {t("northamerica.features.second")}
                </li>
                <li className={styles.continentItem}>
                  {t("northamerica.features.third")}
                </li>
              </ul>
              <div className={styles.continentLinkContainer}>
                <Link
                  href="/continents/north-america"
                  className={styles.continentLinkButton}
                >
                  {t("textbtn")}
                </Link>
              </div>
            </li>
            <li className={styles.continentsItem}>
              <Link
                href="/continents/south-america"
                className={styles.continentsLink}
              >
                <Image
                  src="/continents/southamerica.svg"
                  alt="Picture of the author"
                  width={310}
                  height={310}
                  className={styles.continentsLinkIcon}
                />
              </Link>

              <h3 className={styles.continentsItemTitle}>
                {t("southamerica.title")}
              </h3>
              <ul className={styles.continentList}>
                <li className={styles.continentItem}>
                  {t("southamerica.features.first")}
                </li>
                <li className={styles.continentItem}>
                  {t("southamerica.features.second")}
                </li>
                <li className={styles.continentItem}>
                  {t("southamerica.features.third")}
                </li>
              </ul>
              <div className={styles.continentLinkContainer}>
                <Link
                  href="/continents/south-america"
                  className={styles.continentLinkButton}
                >
                  {t("textbtn")}
                </Link>
              </div>
            </li>
            <li className={styles.continentsItem}>
              <Link
                href="/continents/australia"
                className={styles.continentsLink}
              >
                <Image
                  src="/continents/australia.svg"
                  alt="Picture of the author"
                  width={310}
                  height={310}
                  className={styles.continentsLinkIcon}
                />
              </Link>

              <h3 className={styles.continentsItemTitle}>
                {t("australia.title")}
              </h3>
              <ul className={styles.continentList}>
                <li className={styles.continentItem}>
                  {t("australia.features.first")}
                </li>
                <li className={styles.continentItem}>
                  {t("australia.features.second")}
                </li>
                <li className={styles.continentItem}>
                  {t("australia.features.third")}
                </li>
              </ul>
              <div className={styles.continentLinkContainer}>
                <Link
                  href="/continents/australia"
                  className={styles.continentLinkButton}
                >
                  {t("textbtn")}
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </section>
    );
}