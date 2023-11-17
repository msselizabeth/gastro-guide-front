import styles from "../styles/QuestionForPortrait.module.scss";

export const QuestionForPortrait = ({ question, options, onAnswer, showError }) => {

  return (
    <div>
      <p className={styles.question}>{question}</p>
      <ul className={styles.options__list}>
        {options.map((option, index) => (
          <li key={index}>
            <label className={styles.options__label}>
              <input
                type="checkbox"
                name={question}
                value={option}
                onChange={() => onAnswer(option)}
                className={styles.options__input}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
      {showError && (
        <p className={styles.error}>Будь ласка, оберіть хоча б одну опцію.</p>
      )}
    </div>
  );
};
