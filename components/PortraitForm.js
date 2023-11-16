import { useEffect, useState } from "react";
import axios from "axios";
import { QuestionForPortrait } from "./QuestionForPortrait";

export const PortraitForm = ({ portrait, portraitContent }) => {
  const [isOpenPortraitForm, setIsOpenPortraitForm] = useState(false);
  const [isSend, setIsSend] = useState(false);
  const [answers, setAnswers] = useState({
    cuisine: [],
    categories: [],
    cookingMethods: [],
    allergies: [],
  });
  const [errors, setErrors] = useState({
    cuisine: false,
    categories: false,
    cookingMethods: false,
    allergies: false,
  });

  const handleOpenPortraitFrom = () => {
    setIsOpenPortraitForm(!isOpenPortraitForm);
  };

  const handleAnswer = (question, answer) => {
    setAnswers((prevAnswers) => {
      const updatedAnswers = { ...prevAnswers };
      if (updatedAnswers[question].includes(answer)) {
        // Видалити опцію, якщо вона вже обрана
        updatedAnswers[question] = updatedAnswers[question].filter(
          (item) => item !== answer
        );
      } else {
        // Додати опцію, якщо її немає в списку
        updatedAnswers[question] = [...updatedAnswers[question], answer];
      }
      return updatedAnswers;
    });

    // Сховати повідомлення про помилку при виборі опції
    setErrors((prevErrors) => ({
      ...prevErrors,
      [question]: false,
    }));
  };

  const isAtLeastOneOptionSelected = (question) => {
    return answers[question].length > 0;
  };

  const showErrorMessage = (question) => {
    // Показати повідомлення про помилку
    setErrors((prevErrors) => ({
      ...prevErrors,
      [question]: true,
    }));
  };

  const saveAnswers = async () => {
    // Перевірка для всіх питань, чи обрана хоча б одна опція
    const isCuisineSelected = isAtLeastOneOptionSelected("cuisine");
    const isCategoriesSelected = isAtLeastOneOptionSelected("categories");
    const isCookingMethodsSelected =
      isAtLeastOneOptionSelected("cookingMethods");
    // const isAllergiesSelected = isAtLeastOneOptionSelected("allergies");

    // Якщо обрана хоча б одна опція для кожного питання, зберегти відповіді
    if (isCuisineSelected && isCategoriesSelected && isCookingMethodsSelected) {
      // Ваш код для збереження відповідей
      const token = localStorage.getItem("authToken");
      try {
        const response = await axios.post(
          "https://gastro-guide-cb84aa2b2322.herokuapp.com/api/user/addPortrait",
          { portrait: answers },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setIsSend(true);
      } catch (err) {
        console.error(err);
      }
    } else {
      // Вивести повідомлення про вибір хоча б однієї опції для кожного питання
      if (!isCuisineSelected) showErrorMessage("cuisine");
      if (!isCategoriesSelected) showErrorMessage("categories");
      if (!isCookingMethodsSelected) showErrorMessage("cookingMethods");
    }
  };

  return (
    <div>
      {portrait.categories.length > 0 ? (
        <h3>{portraitContent.changePortraitText}</h3>
      ) : (
        <h3>{portraitContent.getPortraitText}</h3>
      )}
      {!isOpenPortraitForm ? (
        <button type="button" onClick={handleOpenPortraitFrom}>
          {portraitContent.btn}
        </button>
      ) : isSend ? (
        <h4>{portraitContent.sendFormText}</h4>
      ) : (
        <div>
          <h4>{portraitContent.form.title}</h4>
          <p>{portraitContent.form.description}</p>
          <QuestionForPortrait
            question={portraitContent.form.firstQ.question}
            options={[
              portraitContent.form.firstQ.options.easternEuropean,
              portraitContent.form.firstQ.options.mediterranean,
              portraitContent.form.firstQ.options.northernEuropean,
              portraitContent.form.firstQ.options.eastWestAmerican,
              portraitContent.form.firstQ.options.latinAmerican,
              portraitContent.form.firstQ.options.andean,
              portraitContent.form.firstQ.options.southAmerican,
              portraitContent.form.firstQ.options.tropical,
              portraitContent.form.firstQ.options.northAfrican,
              portraitContent.form.firstQ.options.westAfrican,
              portraitContent.form.firstQ.options.eastAfrican,
              portraitContent.form.firstQ.options.southAfrican,
              portraitContent.form.firstQ.options.centralAfrican,
              portraitContent.form.firstQ.options.middleEast,
              portraitContent.form.firstQ.options.asian,
              portraitContent.form.firstQ.options.southeastAsian,
              portraitContent.form.firstQ.options.indonesian,
              portraitContent.form.firstQ.options.australian,
            ]}
            onAnswer={(answer) => handleAnswer("cuisine", answer)}
            showError={errors.cuisine}
          />

          {/* Питання про категорії страв */}
          <QuestionForPortrait
            question={portraitContent.form.secondQ.question}
            options={[
              portraitContent.form.secondQ.options.sauces,
              portraitContent.form.secondQ.options.garnishes,
              portraitContent.form.secondQ.options.cold,
              portraitContent.form.secondQ.options.hot,
              portraitContent.form.secondQ.options.soups,
              portraitContent.form.secondQ.options.fish,
              portraitContent.form.secondQ.options.meat,
              portraitContent.form.secondQ.options.poultry,
              portraitContent.form.secondQ.options.vegetables,
              portraitContent.form.secondQ.options.cereals,
              portraitContent.form.secondQ.options.pasta,
              portraitContent.form.secondQ.options.desserts,
              portraitContent.form.secondQ.options.baking,
            ]}
            onAnswer={(answer) => handleAnswer("categories", answer)}
            showError={errors.categories}
          />

          {/* Питання про способи приготування */}
          <QuestionForPortrait
            question={portraitContent.form.thirdQ.question}
            options={[
              portraitContent.form.thirdQ.options.stew,
              portraitContent.form.thirdQ.options.bake,
              portraitContent.form.thirdQ.options.boil,
              portraitContent.form.thirdQ.options.fry,
              portraitContent.form.thirdQ.options.steam,
              portraitContent.form.thirdQ.options.deepFryer,
              portraitContent.form.thirdQ.options.grill,
              portraitContent.form.thirdQ.options.fresh,
            ]}
            onAnswer={(answer) => handleAnswer("cookingMethods", answer)}
            showError={errors.cookingMethods}
          />

          {/* Питання про алергії та протипоказання */}
          <QuestionForPortrait
            question={portraitContent.form.fourthQ.question}
            options={[
              portraitContent.form.fourthQ.options.dairy,
              portraitContent.form.fourthQ.options.eggs,
              portraitContent.form.fourthQ.options.gluten,
              portraitContent.form.fourthQ.options.nuts,
              portraitContent.form.fourthQ.options.seafood,
              portraitContent.form.fourthQ.options.soya,
              portraitContent.form.fourthQ.options.spicies,
            ]}
            onAnswer={(answer) => handleAnswer("allergies", answer)}
            showError={errors.allergies}
          />

          <button type="button" onClick={saveAnswers}>
            {portraitContent.form.sendBtn}
          </button>
          <button type="button" onClick={handleOpenPortraitFrom}>
            {portraitContent.form.laterBtn}
          </button>
        </div>
      )}
    </div>
  );
};