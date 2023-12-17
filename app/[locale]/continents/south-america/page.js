import { ContinentHeroRight } from "@/components/ContinentHeroRight";
import imageMobile from "../../../../public/continents/south-america-mob.jpg";
import imageTablet from "../../../../public/continents/south-america-tablet.jpg";
import imageDesktop from "../../../../public/continents/south-america-desktop.jpg";
import pointImg from "../../../../public/continents/chilie-icon.svg";
import { useTranslations } from "next-intl";
import { CountriesOfContinent } from "@/components/CountriesOfContinent";
import { FeaturesOfTheContinent } from "@/components/FeaturesOfTheContinent";


export const metadata = {
  title: "Південна Америка",
};


export default function SouthAmerica() {
  const t = useTranslations("SouthAmerica");

  const featuresList = [
    {
      text: t("featuresList.point1.text"),
      img: "/continents/ceviche-peru-mob.jpg",
      alt: t("featuresList.point1.alt"),
    },
    {
      text: t("featuresList.point2.text"),
      img: "/continents/asado-argentina-mob.jpg",
      alt: t("featuresList.point2.alt"),
    },
    {
      text: t("featuresList.point3.text"),
      img: "/continents/breakfast-brazilia-mob.jpg",
      alt: t("featuresList.point3.alt"),
    },
    {
      text: t("featuresList.point4.text"),
      img: "/continents/seafood-chilie-mob.jpg",
      alt: t("featuresList.point4.alt"),
    },
    {
      text: t("featuresList.point5.text"),
      img: "/continents/arepas-venesyela-mob.jpg",
      alt: t("featuresList.point5.alt"),
    },
    {
      text: t("featuresList.point6.text"),
      img: "/continents/exotic-fruits-amazonka-mob.jpg",
      alt: t("featuresList.point6.alt"),
    },
  ];
  const featuresProductsList = [
    {
      text: t("featuresProductsList.point1.text"),
      img: "/continents/potatoes.jpg",
      alt: t("featuresProductsList.point1.alt"),
    },
    {
      text: t("featuresProductsList.point2.text"),
      img: "/continents/chili.jpg",
      alt: t("featuresProductsList.point2.alt"),
    },
    {
      text: t("featuresProductsList.point3.text"),
      img: "/continents/amaranth.jpeg",
      alt: t("featuresProductsList.point3.alt"),
    },
    {
      text: t("featuresProductsList.point4.text"),
      img: "/continents/quinoa.jpg",
      alt: t("featuresProductsList.point4.alt"),
    },
    {
      text: t("featuresProductsList.point5.text"),
      img: "/continents/chocolate.jpg",
      alt: t("featuresProductsList.point5.alt"),
    },
  ];


  return (
    <>
      <ContinentHeroRight
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
