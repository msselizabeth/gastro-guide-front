import { useTranslations } from "next-intl";
import { DevelopingPage } from "@/components/DevelopingPage";

export default function AdditionMethodsPage() {
  const t = useTranslations("ManualPage");

  return <DevelopingPage text={t("developingText")} />;
}
