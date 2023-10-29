import { ContinentHeroRight } from "@/components/ContinentHeroRight";
import imageMobile from "../../../../public/continents/australia-mob.jpg";
import imageTablet from "../../../../public/continents/australia-tablet.jpg";
import imageDesktop from "../../../../public/continents/australia-desktop.jpg";
import { useTranslations } from "next-intl";
import { CountriesOfContinent } from "@/components/CountriesOfContinent";

export const metadata = {
  title: "Australia",
};

export default function Australia() {
    const t = useTranslations("Australia");
  return (
    <>
      <ContinentHeroRight
        imageMobile={imageMobile}
        imageTablet={imageTablet}
        imageDesktop={imageDesktop}
        titlefirst={t("title.part1")}
        titlesecond={t("title.part2")}
      />
      <CountriesOfContinent title={t("countriesTitle")} />
    </>
  );
}
