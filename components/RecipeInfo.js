import Image from "next/image";

import { CookTechnology } from "./CookTechnology";
import { NutritionalValues } from "./NutritionalValues";
import { CalcCaloriesAndMacronutrients } from "./CalcCaloriesAndMarconutrients";
import { FavButtonForInnerRecipe } from "./FavButtonForInnerRecipe";
import { RecipeList } from "./RecipeList";


export const RecipeInfo = ({
  recipe,
  measure,
  sectionTitle,
  cookTitle,
  nutritionalTitle,
  products,
  staticTextNutritionalValues,
  stepsRecipeContent,
  favButtonsContent,
}) => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="sectionTitle">{sectionTitle}</h2>
        <RecipeList favButtonsContent={favButtonsContent} recipe={recipe} measure={measure} />
        <CookTechnology
          cookTitle={cookTitle}
          cookTechnology={recipe.cookTechnology}
          steps={recipe.stepsRecipe}
          stepsRecipeContent={stepsRecipeContent}
          recipeName={recipe.recipeName}
        />

        <NutritionalValues
          nutritionalTitle={nutritionalTitle}
          nutritionalValues={recipe.nutritionalValues}
          dish={recipe}
          products={products}
          staticText={staticTextNutritionalValues}
        />
      </div>
    </section>
  );
};
