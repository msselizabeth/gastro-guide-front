import { UserProfile } from "@/components/UserProfile";
import { useTranslations } from "next-intl";

export default function UserPage() {

  const t = useTranslations("UserProfile");

  const noAuthContent = {
    needAuth: t("noAuth.needAuth"),
    needAuthLink: t("noAuth.needAuthLink"),
    needRegistr: t("noAuth.needRegistr"),
    needRegistrLink: t("noAuth.needRegistrLink"),
  };

  const portraitContent = {
    getPortraitText: t("portrait.getPortraitText"),
    changePortraitText: t("portrait.changePortraitText"),
    btn: t("portrait.btn"),
    sendFormText: t("portrait.sendFormText"),
    form: {
      title: t("portrait.form.title"),
      description: t("portrait.form.description"),
      firstQ: {
        question: t("portrait.form.firstQ.question"),
        options: {
          easternEuropean: t("portrait.form.firstQ.options.easternEuropean"),
          mediterranean: t("portrait.form.firstQ.options.mediterranean"),
          northernEuropean: t("portrait.form.firstQ.options.northernEuropean"),
          eastWestAmerican: t("portrait.form.firstQ.options.eastWestAmerican"),
          latinAmerican: t("portrait.form.firstQ.options.latinAmerican"),
          andean: t("portrait.form.firstQ.options.andean"),
          southAmerican: t("portrait.form.firstQ.options.southAmerican"),
          tropical: t("portrait.form.firstQ.options.tropical"),
          northAfrican: t("portrait.form.firstQ.options.northAfrican"),
          westAfrican: t("portrait.form.firstQ.options.westAfrican"),
          eastAfrican: t("portrait.form.firstQ.options.eastAfrican"),
          southAfrican: t("portrait.form.firstQ.options.southAfrican"),
          centralAfrican: t("portrait.form.firstQ.options.centralAfrican"),
          middleEast: t("portrait.form.firstQ.options.middleEast"),
          asian: t("portrait.form.firstQ.options.asian"),
          southeastAsian: t("portrait.form.firstQ.options.southeastAsian"),
          indonesian: t("portrait.form.firstQ.options.indonesian"),
          australian: t("portrait.form.firstQ.options.australian"),
        },
      },
      secondQ: {
        question: t("portrait.form.secondQ.question"),
        options: {
          sauces: t("portrait.form.secondQ.options.sauces"),
          garnishes: t("portrait.form.secondQ.options.garnishes"),
          cold: t("portrait.form.secondQ.options.cold"),
          hot: t("portrait.form.secondQ.options.hot"),
          soups: t("portrait.form.secondQ.options.soups"),
          fish: t("portrait.form.secondQ.options.fish"),
          meat: t("portrait.form.secondQ.options.meat"),
          poultry: t("portrait.form.secondQ.options.poultry"),
          vegetables: t("portrait.form.secondQ.options.vegetables"),
          cereals: t("portrait.form.secondQ.options.cereals"),
          pasta: t("portrait.form.secondQ.options.pasta"),
          desserts: t("portrait.form.secondQ.options.desserts"),
          baking: t("portrait.form.secondQ.options.baking"),
        },
      },
      thirdQ: {
        question: t("portrait.form.thirdQ.question"),
        options: {
          stew: t("portrait.form.thirdQ.options.stew"),
          bake: t("portrait.form.thirdQ.options.bake"),
          boil: t("portrait.form.thirdQ.options.boil"),
          fry: t("portrait.form.thirdQ.options.fry"),
          steam: t("portrait.form.thirdQ.options.steam"),
          deepFryer: t("portrait.form.thirdQ.options.deepFryer"),
          grill: t("portrait.form.thirdQ.options.grill"),
          fresh: t("portrait.form.thirdQ.options.fresh"),
        },
      },
      fourthQ: {
        question: t("portrait.form.fourthQ.question"),
        options: {
          dairy: t("portrait.form.fourthQ.options.dairy"),
          eggs: t("portrait.form.fourthQ.options.eggs"),
          gluten: t("portrait.form.fourthQ.options.gluten"),
          nuts: t("portrait.form.fourthQ.options.nuts"),
          seafood: t("portrait.form.fourthQ.options.seafood"),
          soya: t("portrait.form.fourthQ.options.soya"),
          spicies: t("portrait.form.fourthQ.options.spicies"),
        },
      },
      sendBtn: t("portrait.form.sendBtn"),
      laterBtn: t("portrait.form.laterBtn"),
    },
  };

  return (
    <UserProfile
      title={t("majorTitle")}
      greatestMess={t("greatestMess")}
      exit={t("exit")}
      noAuthContent={noAuthContent}
      portraitContent={portraitContent}
    />
  );
}
