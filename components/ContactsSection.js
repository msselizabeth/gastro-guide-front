import Link from "next-intl/link";
import { useTranslations } from "next-intl";
import styles from "../styles/ContactsSection.module.scss";


export const ContactsSection = () => {
    const t = useTranslations("Contacts");

    return (
      <section className="section" id="contacts">
        <div className={`container ${styles.contactsContainer}`}>
          <h2 className="sectionTitle">{t("title")}</h2>
          <ul className={styles.contactsList}>
            <li className={styles.contactsListItem}>
              <ul className={styles.contactsSocialList}>
                <li className={styles.contactsSocialItem}>
                  <h3 className={styles.contactsSocialTitle}>
                    {t("socialmedia")}
                  </h3>
                  <ul className={styles.socialLinksList}>
                    <li className={styles.socialLinksItem}>
                      <Link
                        href="https://instagram.com/_gastroguide?igshid=NTc4MTIwNjQ2YQ=="
                        className={`${styles.socialLinksLink} ${styles.socialLinksLinkInsta}`}
                        target="_blank"
                      ></Link>
                    </li>
                    <li className={styles.socialLinksItem}>
                      <Link
                        href="https://www.facebook.com/profile.php?id=100095173823392"
                        className={`${styles.socialLinksLink} ${styles.socialLinksLinkFacebook}`}
                        target="_blank"
                      ></Link>
                    </li>
                  </ul>
                </li>

                <li className={styles.contactsSocialItem}>
                  <h3 className={styles.contactsSocialTitle}>
                    {t("socialAuthor")}
                  </h3>
                  <ul className={styles.socialLinksList}>
                    <li className={styles.socialLinksItem}>
                      <Link
                        href="https://instagram.com/liza_gotovit?igshid=NTc4MTIwNjQ2YQ=="
                        className={`${styles.socialLinksLink} ${styles.socialLinksLinkInsta}`}
                        target="_blank"
                      ></Link>
                    </li>
                    <li className={styles.socialLinksItem}>
                      <Link
                        href="https://www.facebook.com/elizabethsheremet"
                        className={`${styles.socialLinksLink} ${styles.socialLinksLinkFacebook}`}
                        target="_blank"
                      ></Link>
                    </li>
                    <li className={styles.socialLinksItem}>
                      <Link
                        href="https://www.youtube.com/@user-oq6eh1kn3u"
                        className={`${styles.socialLinksLink} ${styles.socialLinksLinkYoutube}`}
                        target="_blank"
                      ></Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className={styles.contactsListItem}>
              <div className={styles.feedbackContainer}>
                <h3 className={styles.contactsTitleMail}>{t("feedback")}</h3>
                <a
                  className={styles.contactsLinkMail}
                  href="mailto:gastroguide@ukr.net"
                >
                  gastroguide@ukr.net
                </a>
              </div>
            </li>
          </ul>
        </div>
      </section>
    );
}