

import styles from "../styles/PagesHero.module.scss";


export const PagesHero = ({ title, image }) => {

  return (
    <section>
      <div
        className={` ${styles.pagesHeroContainer}`}
        style={{ backgroundImage: `linear-gradient(to right,
            rgba(36, 16, 1, 0.4),
            rgba(36, 16, 1, 0.4)), url(${image.src})` }}
      >
        <div className={styles.pagesHeroTitleContainer}>
          <h1 className={styles.pagesHeroTitle}>{title}</h1>
        </div>
      </div>
    </section>
  );
};
