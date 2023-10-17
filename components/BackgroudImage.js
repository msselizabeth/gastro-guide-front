"use client"
import styles from "../styles/BackgroundImage.module.scss";
import { useMediaQuery } from "react-responsive";


export const BackgroundImage = ({ imageMobile, imageTablet, imageDesktop, children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1199 });
    
    const imgUrl = isMobile ? imageMobile.src : (isTablet ? imageTablet.src : imageDesktop.src);

    return (
      <div
        style={{
          backgroundImage: ` linear-gradient(to right,
            rgba(36, 16, 1, 0.25),
            rgba(36, 16, 1, 0.25)), url(${imgUrl})`,
        }}
        className={styles.bgImage}
      >
        {children}
      </div>
    );
};
