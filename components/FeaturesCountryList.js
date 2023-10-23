
import styles from "../styles/FeaturesCountryList.module.scss";


export const FeaturesCountryList = ({ features, title, sectionTitle }) => {

  return (
    <>
      <section className="section">
        <div className="container">
          <h2 className="sectionTitle">{sectionTitle}</h2>
          <div className={styles.featuresContainer}>
            <h3 className={styles.featuresTitle}>{title}</h3>
            <ul className={styles.featuresList}>
              {features &&
                features.map((field, index) => (
                  <li key={index} className={styles.featuresItem}>
                    {field.text}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};