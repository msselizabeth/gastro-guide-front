"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import styles from "../styles/RecipesList.module.scss";
import Image from "next/image";
import { useParams } from "next/navigation";
import { FavButton } from "./FavButtons";


export const PersonalRecipes = ({
  recipesListTitle,
  notFoundRecipe,
  recipesListDescription,
  favButtonsContent,
}) => {
  const [recipes, setRecipes] = useState([]);
  const [user, setUser] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const params = useParams();

  async function checkAuth(token) {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/current`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const userData = response.data;
      setUser(userData);
      setIsAuthenticated(true);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    const getPersonalRecipes = async () => {
      const token = localStorage.getItem("authToken");
      if (token) {
        checkAuth(token);
      }
      try {
        const recipes = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/user/${params.locale}/portrait`,
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
      {isAuthenticated && recipes.length > 0 ? (
        <>
          <p>{recipesListDescription}</p>
          <ul className={styles.recipes__list}>
            {recipes.map((recipe) => (
              <li key={recipe._id} className={styles.recipes__item}>
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
                {isAuthenticated && (
                  <FavButton
                    recipe={recipe}
                    userFavList={user.favorites}
                    isAuthenticated={isAuthenticated}
                    favButtonsContent={favButtonsContent}
                  />
                )}
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
