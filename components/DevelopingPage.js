import Image from "next/image";
import styles from "../styles/DevelopingPage.module.scss"

export const DevelopingPage = ({text}) => {
    return (
        <div className={`container ${styles.dev__container}`}>
        <Image
          src="/logo-sections.svg"
          alt="gastro guide"
          width={100}
          height={100}
          className={styles.logo}
          priority={true}
            />
            <h1 className={styles.dev__title}>{text}</h1>
      </div>
    );
}