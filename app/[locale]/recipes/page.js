import { PagesHero } from "@/components/PagesHero";
import { useTranslations } from "next-intl";
import imageUrl from "../../../public/recipes/recipes-2.jpg";
import { RecipesList } from "@/components/RecipesList";

export const metadata = {
  title: "Рецепти країн світу",
  description:
    "Рецепти країн світу та іх розгорнутий опис, технологія приготування, харчові властивості, покрокова інстукція. Як приготувати страву? Обрати щось незвичайне на вечерю? Вам сюди.",
};

export default function RecipesPage() {
  const t = useTranslations("RecipesPage");
  return (
    <>
      <PagesHero image={imageUrl} title={t("title")} />
      <RecipesList
        sectionTitle={t("recipesSection.title")}
        placeholder={t("recipesSection.placeholder")}
        textBtnMore={t("recipesSection.buttonMore")}
      />
    </>
  );
}
