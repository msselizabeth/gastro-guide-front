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

  const favButtonsContent = {
    add: t("favButtons.add"),
    delete: t("favButtons.delete"),
  };

  const filterContent = {
    category: {
      label: t("filter.category.label"),
      all: t("filter.category.all"),
      sauces: t("filter.category.sauces"),
      garnishes: t("filter.category.garnishes"),
      cold: t("filter.category.cold"),
      hot: t("filter.category.hot"),
      soups: t("filter.category.soups"),
      fish: t("filter.category.fish"),
      meat: t("filter.category.meat"),
      poultry: t("filter.category.poultry"),
      vegetables: t("filter.category.vegetables"),
      cereals: t("filter.category.cereals"),
      pasta: t("filter.category.pasta"),
      desserts: t("filter.category.desserts"),
      baking: t("filter.category.baking"),
      drinks: t("filter.category.drinks"),
    },
    level: {
      label: t("filter.level.label"),
      all: t("filter.level.all"),
      easy: t("filter.level.easy"),
      med: t("filter.level.med"),
      hard: t("filter.level.hard"),
      extra: t("filter.level.extra"),
    },
  };
  return (
    <>
      <PagesHero image={imageUrl} title={t("title")} />
      <RecipesList
        sectionTitle={t("recipesSection.title")}
        placeholder={t("recipesSection.placeholder")}
        textBtnMore={t("recipesSection.buttonMore")}
        favButtonsContent={favButtonsContent}
        filterContent={filterContent}
      />
    </>
  );
}
