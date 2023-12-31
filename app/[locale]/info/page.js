
import { useTranslations } from "next-intl";
import styles from "../../../styles/InfoPage.module.scss";
import Image from "next/image";
import { StartTravel } from "@/components/StartTrevel";

export const metadata = {
  title: "Info гастро гіда",
  description:
    "Довідник для гастрономічного гіда. Що таке харчова цінність та як визначається, розрахунок калорійності, білків, жирів, вуглеводів. Корисні властивості харчових продуктів.",
};

export default function ResourcePage() {
  const t = useTranslations("InfoPage");
  return (
    <>
      <h2 className="sectionTitle">Про ресурс</h2>
      <h3 className={styles.info__title}>
        КУЛІНАРНЕ МИСТЕЦТВО: ГАРМОНІЯ СМАКУ ТА ЗДОРОВ’Я
      </h3>
      <div className={styles.info__container}>
        <div>
          <p className={styles.info__text}>
            Мистецтво кулінарії – це не просто навички готування, це
            найстаровинніше мистецтво, що проникає глибоко в історію людства.
            Відзначаючи його корені ще до введення сучасного терміну
            &quot;кулінарія&quot;, де перші люди використовували різні методи
            приготування добичі. Від світових початків до наших днів кулінарне
            мистецтво постійно еволюціонує, надихаючи нас на нові смакові
            відкриття та забезпечуючи наше тіло необхідними живильними
            речовинами.
          </p>
          <p className={styles.info__text}>
            Мистецтво кулінарії - це злиття здоров'я та смаку. Здорова їжа
            повинна містити всі необхідні поживні речовини у відповідних
            пропорціях для підтримки життєдіяльності та нормального розвитку
            людини. Проте важливо пам'ятати, що насичення організму корисними
            речовинами - це лише частина рівноваги. Здорова їжа також має бути
            смачною та відповідати складному сприйняттю смаку, запаху та
            зовнішнього вигляду людини, надавати їй найприємніші відчуття. Лише
            тоді, коли травний сік активується, їжа може бути максимально
            засвоєна організмом. Вживання біологічних добавок не замінить цей
            природний процес.
          </p>
        </div>
        <Image
          src="/culinary_art_1.jpg"
          alt="Gastro Guide logo"
          width={300}
          height={300}
          className={styles.infoImg}
        />
      </div>
      <div className={styles.info__container__rev}>
        <div>
          <p className={styles.info__text}>
            Успішний розвиток кулінарного мистецтва виключає будь-які спрощення
            та шаблони. Кулінарна майстерність непередбачувана, подібно художній
            картині, вимагає великої уваги та творчого підходу, адже кожен
            кулінарний твір - це історія, розповідь, яку ми сприймаємо через
            смак.
          </p>
          <p className={styles.info__text}>
            Говорячи про кулінарію, неможливо не враховувати національні
            особливості готування страв. Кожна нація має свою традиційну кухню з
            унікальними методами готування, смаками та поєднаннями, що
            віддзеркалює культурний аспект кожного народу. Це є не тільки
            способом харчування, але й способом вираження культури та
            ідентичності. Не випадково в світі існують конкретні правила
            етикету, пов'язані саме з приготуванням та споживанням їжі. Чи то
            великі столи для дипломатичних гостей, чи святкові заходи, такі як
            весілля та дні народження - всі вони нероздільно пов'язані із їжею
            та мистецтвом її приготування. Тому необхідно залишатися на рівні
            світового розвитку та вдосконалення особистості, бути освідомленим у
            питаннях кулінарії та культури харчування взагалі.
          </p>
        </div>
        <Image
          src="/culinary_art_2.jpg"
          width={300}
          height={300}
          className={styles.infoImg}
        />
      </div>
      <div className={styles.info__container}>
        <div>
          <p className={styles.info__text}>
            У світі, де життя переплетене зі смаком, важливо розуміти не лише
            основи кулінарії, а й зберігати та розвивати культурну спадщину
            харчування. Саме для цього був створений{" "}
            <span className={styles.bold}>Gastro Guide</span> - ваш провідник у
            світі гастрономії. Та це не просто путівник, а справжня кулінарна
            енциклопедія, яка запрошує вас на захоплюючу подорож через
            різноманітні гастрономічні культури. Харчування, як невід'ємна
            частина життя, в <span className={styles.bold}>Gastro Guide</span>{" "}
            виявляється як не тільки фізіологічна потреба, але й соціальне
            явище, яке приносить задоволення. Застосунок не лише розкриває
            унікальні традиції готування їжі в різних країнах, але і досліджує
            історію страв, відзначаючи їх сезонні особливості. Ви дізнаєтеся про
            те, як харчові звичаї впливають на культуру кожного регіону. І це не
            тільки гастрономічна подорож, а й поглиблене вивчення історії та
            традицій світової кулінарії.
          </p>
          <p className={styles.info__text}>
            Кожна сторінка, присвячена певній країні, насичена захопливою
            інформацією про особливості, історію, традиційні страви та місцеві
            продукти. Описи страв не лише збагачені докладними рецептами, але й
            насичені корисними відомостями про харчову цінність та склад
            інгредієнтів. Такий підхід дозволяє краще розуміти користь та вплив
            прийому конкретних страв на здоров'я. На вкладці, присвяченій
            здоров'ю, ви знайдете ретельно обгрунтовані аспекти як
            &quot;за&quot;, так і &quot;проти&quot; складових компонентів
            рецептів, а також наукові дослідження, пов'язані з хімічним складом
            харчових продуктів. Представлені дієтичні рецепти враховують
            індивідуальні особливості, незалежно від походження страви.
          </p>
        </div>
        <Image
          src="/culinary_art_3.jpg"
          width={300}
          height={300}
          className={styles.infoImg}
        />
      </div>
      <div className={styles.info__container__rev}>
        <div>
          <p className={styles.info__text}>
            Користувацький функціонал{" "}
            <span className={styles.bold}>Gastro Guide</span> робить вашу
            подорож ще цікавішою. Реєстрація в системі дозволяє брати участь в
            обговоренні рецептів, зберігати улюблені рецепти в особистому
            профілі, формувати власний смаковий портер та отримувати персональні
            рекомендації від гіда. А ще на{" "}
            <span className={styles.bold}>Gastro Guide</span> ви знайдете
            інтерактивні покрокові рецепти приготування страв, які дозволяють
            вам в реальному часі вивчати і відчувати кулінарне мистецтво.
          </p>
          <p className={styles.info__text}>
            Не лише кулінарна сторона визначає
            <span className={styles.bold}>Gastro Guide</span>. На додаток до
            рецептів, ви отримаєте цінну інформацію про макро- та мікроелементи
            у продуктах, а також повний хімічний склад найпопулярніших продуктів
            харчування. Ви також дізнаєтеся про найцікавіші події в світі
            кулінарії. І важливо відзначити, що ці дані будуть регулярно
            оновлюватися, щоб завжди дарувати вам нові враження і знання.
          </p>
        </div>
        <Image
          src="/culinary_art_4.jpg"
          width={300}
          height={300}
          className={styles.infoImg}
        />
      </div>
      <div className={styles.info__end__container}>
        <p>
          Якщо у вас є бажання внести свій внесок у розвиток проекту або надати
          пораду стосовно його функціоналу, будь ласка, звертайтеся до служби
          підтримки або в мої соціальні мережі в блоці Контакти. Розвиток цього
          проекту - це спільна справа, і ваш внесок є важливим.
        </p>
        <div className={styles.info__endWord__container}>
          <p>
            Дякую за увагу та запрошую вас на захопливу подорож смаками разом зі
            мною!
          </p>
          <Image
            src="/logo-sections.svg"
            width={80}
            height={80}
            className={styles.infoLogo}
          />
        </div>
      </div>
      <StartTravel />
    </>
  );
}
