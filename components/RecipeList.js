import Image from "next/image";
import styles from "../styles/RecipeList.module.scss";
import { CookTechnology } from "./CookTechnology";
import { NutritionalValues } from "./NutritionalValues";
import { CalcCaloriesAndMacronutrients } from "./CalcCaloriesAndMarconutrients";

const recipeSteps = [
  {
    title: "Step 1",
    instruction: "Preheat the oven to 350°F.",
    image: "step1.jpg",
    notes: "",
    sub: "smth",
  },
  {
    title: "Step 2",
    instruction: "Mix the ingredients in a large bowl.",
    image: "step2.jpg",
    notes: "blla bla bla",
  },
  // Add more steps as needed
];

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
  staticTextNutritionalValues,
  stepsRecipe,
  stepsRecipeContent,
  recipeName
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
        <CookTechnology
          cookTitle={cookTitle}
          cookTechnology={cookTechnology}
          steps={stepsRecipe}
          stepsRecipeContent={stepsRecipeContent}
          recipeName={recipeName}
        />

        <NutritionalValues
          nutritionalTitle={nutritionalTitle}
          nutritionalValues={nutritionalValues}
          dish={recipe}
          products={products}
          staticText={staticTextNutritionalValues}
        />
      </div>
    </section>
  );
};
