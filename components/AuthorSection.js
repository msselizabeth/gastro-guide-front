import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next-intl/link";
import styles from "../styles/Home.module.scss";
import authorPhotoFirst from "../public/aboutauthor1.jpg";
import authorPhotoSecond from "../public/aboutauthor2.jpg";

export const AuthorSection = () => {
  const t = useTranslations("Home.author");

  return (
    <section className="section">
      <div className={`container ${styles.authorContainer}`}>
        <h2 className="sectionTitle" id="author">
          {t("title")}
        </h2>
        <ul className={styles.authorList}>
          <li className={styles.authotListItem}>
            <p className={styles.authorText}>
              {t("description.greatest")}
              <span className={styles.authorTextParagraph}>
                {t("description.education")}
              </span>
              <span className={styles.authorTextParagraph}>
                {t("description.meaning")}
              </span>
            </p>
            <Image
              src={authorPhotoFirst}
              alt="Шеремет Єлизавета - автор сайту гастро гід"
              className={styles.authorImage}
              placeholder="blur"
            />
          </li>
          <li className={styles.authotListItem}>
            <p className={styles.authorText}>
              {t("description.experience")}
              <span className={styles.authorTextParagraph}>
                {t("description.blog.part1")}
                <Link
                  className={styles.authorTextSocialLink}
                  href="https://instagram.com/liza_gotovit?igshid=NTc4MTIwNjQ2YQ=="
                  target="_blank"
                >
                  Instagram
                </Link>{" "}
                ,{" "}
                <Link
                  className={styles.authorTextSocialLink}
                  href="https://www.youtube.com/@user-oq6eh1kn3u"
                  target="_blank"
                >
                  YouTube
                </Link>
                {t("description.blog.part2")}
              </span>
              <span className={styles.authorTextParagraph}>
                {t("description.gratitude")}
              </span>
            </p>
            <Image
              src={authorPhotoSecond}
              alt="Авторка сайту Gastro Guide - Єлизавета Шеремет"
              className={styles.authorImage}
              placeholder="blur"
            />
          </li>
        </ul>
      </div>
    </section>
  );
};
