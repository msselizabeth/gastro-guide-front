import { ContinentHeroRight } from "@/components/ContinentHeroRight";
import imageMobile from "../../../../public/continents/africa-mob.jpg";
import imageTablet from "../../../../public/continents/africa-tablet.jpg";
import imageDesktop from "../../../../public/continents/africa-desktop.jpg";
import { useTranslations } from "next-intl";
import { CountriesOfContinent } from "@/components/CountriesOfContinent";

export const metadata = {
  title: "Africa",
};

export default function Africa() {
  const t = useTranslations("Africa");
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
