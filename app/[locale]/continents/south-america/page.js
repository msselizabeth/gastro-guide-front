import { ContinentHeroRight } from "@/components/ContinentHeroRight";
import imageMobile from "../../../../public/continents/south-america-mob.jpg";
import imageTablet from "../../../../public/continents/south-america-tablet.jpg";
import imageDesktop from "../../../../public/continents/south-america-desktop.jpg";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Південна Америка",
};

export default function SouthAmerica() {
  const t = useTranslations("SouthAmerica");
  return (
    <>
      <ContinentHeroRight
        imageMobile={imageMobile}
        imageTablet={imageTablet}
        imageDesktop={imageDesktop}
        titlefirst={t("title.part1")}
        titlesecond={t("title.part2")}
      />
    </>
  );
}
