import { useTranslations } from "next-intl";
import styles from "../../../../styles/Terms.module.scss";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Info гастро гіда",
  description:
    "Умови користування гастрономічним гідом",
};

export default function ResourcePage() {
  const t = useTranslations("InfoPage");
  return (
    <>
      <h1 className="sectionTitle">Умови користування</h1>
      <div className={styles.terms__start__container}>
        <Image
          src="/logo-sections.svg"
          alt="Gastro Guide logo"
          width={80}
          height={80}
          className={styles.termsLogo}
        />
        <p>Ласкаво прошу у світ кулінарії! Я ваш персональний гід.</p>
      </div>

      <p className={styles.terms__start__text}>
        Повідомляю про правила користування моїми можливостями. Реєстрація на
        сайті відкриває перед вами:
      </p>

      <ul className={styles.terms__list}>
        <li className={styles.terms__item}>
          <h2 className={styles.terms__item__title}>Профіль користувача</h2>
          <p className={styles.terms__item__inner__text}>
            <span className={styles.terms__item__inner__title}>
              Ваш персоналізований підбор страв:
            </span>
            заповніть ваш особистий смаковий портрет і отримайте персональний
            перелік традиційних страв світу згідно вашого вибору.
          </p>
          <p className={styles.terms__item__inner__text}>
            <span className={styles.terms__item__inner__title}>
              Ваш особистий лист улюбленого:
            </span>
            зберігайте свої улюблені рецепти в своєму профілі , які будуть
            доступні вам з будь-якого пристрою.
          </p>
          <p className={styles.terms__item__inner__text}>
            <span className={styles.terms__item__inner__title}>
              Спільнота смаків:
            </span>
            приєднуйтеся до обговорень, де кулінарні ентузіасти діляться
            враженнями та порадами.
          </p>
        </li>
        <li className={styles.terms__item}>
          <h2 className={styles.terms__item__title}>
            Авторизація, реєстрація та безпека
          </h2>
          <p className={styles.terms__item__inner__text}>
            Ваша безпека для мене важлива. Зареєструйтеся та скористайтеся
            перевагами:
          </p>
          <p className={styles.terms__item__inner__text}>
            <span className={styles.terms__item__inner__title}>
              Легкість реєстрації:
            </span>
            мені не потрібні багато ваших даних, лише пошта та імʼя, щоб я знав
            як до вас звертатися.
          </p>
          <p className={styles.terms__item__inner__text}>
            <span className={styles.terms__item__inner__title}>
              Технології шифрування:
            </span>
            я використовую передові технології шифрування для захисту вашої
            конфіденційної інформації.
          </p>
        </li>
        <li className={styles.terms__item}>
          <h2 className={styles.terms__item__title}>Правила коментування</h2>
          <p className={styles.terms__item__inner__text}>
            На гастрономічному гіді прагну створити позитивне та дружнє
            середовище:
          </p>
          <p className={styles.terms__item__inner__text}>
            <span className={styles.terms__item__inner__title}>
              Повага до авторів:
            </span>
            залишайте коментарі, що надихають та підтримують. Уникайте
            нецензурної лексики та образ.
          </p>
          <p className={styles.terms__item__inner__text}>
            <span className={styles.terms__item__inner__title}>
              Будьте конструктивними:
            </span>
            ваші враження важливі. Якщо у вас зауваження, будь ласка, виражайте
            їх конструктивно.
          </p>
        </li>
        <li className={styles.terms__item}>
          <h2 className={styles.terms__item__title}>Рецепти та категорії</h2>
          <p className={styles.terms__item__inner__text}>
            Огляньте розділ рецептів, продуктів та країн, там ви знайдете всю
            цікаву інформацію.
          </p>
          <p className={styles.terms__item__inner__text}>
            <span className={styles.terms__item__inner__title}>
              Спеціальні категорії:
            </span>
            відкрийте для себе тему здорового харчування або ознайомтеся з
            кулінарними подіями в світі. Я турботливо ставлюсь до всіх своїх
            користувачів.
          </p>
          <p className={styles.terms__item__inner__text}>
            <span className={styles.terms__item__inner__title}>
              Фільтри рецептів та країн:
            </span>
            обирайте рецепти відповідно до того, чого ви бажаєте скуштувати або
            скільки часу ви маєте на страву.
          </p>
          <p className={styles.terms__item__inner__text}>
            <span className={styles.terms__item__inner__title}>Пошук:</span>
            приєднуйтеся до обговорень, де кулінарні ентузіасти діляться
            враженнями та порадами.
          </p>
          <p className={styles.terms__item__inner__text}>
            <span className={styles.terms__item__inner__title}>
              Допомога в готуванні:{" "}
            </span>
            я допоможу вам приготувати страву за доступним інтерактивним
            покроковим рецептом, що можна знайти на сторінці конкретного
            рецепта.
          </p>
        </li>
        <li className={styles.terms__item}>
          <h2 className={styles.terms__item__title}>Зворотній зв'язок:</h2>
          <p className={styles.terms__item__inner__text}>
            Ваші думки допомагають мені стати кращим. Будь ласка, долучайтеся до
            моїх сторінок в соціальних мережах:
          </p>
          <ul className={styles.terms__social__list}>
            <li className={styles.terms__social__item}>
              <Link
                href="https://instagram.com/_gastroguide?igshid=NTc4MTIwNjQ2YQ=="
                target="_blank"
                className={`${styles.terms__social__link} ${styles.terms__social__linkInsta}`}
              ></Link>
            </li>
            <li className={styles.terms__social__item}>
              <Link
                href="https://www.facebook.com/profile.php?id=100095173823392"
                target="_blank"
                className={`${styles.terms__social__link} ${styles.terms__social__linkFacebook}`}
              ></Link>
            </li>
          </ul>
          <p className={styles.terms__item__inner__text}>
            <span className={styles.terms__item__inner__title}>
              Форма зворотного зв'язку:
            </span>
            маєте ідеї чи зауваження? Напишіть моїй підтримці через форму
            зворотного зв'язку в блоці "Контакти", що розташовані знизу кожної
            сторінки.
          </p>
        </li>
        <li className={styles.terms__item}>
          <h2 className={styles.terms__item__title}>Порушення</h2>
          <p className={styles.terms__item__inner__text}>
            Я сподіваюсь, що ви не станете порушувати правила користування, але
            маю попередити, що за порушення правил ваші коментарі або інші дії
            будуть негайно видалені без попередження , а за систематичне
            порушення вас буде заблоковано.
          </p>
        </li>
      </ul>
      <p className={styles.terms__end__text}>
        Приємної подорожі світом смаків!
      </p>
      <p className={styles.terms__end__text}>
        Із турботою, ваш <span className={styles.bold}>Gastro Guide</span>.
      </p>
    </>
  );
}
