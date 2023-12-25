import { useTranslations } from "next-intl";
import styles from "../../../../styles/Terms.module.scss";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Info гастро гіда",
  description:
    "Умови користування гастрономічним гідом",
};

export default function ResourcePage() {
  const t = useTranslations("InfoPage");
  return (
    <>
      <h1 className="sectionTitle">{t("termsTitle")}</h1>
      <div className={styles.terms__start__container}>
        <Image
          src="/logo-sections.svg"
          alt="Gastro Guide logo"
          width={80}
          height={80}
          className={styles.termsLogo}
        />
        <p>{t("terms.greatest1")}</p>
      </div>

      <p className={styles.terms__start__text}>{t("terms.greatest2")}</p>

      <ul className={styles.terms__list}>
        <li className={styles.terms__item}>
          <h2 className={styles.terms__item__title}>
            {t("terms.profile.title")}
          </h2>
          <p className={styles.terms__item__inner__text}>
            <span className={styles.terms__item__inner__title}>
              {t("terms.profile.subtitle1")}
            </span>
            {t("terms.profile.text1")}
          </p>
          <p className={styles.terms__item__inner__text}>
            <span className={styles.terms__item__inner__title}>
              {t("terms.profile.subtitle2")}
            </span>
            {t("terms.profile.text2")}
          </p>
          <p className={styles.terms__item__inner__text}>
            <span className={styles.terms__item__inner__title}>
              {t("terms.profile.subtitle3")}
            </span>
            {t("terms.profile.text3")}
          </p>
        </li>
        <li className={styles.terms__item}>
          <h2 className={styles.terms__item__title}>
            {t("terms.safety.title")}
          </h2>
          <p className={styles.terms__item__inner__text}>
            {t("terms.safety.additionText")}
          </p>
          <p className={styles.terms__item__inner__text}>
            <span className={styles.terms__item__inner__title}>
              {t("terms.safety.subtitle1")}
            </span>
            {t("terms.safety.text1")}
          </p>
          <p className={styles.terms__item__inner__text}>
            <span className={styles.terms__item__inner__title}>
              {t("terms.safety.subtitle2")}
            </span>
            {t("terms.safety.text2")}
          </p>
        </li>
        <li className={styles.terms__item}>
          <h2 className={styles.terms__item__title}>
            {t("terms.comments.title")}
          </h2>
          <p className={styles.terms__item__inner__text}>
            {t("terms.comments.additionText")}
          </p>
          <p className={styles.terms__item__inner__text}>
            <span className={styles.terms__item__inner__title}>
              {t("terms.comments.subtitle1")}
            </span>
            {t("terms.comments.text1")}
          </p>
          <p className={styles.terms__item__inner__text}>
            <span className={styles.terms__item__inner__title}>
              {t("terms.comments.subtitle2")}
            </span>
            {t("terms.comments.text2")}
          </p>
        </li>
        <li className={styles.terms__item}>
          <h2 className={styles.terms__item__title}>
            {t("terms.categories.title")}
          </h2>
          <p className={styles.terms__item__inner__text}>
            {t("terms.categories.additionText")}
          </p>
          <p className={styles.terms__item__inner__text}>
            <span className={styles.terms__item__inner__title}>
              {t("terms.categories.subtitle1")}
            </span>
            {t("terms.categories.text1")}
          </p>
          <p className={styles.terms__item__inner__text}>
            <span className={styles.terms__item__inner__title}>
              {t("terms.categories.subtitle2")}
            </span>
            {t("terms.categories.text2")}
          </p>
          <p className={styles.terms__item__inner__text}>
            <span className={styles.terms__item__inner__title}>
              {t("terms.categories.subtitle3")}
            </span>
            {t("terms.categories.text3")}
          </p>
          <p className={styles.terms__item__inner__text}>
            <span className={styles.terms__item__inner__title}>
              {t("terms.categories.subtitle4")}
            </span>
            {t("terms.categories.text4")}
          </p>
        </li>
        <li className={styles.terms__item}>
          <h2 className={styles.terms__item__title}>
            {t("terms.feedback.title")}
          </h2>
          <p className={styles.terms__item__inner__text}>
            {t("terms.feedback.additionText")}
          </p>
          <ul className={styles.terms__social__list}>
            <li className={styles.terms__social__item}>
              <Link
                href="https://www.instagram.com/gastro___guide?igshid=OGQ5ZDc2ODk2ZA=="
                target="_blank"
                className={`${styles.terms__social__link} ${styles.terms__social__linkInsta}`}
              ></Link>
            </li>
            <li className={styles.terms__social__item}>
              <Link
                href="https://www.facebook.com/profile.php?id=100095173823392"
                target="_blank"
                className={`${styles.terms__social__link} ${styles.terms__social__linkFacebook}`}
              ></Link>
            </li>
          </ul>
          <p className={styles.terms__item__inner__text}>
            <span className={styles.terms__item__inner__title}>
              {t("terms.feedback.subtitle1")}
            </span>
            {t("terms.feedback.text1")}
          </p>
        </li>
        <li className={styles.terms__item}>
          <h2 className={styles.terms__item__title}>
            {t("terms.violation.title")}
          </h2>
          <p className={styles.terms__item__inner__text}>
            {t("terms.violation.additionText")}
          </p>
        </li>
      </ul>
      <p className={styles.terms__end__text}>{t("terms.end1")}</p>
      <p className={styles.terms__end__text}>
        {t("terms.end2")} <span className={styles.bold}>Gastro Guide</span>.
      </p>
    </>
  );
}
