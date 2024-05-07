import { Comments } from "./Comments";
import { FeaturesDishList } from "./FeaturesDishList";
import { HeroCountryAndRecipe } from "./HeroCountryAndRecipe";
import { RecipeInfo } from "./RecipeInfo";


export async function FetchRecipe(params) {
  let response;
  if (params.locale === 'en') {
    response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/recipes/${params.slug}`)
  } else {
    response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/${params.locale}/recipes/${params.slug}`
  );
  }
  const recipe = await response.json();
  return recipe;
}

export async function FetchProducts(params) {
  let response;
  if (params.locale === 'en') {
    response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/products`)
  } else { response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/${params.locale}/products`
  );}
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
