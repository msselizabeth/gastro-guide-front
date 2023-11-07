import { RecipeData } from "@/components/RecipeData";
import { useTranslations } from "next-intl";

export default function RecipePage({ params }) {
  const t = useTranslations("RecipePage");
  
  const staticTextNutritionalValues = {
    portion: t("nutritionalValues.portion"),
    proteins: t("nutritionalValues.proteins"),
    fats: t("nutritionalValues.fats"),
    carbohydrates: t("nutritionalValues.carbohydrates"),
    calories: t("nutritionalValues.calories"),
    attention: t("nutritionalValues.attention"),
    g: t("nutritionalValues.measures.g"),
    mg: t("nutritionalValues.measures.mg"),
    cal: t("nutritionalValues.measures.cal"),
  };

    return (
      <RecipeData
        params={params}
        featuresTitle={t("featuresTitle")}
        recipeTitle={t("recipeTitle")}
        measure={t("measures")}
        cookTitle={t("cookTitle")}
        nutritionalTitle={t("nutritionalTitle")}
        staticTextNutritionalValues={staticTextNutritionalValues}
      />
    );
    }