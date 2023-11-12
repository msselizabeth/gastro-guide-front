import { UserProfile } from "@/components/UserProfile";
import { useTranslations } from "next-intl";

export default function UserPage() {

  const t = useTranslations("UserProfile");

  return (
    <UserProfile
      title={t("majorTitle")}
      greatestMess={t("greatestMess")}
      exit={t("exit")}
    />
  );
}
