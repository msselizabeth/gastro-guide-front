import { PagesHero } from "@/components/PagesHero";
import imageUrl from "../../../public/manual/manual-banner.jpg";
import { useTranslations } from "next-intl";
import styles from "../../../styles/ManualPage.module.scss";
import Image from "next/image";

export const metadata = {
  title: "Довідник гастро гіда",
  description:
    "Довідник для гастрономічного гіда. Що таке харчова цінність та як визначається, розрахунок калорійності, білків, жирів, вуглеводів. Корисні властивості харчових продуктів.",
};

export default function ManualPage() {
  const t = useTranslations("ManualPage");
  return (
    <>
      {/* <PagesHero image={imageUrl} title={t("title")} /> */}
      <div className={styles.manualMenu__container}>
        <Image src={"/manual/manual_1.jpg"} width={70} height={70} className={`${styles.manualMenu__img} ${styles.manualMenu__img__1} `} />
        <Image src={"/manual/manual_2.jpg"} width={70} height={70} className={`${styles.manualMenu__img} ${styles.manualMenu__img__2} `} />
        <Image src={"/manual/manual_3.jpg"} width={70} height={70} className={`${styles.manualMenu__img} ${styles.manualMenu__img__3} `} />
        <Image src={"/manual/manual_4.jpg"} width={70} height={70} className={`${styles.manualMenu__img} ${styles.manualMenu__img__4} `} />
      </div>
    </>
  );
}
