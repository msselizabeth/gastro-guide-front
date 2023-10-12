import { useTranslations } from "next-intl";

export const MobileMenuNavList = () => {

      const t = useTranslations("Header");
    const navList = [
    { id: 1, title: t("home"), path: "/", pathEn: "/en" },
    {
      id: 2,
      title: t("continents"),
      path: "/continents",
      pathEn: "/en/continents",
    },
    {
      id: 3,
      title: t("countries"),
      path: "/countries",
      pathEn: "en/countries",
    },
    { id: 4, title: t("recipes"), path: "/recipes", pathEn: "en/recipes" },
    { id: 5, title: t("products"), path: "/products", pathEn: "en/products" },
    { id: 6, title: t("manual"), path: "/manual", pathEn: "en/manual" },
  ];
};
