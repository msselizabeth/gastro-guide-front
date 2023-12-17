import { useTranslations } from "next-intl";

export default function BoilPage() {
  const t = useTranslations("ManualPage");

  return (
    <div>
      <h2>BOILing</h2>
      <ul>
        <li>
          <h3>Boiling cook </h3>
        </li>
      </ul>
    </div>
  );
}
