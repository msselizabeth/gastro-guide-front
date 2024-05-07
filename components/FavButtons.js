import axios from "axios";
import { useState } from "react";
import styles from "../styles/FavButtons.module.scss";

export const FavButton = ({
  recipe,
  userFavList,
  isAuthenticated,
  favButtonsContent,
}) => {
  const isRecipeInFavorites = (recipeId, userFavList) => {
    return isAuthenticated && userFavList.includes(recipeId);
  };

  const [loading, setLoading] = useState(false);
  const [isFavorite, setIsFavorite] = useState(
    isRecipeInFavorites(recipe._id, userFavList)
  );
  const [buttonText, setButtonText] = useState(
    isRecipeInFavorites(recipe._id, userFavList)
      ? favButtonsContent.delete
      : favButtonsContent.add
  );

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
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const addToFavorites = async (recipeId) => {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/favorite`,
        { recipeId },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleButtonClick = async () => {
    try {
      setLoading(true);
      if (isFavorite) {
        await removeFromFavorites(recipe._id);
        setIsFavorite(false);
        setButtonText(favButtonsContent.add);
      } else {
        await addToFavorites(recipe._id);
        setIsFavorite(true);
        setButtonText(favButtonsContent.delete);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.favBtn__container}>
      <button
        type="button"
        onClick={handleButtonClick}
        disabled={loading}
        className={styles.favBtn}
      >
        {loading ? "Loading..." : buttonText}
      </button>
    </div>
  );
};
