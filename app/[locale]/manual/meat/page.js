import { useTranslations } from "next-intl";

export default function ManualMeatPage() {
  const t = useTranslations("ManualPage");

  return (
    <div>
      <h2>Meat</h2>
      <ul>
        <li>
          <h3>Meat info</h3>
        </li>
      </ul>
    </div>
  );
}
