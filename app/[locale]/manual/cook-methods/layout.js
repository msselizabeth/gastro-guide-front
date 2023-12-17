
import { MethodsMenu } from "@/components/MethodsMenu";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function ManualMethodsLayout({ children }) {
  const t = useTranslations("ManualPage");

  return (
      <>
        <h2 className="sectionTitle">Cook methods</h2>
        <MethodsMenu />
        {children}
    </>
  );
}
