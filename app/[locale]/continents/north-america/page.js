import imageMobile from "../../../../public/continents/north-america-mob.jpg";
import imageTablet from "../../../../public/continents/north-america-tablet.jpg";
import imageDesktop from "../../../../public/continents/north-america-desktop.jpg";
import { useTranslations } from "next-intl";
import { ContinentHeroLeft } from "@/components/ContinentsHeroLeft";

export const metadata = {
  title: "North Америка",
};

export default function NorthAmerica() {
    const t = useTranslations("NorthAmerica");
  return (
    <>
      <ContinentHeroLeft
        imageMobile={imageMobile}
        imageTablet={imageTablet}
        imageDesktop={imageDesktop}
        titlefirst={t("title.part1")}
        titlesecond={t("title.part2")}
      />
    </>
  );
}
