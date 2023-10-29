import imageMobile from "../../../../public/continents/asia-mob.jpg";
import imageTablet from "../../../../public/continents/asia-tablet.jpg";
import imageDesktop from "../../../../public/continents/asia-desktop.jpg";
import { useTranslations } from "next-intl";
import { ContinentHeroLeft } from "@/components/ContinentsHeroLeft";
import { CountriesOfContinent } from "@/components/CountriesOfContinent";

export const metadata = {
  title: "Asia",
};

export default function Asia() {
  const t = useTranslations("Asia");
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
