import { BackgroundImage } from "./BackgroudImage";
import styles from "../styles/ContinentsHeroRight.module.scss";

export const ContinentHeroRight = ({ imageDesktop, imageMobile, imageTablet, titlefirst,
  titlesecond}) => {

  return (
    <section>
      <BackgroundImage
        imageMobile={imageMobile}
        imageTablet={imageTablet}
        imageDesktop={imageDesktop}
      >
        {
          <div className={`${styles.continentTitleContainer}`}>
            <h1 className={styles.continentTitleRight}>{titlefirst}</h1>
            <h2 className={styles.continentTitleRightSpan}>
              {titlesecond}
            </h2>
          </div>
        }
      </BackgroundImage>
    </section>
  );
}; 