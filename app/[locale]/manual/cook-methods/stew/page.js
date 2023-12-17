import { useTranslations } from "next-intl";

export default function RoastPage() {
  const t = useTranslations("ManualPage");

  return (
    <div>
      <h2>Тушкування</h2>
      <ul>
        <li>
          <h3>Тушкування - як метод приготування їжі </h3>
        </li>
      </ul>
    </div>
  );
}
