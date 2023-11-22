import { PersonalRecipes } from "@/components/PersonalResipes";
import { useTranslations } from "next-intl";


export default function UserRecipePage() {

  const t = useTranslations("UserProfile");
  
  const favButtonsContent = {
    add: t("favButtons.add"),
    delete: t("favButtons.delete"),
  };
    
    return (
      <PersonalRecipes
        recipesListTitle={t("recipesListTitle")}
        recipesListDescription={t("recipesListDescription")}
        notFoundRecipe={t("notFoundRecipe")}
        favButtonsContent={favButtonsContent}
      />
    );
}