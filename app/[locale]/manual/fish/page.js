import { useTranslations } from "next-intl";

export default function ManualFishPage() {
  const t = useTranslations("ManualPage");

  return (
    <div>
      <h2>Fish</h2>
      <ul>
        <li>
          <h3>Fish info</h3>
        </li>
      </ul>
    </div>
  );
}
