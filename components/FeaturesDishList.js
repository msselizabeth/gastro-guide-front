import styles from "../styles/FeaturesDishList.module.scss";


export const FeaturesDishList = ({sectionTitle, features}) => {

    return (
      <section className="section">
        <div className="container">
          <h2 className="sectionTitle">{sectionTitle}</h2>
          <div className={styles.featuresContainer}>
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
    );
}