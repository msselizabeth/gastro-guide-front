import { PagesHero } from "@/components/PagesHero";
import imageUrl from "../../../public/products/products-2.jpg";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Харчові продукти",
  description:
    "Перелік харсових продуктів, хімічний склад харчових продуктів, макроелементи, мікроелементи. Корисні властивості, калорійність продуктів.",
};

export default function ProductsPage() {
  const t = useTranslations("ProductsPage");
  return (
    <PagesHero image={imageUrl} title={t("title")} />
  );
}
