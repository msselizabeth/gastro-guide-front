import { Comments } from "./Comments";
import { FeaturesDishList } from "./FeaturesDishList";
import { HeroCountryAndRecipe } from "./HeroCountryAndRecipe";
import { RecipeInfo } from "./RecipeInfo";


export async function FetchRecipe(params) {
  const response = await fetch(
    `https://gastro-guide-cb84aa2b2322.herokuapp.com/api/${params.locale}/recipes/${params.slug}`
  );
  const recipe = await response.json();
  return recipe;
}

export async function FetchProducts(params) {
  const response = await fetch(
    `https://gastro-guide-cb84aa2b2322.herokuapp.com/api/${params.locale}/products`
  );
  const products = await response.json();
  return products;
}

export const RecipeData = async ({
  params,
  featuresTitle,
  recipeTitle,
  measure,
  cookTitle,
  nutritionalTitle,
  staticTextNutritionalValues,
  commentsContent,
  stepsRecipeContent,
  favButtonsContent,
}) => {
  const recipe = await FetchRecipe(params);

  const products = await FetchProducts(params);

  return (
    <>
      <HeroCountryAndRecipe
        img={recipe.recipeImgHero}
        title={recipe.recipeName}
      />
      <FeaturesDishList
        features={recipe.featuresDish}
        sectionTitle={featuresTitle}
      />
      <RecipeInfo
        recipe={recipe}
        measure={measure}
        sectionTitle={recipeTitle}
        cookTitle={cookTitle}
        nutritionalTitle={nutritionalTitle}
        products={products}
        staticTextNutritionalValues={staticTextNutritionalValues}
        stepsRecipeContent={stepsRecipeContent}
        favButtonsContent={favButtonsContent}
      />

      <Comments commentsContent={commentsContent} id={params.slug} />
    </>
  );
};
