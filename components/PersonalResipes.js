import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import styles from "../styles/RecipesList.module.scss";
import Image from "next/image";
import { useParams } from "next/navigation";


export const PersonalRecipes = ({
  recipesListTitle,
  notFoundRecipe,
  recipesListDescription,
}) => {
  const [recipes, setRecipes] = useState([]);
  const params = useParams();
  console.log(params);

  useEffect(() => {
    const getPersonalRecipes = async () => {
      const token = localStorage.getItem("authToken");
      try {
        const recipes = await axios.get(
          `https://gastro-guide-cb84aa2b2322.herokuapp.com/api/user/${params.locale}/portrait`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setRecipes(recipes.data);
      } catch (err) {
        console.error(err);
      }
    };
    getPersonalRecipes();
  }, []);

  return (
    <>
      <h2 className="sectionTitle">{recipesListTitle}</h2>
      {recipes.length > 0 ? (
        <>
          <p>{recipesListDescription}</p>
          <ul className={styles.recipes__list}>
            {recipes.map((recipe) => (
              <li key={recipe._id}>
                <Link
                  href={`/recipes/${recipe._id}`}
                  className={styles.recipes__link}
                >
                  <Image
                    src={recipe.recipeImgSmall}
                    alt={recipe.recipeImgAlt}
                    width={450}
                    height={285}
                    className={styles.recipes__image}
                  />
                  <span className={styles.recipes__name__container}>
                    <span className={styles.recipes__name}>
                      {recipe.recipeName}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <h4>{notFoundRecipe}</h4>
        </>
      )}
    </>
  );
};
