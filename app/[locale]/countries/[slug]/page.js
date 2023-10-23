"use client"
import { CountryData } from "@/components/FetchCountry";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";


export default function Country({ params }) {

  const pathname = useParams();

  const t = useTranslations("CountryPage");
 
  return (
    <>
      <CountryData
        pathname={pathname}
        featuresTitle={t("featuresTitle")}
        historyTitle={t("historyTitle")}
        seasonsTitle={t("seasonsTitle")}
        dishesTitle={t("dishesTitle")}
      />
    </>
  );
}
