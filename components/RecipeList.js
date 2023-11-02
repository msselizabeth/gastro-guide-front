import Image from "next/image";
import styles from "../styles/RecipeList.module.scss";
import { CookTechnology } from "./CookTechnology";
import { NutritionalValues } from "./NutritionalValues";
import { CalcCaloriesAndMacronutrients } from "./CalcCaloriesAndMarconutrients";

export const RecipeList = ({
  img,
  alt,
  recipe,
  measure,
  sectionTitle,
  cookTitle,
  cookTechnology,
  nutritionalTitle,
  nutritionalValues,
  products,
}) => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="sectionTitle">{sectionTitle}</h2>
        <div className={styles.recipeContainer}>
          <Image
            src={img}
            alt={alt}
            width={300}
            height={250}
            className={styles.recipeImage}
          />
          <ul className={styles.recipeList}>
            {recipe &&
              recipe.map((field, index) => (
                <li key={index} className={styles.recipeItem}>
                  <p>{field.productName}</p>
                  <p>{`${field.quantity} ${measure}`}</p>
                </li>
              ))}
          </ul>
        </div>
        <CookTechnology cookTitle={cookTitle} cookTechnology={cookTechnology} />
        <NutritionalValues
          nutritionalTitle={nutritionalTitle}
          nutritionalValues={nutritionalValues}
        />
        <CalcCaloriesAndMacronutrients
          dish={recipe}
          products={products}
        />
      </div>
    </section>
  );
};