import { RecipeData } from "@/components/RecipeData";
import { useTranslations } from "next-intl";

export default function RecipePage({ params }) {
    const t = useTranslations("RecipePage");

    return (
      <RecipeData
        params={params}
        featuresTitle={t("featuresTitle")}
        recipeTitle={t("recipeTitle")}
        measure={t("measures")}
        cookTitle={t("cookTitle")}
        nutritionalTitle={t("nutritionalTitle")}
      />
    );
}