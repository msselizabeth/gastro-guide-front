import { DevelopingPage } from "@/components/DevelopingPage";
import { useTranslations } from "next-intl";

export default function ManualMeatPage() {
  const t = useTranslations("ManualPage");

  return <DevelopingPage text={t("developingText")} />;
}
