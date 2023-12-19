import Image from "next/image";
import styles from "../styles/FeaturesOfTheContinent.module.scss";

export const FeaturesOfTheContinent = ({
  featuresList,
  pointImg,
  featuresTitle,
  featuresParagraph,
  featuresProductsList,
  featuresProductsParagraph,
}) => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="sectionTitle">{featuresTitle}</h2>
        <p className={styles.features__text}>{featuresParagraph}</p>
        <ul className={styles.features__list}>
          {featuresList.map((feature) => {
            return (
              <li className={styles.features__item}>
                <div className={styles.features__point__container}>
                  <Image
                    className={styles.features__point__img}
                    src={pointImg}
                    width={20}
                    height={40}
                    alt="Point"
                  ></Image>
                  <p className={styles.features__inner__text}>{feature.text}</p>
                </div>
                <Image
                  className={styles.features__img}
                  src={feature.img}
                  alt={feature.alt}
                  width={200}
                  height={200}
                ></Image>
              </li>
            );
          })}
        </ul>
        <p className={styles.features__text}>{featuresProductsParagraph}</p>
        <ul className={styles.features__list}>
          {featuresProductsList.map((feature) => {
            return (
              <li className={styles.features__item}>
                <div className={styles.features__point__container}>
                  <Image
                    className={styles.features__point__img}
                    src={pointImg}
                    width={25}
                    height={25}
                    alt="Point"
                  ></Image>
                  <p className={styles.features__inner__text}>{feature.text}</p>
                </div>
                <Image
                  className={styles.features__img}
                  src={feature.img}
                  alt={feature.alt}
                  width={200}
                  height={200}
                ></Image>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};