import { PagesHero } from "@/components/PagesHero";
import imageUrl from "../../../public/countries/countries-2.jpg";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Країни світу",
  description:
    "Кухня країн світу. Світова кулінарія. Традиції та культура харчування Франції, Італії, Іспанії, Аргентини, США, Канади, України, Іспанії, Греції",
};

export default function CountriesPage() {
  const t = useTranslations("CountriesPage");
  return (
    <PagesHero image={imageUrl} title={t("title")}/>
  );
}
