import { PagesHero } from "@/components/PagesHero";
import imageUrl from "../../../public/products/products-2.jpg";
import { useTranslations } from "next-intl";
import { ProductsList } from "@/components/ProductsList";

export const metadata = {
  title: "Харчові продукти",
  description:
    "Перелік харсових продуктів, хімічний склад харчових продуктів, макроелементи, мікроелементи. Корисні властивості, калорійність продуктів.",
};

export default function ProductsPage() {
  const t = useTranslations("ProductsPage");
  return (
    // <PagesHero image={imageUrl} title={t("title")} />
    <ProductsList
      sectionTitle={t("prodSection.title")}
      placeholder={t("prodSection.placeholder")}
      textBtnMore={t("prodSection.buttonMore")}
    />
  );
}
