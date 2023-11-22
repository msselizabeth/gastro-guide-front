
import { FavoriteList } from "@/components/FavoriteList";
import { useTranslations } from "next-intl";

export default function UserRecipePage() {
    const t = useTranslations("UserProfile");
    
    const favListContent = {
      title: t("favorite.title"),
      description: t("favorite.description"),
      noOne: t("favorite.noOne"),
      btn: t("favorite.btn"),
    };

  return <FavoriteList favListContent={favListContent} />;
}
