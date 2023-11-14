import styles from "../styles/CookTechnology.module.scss";
import { CookingSteps } from "./CookingSteps";

export const CookTechnology = ({
  cookTitle,
  cookTechnology,
  steps,
  stepsRecipeContent,
  recipeName,
}) => {
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
      {steps.length > 0 ? (
        <CookingSteps
          steps={steps}
          stepsRecipeContent={stepsRecipeContent}
          recipeName={recipeName}
        />
      ) : (
        <></>
      )}
    </div>
  );
};
