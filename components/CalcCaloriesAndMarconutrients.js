import styles from "../styles/CalcCaloriesAndMacronutrients.module.scss";
async function calculateCalories(products, recipe) {
  let totalCal = 0;
  let weightDish = 0;
  let totalProteins = 0;
  let totalFats = 0;
  let totalCarbohydrates = 0;

  for (const ingredient of recipe) {
    const validProduct = products.result.find(
      (oneProduct) => oneProduct.productName === ingredient.productName
    );

    if (validProduct) {
      const ingredientCal =
        (parseFloat(validProduct.kcal) * ingredient.quantity) / 100;
      totalCal += ingredientCal;

      const proteins =
        (parseFloat(validProduct.macronutrients[0].qnt) * ingredient.quantity) /
        100;
      totalProteins += proteins;

      const fats =
        (parseFloat(validProduct.macronutrients[1].qnt) * ingredient.quantity) /
        100;
      totalFats += fats;

      const carbohydrates =
        (parseFloat(validProduct.macronutrients[2].qnt) * ingredient.quantity) /
        100;
      totalCarbohydrates += carbohydrates;
    }
    weightDish += Number(ingredient.quantity);
  }
  
  const portions = (weightDish / 300).toFixed(2);
  const totalCalPortion = totalCal / portions;
  const totalProteinsPortion = totalProteins / portions;
  const totalFatsPortion = totalFats / portions;
  const totalCarbohydratesPortion = totalCarbohydrates / portions;

  return {
    totalCalories: totalCalPortion.toFixed(2),
    totalProteins: totalProteinsPortion.toFixed(2),
    totalFats: totalFatsPortion.toFixed(2),
    totalCarbohydrates: totalCarbohydratesPortion.toFixed(2),
  };
}

export async function CalcCaloriesAndMacronutrients({ dish, products, staticText }) {

  let calOfDish;
  if (dish) {
    calOfDish = await calculateCalories(products, dish);
  } else {
    console.error("Dish not found or missing recipe");
  }

  return (
    <div>
      <h4 className={styles.nutritionTitle}>{staticText.portion}</h4>
      <ul className={styles.nutritionList}>
        <li>
          <h5>{`${staticText.proteins} ${calOfDish.totalProteins} ${staticText.g}*`}</h5>
        </li>
        <li>
          <h5>{`${staticText.fats} ${calOfDish.totalFats} ${staticText.g}*`}</h5>
        </li>
        <li>
          <h5>{`${staticText.carbohydrates} ${calOfDish.totalCarbohydrates} ${staticText.g}*`}</h5>
        </li>
        <li>
          <h5>{`${staticText.calories} ${calOfDish.totalCalories} ${staticText.cal}*`}</h5>
        </li>
      </ul>
      <p className={styles.attention}>{staticText.attention}</p>
    </div>
  );
};
