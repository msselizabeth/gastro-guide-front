import { useTranslations } from "next-intl";

export default function FryPage() {
  const t = useTranslations("ManualPage");

  return (
    <div>
      <h2>Fry</h2>
      <ul>
        <li>
          <h3>Fry fry fry fry </h3>
        </li>
      </ul>
    </div>
  );
}
