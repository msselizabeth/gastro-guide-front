export const QuestionForPortrait = ({ question, options, onAnswer, showError }) => {
  return (
    <div>
      <p>{question}</p>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                name={question}
                value={option}
                onChange={() => onAnswer(option)}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
      {showError && (
        <p style={{ color: "red" }}>Будь ласка, оберіть хоча б одну опцію.</p>
      )}
    </div>
  );
};
