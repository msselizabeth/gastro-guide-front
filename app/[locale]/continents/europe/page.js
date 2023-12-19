import imageMobile from "../../../../public/continents/europe-mob.jpg";
import imageTablet from "../../../../public/continents/europe-tablet.jpg";
import imageDesktop from "../../../../public/continents/europe-desktop.jpg";
import pointImg from "../../../../public/continents/cheese.svg";
import { useTranslations } from "next-intl";
import { ContinentHeroLeft } from "@/components/ContinentsHeroLeft";
import { CountriesOfContinent } from "@/components/CountriesOfContinent";
import { FeaturesOfTheContinent } from "@/components/FeaturesOfTheContinent";

export const metadata = {
  title: "European cuisine",
};

export default function Europe() {
  const t = useTranslations("Europe");
   const featuresList = [
     {
       text: t("featuresList.point1.text"),
       img: "/continents/regions.jpg",
       alt: t("featuresList.point1.alt"),
     },
     {
       text: t("featuresList.point2.text"),
       img: "/continents/fresh.jpg",
       alt: t("featuresList.point2.alt"),
     },
     {
       text: t("featuresList.point3.text"),
       img: "/continents/culture.jpg",
       alt: t("featuresList.point3.alt"),
     },
     {
       text: t("featuresList.point4.text"),
       img: "/continents/wine.jpg",
       alt: t("featuresList.point4.alt"),
     },
     {
       text: t("featuresList.point5.text"),
       img: "/continents/innovation.jpg",
       alt: t("featuresList.point5.alt"),
     },
   ];
   const featuresProductsList = [
     {
       text: t("featuresProductsList.point1.text"),
       img: "/continents/olives.jpg",
       alt: t("featuresProductsList.point1.alt"),
     },
     {
       text: t("featuresProductsList.point2.text"),
       img: "/continents/grapes.jpg",
       alt: t("featuresProductsList.point2.alt"),
     },
     {
       text: t("featuresProductsList.point3.text"),
       img: "/continents/tomatoes.jpg",
       alt: t("featuresProductsList.point3.alt"),
     },
     {
       text: t("featuresProductsList.point4.text"),
       img: "/continents/cheeses.jpg",
       alt: t("featuresProductsList.point4.alt"),
     },
     {
       text: t("featuresProductsList.point5.text"),
       img: "/continents/bacon.jpg",
       alt: t("featuresProductsList.point5.alt"),
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
