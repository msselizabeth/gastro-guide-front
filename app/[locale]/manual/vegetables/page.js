import { DevelopingPage } from "@/components/DevelopingPage";
import { useTranslations } from "next-intl";

export default function ManualVegetablesPage() {
  const t = useTranslations("ManualPage");

  return <DevelopingPage text={t("developingText")} />;
}
