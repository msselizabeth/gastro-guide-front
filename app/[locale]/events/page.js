import { PagesHero } from "@/components/PagesHero";
import imageUrl from "../../../public/manual/manual-2.jpg";
import { useTranslations } from "next-intl";
import { DevelopingPage } from "@/components/DevelopingPage";

export const metadata = {
  title: "Довідник гастро гіда",
  description:
    "Довідник для гастрономічного гіда. Що таке харчова цінність та як визначається, розрахунок калорійності, білків, жирів, вуглеводів. Корисні властивості харчових продуктів.",
};

export default function EventsPage() {
  
  const t = useTranslations("EventsPage");
  return <DevelopingPage text={t("developingText")} />;
}
