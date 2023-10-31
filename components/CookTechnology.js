import styles from "../styles/CookTechnology.module.scss";

export const CookTechnology = ({ cookTitle, cookTechnology }) => {
  return (
    <div className={styles.cook__container}>
      <h2 className={styles.cook__title}>{cookTitle}</h2>
      <ol className={styles.cook__list}>
        {cookTechnology &&
          cookTechnology.map((field, index) => (
            <li key={index} className={styles.cook__item}>
              {field.text}
            </li>
          ))}
      </ol>
    </div>
  );
};