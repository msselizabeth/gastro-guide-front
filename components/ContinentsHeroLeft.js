import { BackgroundImage } from "./BackgroudImage";
import styles from "../styles/ContinentsHeroLeft.module.scss";

export const ContinentHeroLeft = ({ imageDesktop, imageMobile, imageTablet, titlefirst, titlesecond }) => {

  return (
    <section>
      <BackgroundImage
        imageMobile={imageMobile}
        imageTablet={imageTablet}
        imageDesktop={imageDesktop}
      >
        {
          <div className={`${styles.continentTitleContainer}`}>
            <h1 className={styles.continentTitleLeft}>{titlefirst}</h1>
            <h2 className={styles.continentTitleLeftSpan}>
              {titlesecond}
            </h2>
          </div>
        }
      </BackgroundImage>
    </section>
  );
};
