import Link from "next/link";
import styles from "../styles/Footer.module.scss";
import { daysOne } from "@/app/[locale]/layout";
import { useTranslations } from "next-intl";

export const Footer = () => {

  const t = useTranslations("Footer");

    return (
      <footer className={styles.footer}>
        <div className={styles.bgContainer}>
          <div className={`container ${styles.footerContainer}`}>
            <div className={styles.footerNavContainer}>
              <h3 className={styles.footerTitle}>{t("navigation")}</h3>
              <ul className={styles.footerNavList}>
                <li>
                  <Link
                    href="/"
                    className={`${styles.footerNavLink} ${styles.footerNavLinkHome}`}
                  >
                    {t("home")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/continents"
                    className={`${styles.footerNavLink} ${styles.footerNavLinkContinents}`}
                  >
                    {t("continents")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/countries"
                    className={`${styles.footerNavLink} ${styles.footerNavLinkCountries}`}
                  >
                    {t("countries")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/recipes"
                    className={`${styles.footerNavLink} ${styles.footerNavLinkRecipes}`}
                  >
                    {t("recipes")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className={`${styles.footerNavLink} ${styles.footerNavLinkProducts}`}
                  >
                    {t("products")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/manual"
                    className={`${styles.footerNavLink} ${styles.footerNavLinkManual}`}
                  >
                    {t("manual")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contacts"
                    className={`${styles.footerNavLink} ${styles.footerNavLinkContacts}`}
                  >
                    {t("contacts")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/info/author"
                    className={`${styles.footerNavLink} ${styles.footerNavLinkAuthor}`}
                  >
                    {t("author")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/info"
                    className={`${styles.footerNavLink} ${styles.footerNavLinkResource}`}
                  >
                    {t("resource")}
                  </Link>
                </li>
              </ul>
            </div>

            <div className={styles.footerContactsStyleBox}>
              <div className={styles.footerContactsContainer}>
                <h3 className={styles.footerTitle}>{t("feedback")}</h3>
                <ul className={styles.footerContactsList}>
                  <li>
                    <Link
                      href="https://www.instagram.com/gastro___guide?igshid=OGQ5ZDc2ODk2ZA=="
                      className={`${styles.footerContactsLink} ${styles.footerContactsLinkInsta}`}
                      target="_blank"
                    ></Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.facebook.com/profile.php?id=100095173823392"
                      className={`${styles.footerContactsLink} ${styles.footerContactsLinkFb}`}
                      target="_blank"
                    ></Link>
                  </li>
                  <li>
                    <Link
                      href="mailto:gastroguide@ukr.net"
                      className={`${styles.footerContactsLink} ${styles.footerContactsLinkMail}`}
                      target="_blank"
                    >
                      gastroguide@ukr.net
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <Link
              href="/"
              className={`${styles.footerLogo} ${daysOne.className}`}
            >
              Gastro
              <span className={styles.footerLogoDecorWord}>Guide</span>
            </Link>
          </div>
        </div>
      </footer>
    );
};
