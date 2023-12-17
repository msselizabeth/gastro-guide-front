import { useTranslations } from "next-intl";

export default function ChemistryCompoundPage() {
  const t = useTranslations("ManualPage");

  return (
    <div>
      <h2>Chemistry</h2>
      <ul>
        <li>
          <h3>Compound info</h3>
        </li>
      </ul>
    </div>
  );
}
