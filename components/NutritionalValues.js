import styles from "../styles/NutritionValues.module.scss";
import { CalcCaloriesAndMacronutrients } from "./CalcCaloriesAndMarconutrients";

export const NutritionalValues = ({ nutritionalValues, nutritionalTitle, dish, products, staticText }) => {
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
      <CalcCaloriesAndMacronutrients
        dish={dish}
        products={products}
        staticText={staticText}
      />
    </div>
  );
};