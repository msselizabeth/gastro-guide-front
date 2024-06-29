"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/CookingSteps.module.scss";


export const CookingSteps = ({ steps, stepsRecipeContent, recipeName }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [help, setHelp] = useState(false);

  const nextStep = () => {
    setCurrentStep(prev => {
      const next = prev + 1;
      saveStep(next);
      return next;
    });
  };

  const prevStep = () => {
    setCurrentStep(prev => {
      const previous = prev - 1;
      const validPrevious = previous >= 0 ? previous : 0;
      saveStep(validPrevious);
      return validPrevious;
    });
  };

  const resetSteps = () => {
    setCurrentStep(0);
    setIsOpen(false);
    localStorage.removeItem("currentStep");
    localStorage.removeItem("isOpen");
  };

  const saveStep = (step) => {
    localStorage.setItem("currentStep", step.toString());
  };

  const saveIsOpen = (isOpen) => {
    localStorage.setItem("isOpen", isOpen.toString());
  };

  const handleClick = () => {
    setIsOpen(true);
    saveIsOpen(true);
    saveStep(currentStep);
  };

  const handleClickHelp = () => {
    setHelp(!help);
  };

  useEffect(() => {
    const savedStep = localStorage.getItem("currentStep");
    const savedIsOpen = localStorage.getItem("isOpen");

    if (savedStep) {
      setCurrentStep(parseInt(savedStep, 10));
    }

    if (savedIsOpen) {
      setIsOpen(savedIsOpen === "true");
    }
  }, []);

  return (
    <>
      {!isOpen ? (
        <>
          <h3 className={styles.stepsCook__startBtn__title}>
            {stepsRecipeContent.helpTitle} {recipeName}!
          </h3>
          <div className={styles.stepsCook__btn__container}>
            <button
              type="button"
              onClick={handleClick}
              className={styles.stepsCook__btn}
            >
              {stepsRecipeContent.startBtn}
            </button>
          </div>
        </>
      ) : (
        <div className={styles.stepsCook__card}>
          <h3 className={styles.stepsCook__primaryTitle}>
            {steps[currentStep].title}
          </h3>

          <div className={styles.stepsCook__card__style}>
            <Image
              src={steps[currentStep].img}
              alt={`Step ${currentStep + 1}`}
              width={300}
              height={300}
              priority={true}
              className={styles.stepsCook__img}
            />

            <div className={styles.stepsCook__instructions__cont}>
              <div className={styles.stepsCook__instructions__inner__cont}>
                <h4 className={styles.stepsCook__titles}>
                  {stepsRecipeContent.description}:
                </h4>
                <p>{steps[currentStep].description}</p>
              </div>
              <div className={styles.stepsCook__instructions__inner__cont}>
                <h4 className={styles.stepsCook__titles}>
                  {stepsRecipeContent.note}:{" "}
                </h4>
                <p>
                  {steps[currentStep].notes ? steps[currentStep].notes : "-"}
                </p>
              </div>
              <div className={styles.stepsCook__instructions__inner__cont}>
                <h4 className={styles.stepsCook__titles}>
                  {stepsRecipeContent.sub}:
                </h4>
                <p>{steps[currentStep].sub ? steps[currentStep].sub : "-"}</p>
              </div>
            </div>
          </div>

          <div className={styles.stepsCook__buttons__cont}>
            {currentStep > 0 && (
              <div className={styles.stepsCook__btn__container}>
                <button onClick={prevStep} className={styles.stepsCook__btn}>
                  {stepsRecipeContent.prevBtn}
                </button>
              </div>
            )}
            {currentStep < steps.length - 1 ? (
              <div className={styles.stepsCook__btn__container}>
                <button onClick={nextStep} className={styles.stepsCook__btn}>
                  {stepsRecipeContent.nextBtn}
                </button>
              </div>
            ) : (
              <div className={styles.stepsCook__btn__container}>
                <button onClick={resetSteps} className={styles.stepsCook__btn}>
                  {stepsRecipeContent.endBtn}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      <div className={styles.stepsCook__btn__container}>
        <button
          type="button"
          onClick={handleClickHelp}
          className={styles.stepsCook__btn}
        >
          {stepsRecipeContent.helpBtn}
        </button>
      </div>
      {help && (
        <div className={styles.stepsCook__help__list__cont}>
          <ul className={styles.stepsCook__help__list}>
            <li>
              <h4>{stepsRecipeContent.helpList.one.title}</h4>
              <p>{stepsRecipeContent.helpList.one.text}</p>
            </li>
            <li>
              <h4>{stepsRecipeContent.helpList.two.title}</h4>
              <p>{stepsRecipeContent.helpList.two.text}</p>
            </li>

            <li>
              <h4>{stepsRecipeContent.helpList.four.title}</h4>
              <p>{stepsRecipeContent.helpList.four.text}</p>
            </li>
            <li>
              <h4>{stepsRecipeContent.helpList.three.title}</h4>
              <p>{stepsRecipeContent.helpList.three.text}</p>
            </li>
            <li>
              <h4>{stepsRecipeContent.helpList.five.title}</h4>
              <p>{stepsRecipeContent.helpList.five.text}</p>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

