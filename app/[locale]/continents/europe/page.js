import imageMobile from "../../../../public/continents/europe-mob.jpg";
import imageTablet from "../../../../public/continents/europe-tablet.jpg";
import imageDesktop from "../../../../public/continents/europe-desktop.jpg";
import { useTranslations } from "next-intl";
import { ContinentHeroLeft } from "@/components/ContinentsHeroLeft";
import { CountriesOfContinent } from "@/components/CountriesOfContinent";

export const metadata = {
  title: "European cuisine",
};

export default function Europe() {
    const t = useTranslations("Europe");
  return (
    <>
      <ContinentHeroLeft
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
