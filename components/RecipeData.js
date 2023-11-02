import { FeaturesDishList } from "./FeaturesDishList";
import { HeroCountryAndRecipe } from "./HeroCountryAndRecipe";
import { RecipeList } from "./RecipeList";


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
      <RecipeList
        recipe={recipe.recipe}
        measure={measure}
        sectionTitle={recipeTitle}
        img={recipe.recipeImgSmall}
        alt={recipe.recipeImgAlt}
        cookTitle={cookTitle}
        cookTechnology={recipe.cookTechnology}
        nutritionalTitle={nutritionalTitle}
        nutritionalValues={recipe.nutritionalValues}
        products={products}
      />
    </>
  );
};