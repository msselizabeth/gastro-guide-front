"use client"
import axios from "axios";
import styles from "../styles/FavoriteList.module.scss"
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FavButton } from "./FavButtons";


export const FavoriteList = ({ favListContent }) => {
  const [favRecipes, setFavRecipes] = useState([]);
  const [isChangeList, setIsChangeList] = useState(false);
  const params = useParams();

  const removeFromFavorites = async (recipeId) => {
    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/favorite`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
          data: {
            recipeId: recipeId,
          },
        }
      );
      setIsChangeList(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const getFavRecipes = async () => {
      const token = localStorage.getItem("authToken");
      try {
        const recipes = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/user/${params.locale}/favorite`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setFavRecipes(recipes.data);
      } catch (err) {
        console.error(err);
      }
      setIsChangeList(false);
    };
    getFavRecipes();
  }, [isChangeList]);

  return (
    <>
      <h2 className="sectionTitle">{favListContent.title}</h2>
      {favRecipes.length > 0 ? (
        <>
          <p className={styles.favList__text}>{favListContent.description}</p>
          <ul className={styles.recipes__list}>
            {favRecipes.map((recipe) => (
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
                <div className={styles.deleteBtn__container}>
                  <button
                    onClick={() => removeFromFavorites(recipe._id)}
                    type="button"
                    className={styles.deleteBtn}
                  >
                    {favListContent.btn}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
        <h4 className={styles.favList__text}>{favListContent.noOne}</h4>
        </>
      )}
    </>
  );
};