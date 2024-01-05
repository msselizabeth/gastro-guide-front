import { useTranslations } from "next-intl";
import { DevelopingPage } from "@/components/DevelopingPage";

export default function FryPage() {
  const t = useTranslations("ManualPage");

  return <DevelopingPage text={t("developingText")} />;
}
