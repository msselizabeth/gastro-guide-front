import imageMobile from "../../../../public/continents/north-america-mob.jpg";
import imageTablet from "../../../../public/continents/north-america-tablet.jpg";
import imageDesktop from "../../../../public/continents/north-america-desktop.jpg";
import pointImg from "../../../../public/continents/corn-icon.svg";
import { CountriesOfContinent } from "@/components/CountriesOfContinent";
import { useTranslations } from "next-intl";
import { ContinentHeroLeft } from "@/components/ContinentsHeroLeft";
import { FeaturesOfTheContinent } from "@/components/FeaturesOfTheContinent";

export const metadata = {
  title: "North Америка",
};

export default function NorthAmerica() {
  const t = useTranslations("NorthAmerica");
    const featuresList = [
      {
        text: t("featuresList.point1.text"),
        img: "/continents/fast-food-na-mob.jpg",
        alt: t("featuresList.point1.alt"),
      },
      {
        text: t("featuresList.point2.text"),
        img: "/culinary_art_4.jpg",
        alt: t("featuresList.point2.alt"),
      },
      {
        text: t("featuresList.point3.text"),
        img: "/continents/tacos-na-mob.jpg",
        alt: t("featuresList.point3.alt"),
      },
      {
        text: t("featuresList.point4.text"),
        img: "/continents/food-festival-na-mob.jpg",
        alt: t("featuresList.point4.alt"),
      },
      {
        text: t("featuresList.point5.text"),
        img: "/continents/drinks-na-mob.jpg",
        alt: t("featuresList.point5.alt"),
      },
      {
        text: t("featuresList.point6.text"),
        img: "/continents/breakfast-na-mob.jpg",
        alt: t("featuresList.point6.alt"),
      },
    ];
    const featuresProductsList = [
      {
        text: t("featuresProductsList.point1.text"),
        img: "/continents/pumpkin-na-mob.jpg",
        alt: t("featuresProductsList.point1.alt"),
      },
      {
        text: t("featuresProductsList.point2.text"),
        img: "/continents/beans-na-mob.jpg",
        alt: t("featuresProductsList.point2.alt"),
      },
      {
        text: t("featuresProductsList.point3.text"),
        img: "/continents/cranberry-na-mob.jpg",
        alt: t("featuresProductsList.point3.alt"),
      },
      {
        text: t("featuresProductsList.point4.text"),
        img: "/continents/corn-na-mob.jpg",
        alt: t("featuresProductsList.point4.alt"),
      },
    ];
  return (
    <>
      <ContinentHeroLeft
        imageMobile={imageMobile}
        imageTablet={imageTablet}
        imageDesktop={imageDesktop}
        titlefirst={t("title.part1")}
        titlesecond={t("title.part2")}
      />
      <FeaturesOfTheContinent
        featuresList={featuresList}
        pointImg={pointImg}
        featuresTitle={t("featuresTitle")}
        featuresParagraph={t("featuresList.parag")}
        featuresProductsList={featuresProductsList}
        featuresProductsParagraph={t("featuresProductsList.parag")}
      />
      <CountriesOfContinent title={t("countriesTitle")} />
    </>
  );
}
