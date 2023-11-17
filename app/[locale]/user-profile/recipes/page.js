import { PersonalRecipes } from "@/components/PersonalResipes";
import { useTranslations } from "next-intl";


export default function UserRecipePage() {

    const t = useTranslations("UserProfile");
    
    return (
      <PersonalRecipes
        recipesListTitle={t("recipesListTitle")}
        recipesListDescription={t("recipesListDescription")}
        notFoundRecipe={t("notFoundRecipe")}
      />
    );
}