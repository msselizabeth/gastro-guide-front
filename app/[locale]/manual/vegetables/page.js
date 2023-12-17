import { useTranslations } from "next-intl";

export default function ManualVegetablesPage() {
  const t = useTranslations("ManualPage");

  return (
    <div>
      <h2>Vegan</h2>
      <ul>
        <li>
          <h3>Vegan info</h3>
        </li>
      </ul>
    </div>
  );
}
