import { useTranslations } from "next-intl";

import Image from "next/image";

export const metadata = {
  title: "Info гастро гіда",
  description:
    "Довідник для гастрономічного гіда. Що таке харчова цінність та як визначається, розрахунок калорійності, білків, жирів, вуглеводів. Корисні властивості харчових продуктів.",
};

export default function ResourcePage() {
  const t = useTranslations("InfoPage");
  return (
    <>
      <h1> Terms page</h1>
    </>
  );
}
