import styles from "../styles/NutritionValues.module.scss";

export const NutritionalValues = ({ nutritionalValues, nutritionalTitle }) => {
  return (
    <div className={styles.nutritional__container}>
      <h2 className={styles.nutritional__section_title}>{nutritionalTitle}</h2>
      <ul className={styles.nutritional__list}>
        {nutritionalValues &&
          nutritionalValues.map((field, index) => (
            <li key={index} className={styles.nutritional__item}>
              <span className={styles.nutritional__title}>{field.title}</span>
              <p className={styles.nutritional__text}>{field.text}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};