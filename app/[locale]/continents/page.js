import { PagesHero } from "@/components/PagesHero";
import imageUrl from "../../../public/continents/continents-page.jpg";
import { useTranslations } from "next-intl";
import { ContinentalCuisine } from "@/components/continentalCuisine";

export const metadata = {
  title: "Континенти",
  description:
    "Континенти світу та іх гастрономічні особливості. Африка, Азія, Австалія, Европа, Північна Америка, Південна Америка, Океанія",
};


export default function ContinentsPage() {
  const t = useTranslations("ContinentsPage");
  return (
    <>
      <PagesHero image={imageUrl} title={t("title")} />
      <ContinentalCuisine/>
    </>
  );
}
