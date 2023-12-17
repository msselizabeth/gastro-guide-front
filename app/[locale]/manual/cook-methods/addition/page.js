import { useTranslations } from "next-intl";

export default function AdditionMethodsPage() {
  const t = useTranslations("ManualPage");

  return (
    <div>
      <h2>Addition</h2>
      <ul>
        <li>
          <h3>Addition methods </h3>
        </li>
      </ul>
    </div>
  );
}
