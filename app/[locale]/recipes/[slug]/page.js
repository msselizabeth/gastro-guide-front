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

  const commentsContent = {
    majorTitle: t("comments.majorTitle"),
    noComments: t("comments.noComments"),
    loadMore: t("comments.loadMore"),
    noAuth: {
      message: t("comments.noAuth.message"),
      authLink: t("comments.noAuth.authLink"),
      registerLink: t("comments.noAuth.registerLink"),
    },
    commentForm: {
      message: t("comments.commentForm.message"),
      btn: t("comments.commentForm.btn"),
      messPlaceholder: t("comments.commentForm.messPlaceholder"),
    },
  };

  const stepsRecipeContent = {
    description: t("stepsRecipe.description"),
    note: t("stepsRecipe.note"),
    sub: t("stepsRecipe.sub"),
    startBtn: t("stepsRecipe.startBtn"),
    nextBtn: t("stepsRecipe.nextBtn"),
    prevBtn: t("stepsRecipe.prevBtn"),
    endBtn: t("stepsRecipe.endBtn"),
    helpBtn: t("stepsRecipe.helpBtn"),
    helpTitle: t("stepsRecipe.helpTitle"),
    helpList: {
      one: {
        title: t("stepsRecipe.helpList.one.title"),
        text: t("stepsRecipe.helpList.one.text"),
      },
      two: {
        title: t("stepsRecipe.helpList.two.title"),
        text: t("stepsRecipe.helpList.two.text"),
      },
      three: {
        title: t("stepsRecipe.helpList.three.title"),
        text: t("stepsRecipe.helpList.three.text"),
      },
      four: {
        title: t("stepsRecipe.helpList.four.title"),
        text: t("stepsRecipe.helpList.four.text"),
      },
      five: {
        title: t("stepsRecipe.helpList.five.title"),
        text: t("stepsRecipe.helpList.five.text"),
      },
    },
  };


  return (
    <>
      <RecipeData
        params={params}
        featuresTitle={t("featuresTitle")}
        recipeTitle={t("recipeTitle")}
        measure={t("measures")}
        cookTitle={t("cookTitle")}
        nutritionalTitle={t("nutritionalTitle")}
        staticTextNutritionalValues={staticTextNutritionalValues}
        commentsContent={commentsContent}
        stepsRecipeContent={stepsRecipeContent}
      />
    </>
  );
    }