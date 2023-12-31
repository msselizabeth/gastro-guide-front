import { DevelopingPage } from "@/components/DevelopingPage";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function ManualMethodsPage() {
  const t = useTranslations("ManualPage");

  return (
    // <div>
    //   <p>
    //     Методи приготування їжі - це способи теполової, фізичної, хімічної та механічної обробки продуктів або
    //     напівфабрикатів для підвищення смаку, харчової цінності та безпеки.
    //     Загалом усі методи діляться на декілька основних, для зручного розуміння вони розділені на
    //     окремі вкладки, де детальніше розглядається кожний:
    //   </p>
    //   <ul>
    //     <li>
    //       <Link href="/manual/cook-methods/fry">Смаження</Link>
    //       <p>
    //         - на цій вкладці ви можете знайти загальну інформацію, опис
    //         варіантів використання(фрітюр, стір-фрай, традиційне смаження),
    //         переваги, недоліки та застереження використання методу.
    //       </p>
    //     </li>
    //     <li>
    //       <Link href="/">Варіння</Link>
    //       <p>
    //         - на цій вкладці ви можете знайти загальну інформацію, опис всіх
    //         варіантів використання(),
    //         переваги, недоліки та застереження використання методу.
    //       </p>
    //     </li>
    //     <li>
    //       <Link href="/">Тушкування</Link>
    //       <p>
    //         - на цій вкладці ви можете знайти загальну інформацію, опис всіх
    //         варіантів використання(),
    //         переваги, недоліки та застереження використання методу.
    //       </p>
    //     </li>
    //     <li>
    //       <Link href="/">Запікання</Link>
    //       <p>
    //         - на цій вкладці ви можете знайти загальну інформацію, опис всіх
    //         варіантів використання(),
    //         переваги, недоліки та застереження використання методу.
    //       </p>
    //     </li>
    //     <li>
    //       <Link href="/">Допоміжні</Link>
    //       <p>
    //         - на цій вкладці ви можете знайти загальну інформацію, опис всіх
    //         варіантів використання(),
    //         переваги, недоліки та застереження використання методу.
    //       </p>
    //     </li>
    //   </ul>
    // </div>
    <DevelopingPage text={t("developingText")} />
  );
}
