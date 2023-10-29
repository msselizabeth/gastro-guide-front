import { CountryData } from "@/components/FetchCountry";
import { useTranslations } from "next-intl";

export default function Country({ params }) {

  const t = useTranslations("CountryPage");
 
  return (
    <>
      <CountryData
        params={params}
        featuresTitle={t("featuresTitle")}
        historyTitle={t("historyTitle")}
        seasonsTitle={t("seasonsTitle")}
        dishesTitle={t("dishesTitle")}
      />
    </>
  );
}
