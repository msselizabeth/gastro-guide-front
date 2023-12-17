import { useTranslations } from "next-intl";

export default function BakePage() {
  const t = useTranslations("ManualPage");

  return (
    <div>
      <h2>Bake</h2>
      <ul>
        <li>
          <h3>Baking cook </h3>
        </li>
      </ul>
    </div>
  );
}
