import { useTranslations } from "next-intl";
import styles from "./AboutResourceSection.module.scss";
import { PlanetIcon } from "../icons/PlanetIcon";
import { InfoIcon } from "../icons/InfoIcon";
import { PageIcon } from "../icons/PageIcon";
import { DataIcon } from "../icons/DataIcon";
import { LocalIcon } from "../icons/LocalIcon";
import { UsersIcon } from "../icons/UsersIcon";
import Link from "next/link";

export const AboutResourceSection = () => {
  const t = useTranslations("Home.about");
  return (
    <section className="section" id="resource">
      <div className={`container`}>
        {/* <h2 className={`${styles.aboutTitle} sectionTitle`}>{t("title")}</h2>
        <p><span className={styles.aboutBoldText}>Gastro Guide </span> - ваш надійний провідник у світі кулінарії, де кожний куточок планети представлений у всій своїй кулінарній красі. Наше веб-застосунок призначено задовольнити цікавість гурманів та любителів кулінарних пригод, надаючи обширну інформацію про різноманітність світової кухні.</p>
        <h3>Що чекає вас на сайті:</h3>
        <ul>
          <li><h4>Континенти:</h4><p>Вирушайте у захоплюючу кулінарну подорож через всі континенти світу. Дізнайтеся про різноманіття кулінарних традицій, унікальних продуктів та особливостей харчування на кожному континенті. Погрузніться у світ кулінарних таємниць та відкрийте для себе нові смаки та аромати.</p><Link href={"/"}>Перейти</Link></li>
          <li><h4>Країни:</h4><p>Розгадайте кулінарні загадки різних країн світу. Досліджуйте багатство кулінарної спадщини, традиційні страви та інгредієнти кожної країни. Погрузніться в атмосферу місцевих кухонь, дізнайтеся про сезонність продуктів та їхню роль у культурі харчування.</p><Link href={"/"}>Перейти</Link></li>
          <li><h4>Рецепти:</h4><p>Натхненніться різноманіттям кулінарних рецептів з усього світу. Від простих і швидких страв до вишуканих гастрономічних шедеврів - тут ви знайдете щось для себе. Кожен рецепт супроводжується унікальною історією страви, детальним описом приготування, а також інформацією про його поживну цінність.</p><Link href={"/"}>Перейти</Link></li>
          <li><h4>Продукти:</h4><p>Досліджуйте світ продуктів харчування та їх різноманіття. Дізнайтеся про походження, властивості та способи використання різних продуктів у кулінарії. Наш довідник допоможе вам вибрати найкращі інгредієнти для ваших кулінарних експериментів.</p><Link href={"/"}>Перейти</Link></li>
          <li><h4>Здорове харчування:</h4><p>Отримайте корисні поради щодо здорового способу життя та правильного харчування. Дізнайтеся про важливість балансу в раціоні, правильний вибір продуктів та їх вплив на здоров'я. Наш вкладенок про здорове харчування допоможе вам досягти гармонії між смаком та користю.</p><Link href={"/"}>Перейти</Link></li>
          <li><h4>Кулінарні події:</h4><p>Будьте в курсі головних кулінарних подій та фестивалів, що відбуваються по всьому світу. Відкрийте для себе нові кулінарні традиції та враження, познайомтеся з кращими кулінарними майстрами та їхніми дивовижними шедеврами.</p><Link href={"/"}>Перейти</Link></li>
          <li><h4>Довідник методів приготування:</h4><p>Оволодійте різноманітними методами приготування та обробки продуктів. Від основних прийомів до високопродуктивних технік - у нас ви знайдете всю необхідну інформацію, щоб стати справжнім майстром кулінарії.</p><Link href={"/"}>Перейти</Link></li>
          
        </ul> */}
        <ul className={styles.aboutList}>
          <li
            className={`${styles.aboutListItem} ${styles.aboutListItem__first}`}
          >
            <div>
              <PlanetIcon />
            </div>
            <p className={styles.aboutListText}>
              <span className={styles.aboutBoldText}>Gastro Guide </span>
              {t("descriptions.global")}
            </p>
          </li>
          <li
            className={`${styles.aboutListItem} ${styles.aboutListItem__second}`}
          >
            <div>
              <LocalIcon />
            </div>
            <p className={styles.aboutListText}>{t("descriptions.local")}</p>
          </li>
          <li
            className={`${styles.aboutListItem} ${styles.aboutListItem__third}`}
          >
            <div>
              <InfoIcon />
            </div>
            <p className={styles.aboutListText}>
              <span className={styles.aboutBoldText}>Gastro Guide </span>
              {t("descriptions.info")}
            </p>
          </li>
          <li
            className={`${styles.aboutListItem} ${styles.aboutListItem__first}`}
          >
            <div>
              <PageIcon />
            </div>
            <p className={styles.aboutListText}>{t("descriptions.pages")}</p>
          </li>
          <li
            className={`${styles.aboutListItem} ${styles.aboutListItem__second}`}
          >
            <div>
              <DataIcon />
            </div>
            <p className={styles.aboutListText}>{t("descriptions.data")}</p>
          </li>
          <li
            className={`${styles.aboutListItem} ${styles.aboutListItem__third}`}
          >
            <div>
              <UsersIcon />
            </div>
            <p className={styles.aboutListText}>{t("descriptions.user")}</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
