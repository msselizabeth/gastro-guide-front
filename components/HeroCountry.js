import styles from "../styles/HeroCountry.module.scss";

export const HeroCountry = ({img, title, capital}) => {

    return (
      <section>
        <div
          className={styles.countryHeroContainer}
          style={{
            backgroundImage: `linear-gradient(to right,
            rgba(36, 16, 1, 0.4),
            rgba(36, 16, 1, 0.4)), url(${img})`,
          }}
        >
          <h1 className={styles.countryHeroTitle}>
            {title}
            <span className={styles.countryHeroCapital}>
              {capital}
            </span>
          </h1>
        </div>
      </section>
    );
}