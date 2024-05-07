"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { FavButton } from "./FavButtons";
import styles from "../styles/RecipeList.module.scss";
import Image from "next/image";


export const RecipeList = ({ recipe, favButtonsContent, measure }) => {
  const [user, setUser] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);


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
    const token = localStorage.getItem("authToken");
    if (token) {
      checkAuth(token);
    }
  }, []);

  return (
    <div className={styles.recipeContainer}>
      <Image
        src={recipe.recipeImgSmall}
        alt={recipe.recipeImgAlt}
        width={300}
        height={250}
        className={styles.recipeImage}
      />
      <ul className={styles.recipeList}>
        {recipe.recipe &&
          recipe.recipe.map((field, index) => (
            <li key={index} className={styles.recipeItem}>
              <p>{field.productName}</p>
              <p>{`${field.quantity} ${measure}`}</p>
            </li>
          ))}
      </ul>
      {isAuthenticated && (
        <FavButton
          userFavList={user.favorites}
          favButtonsContent={favButtonsContent}
          recipe={recipe}
          isAuthenticated={isAuthenticated}
        />
      )}
    </div>
  );
};