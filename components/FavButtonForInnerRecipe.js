"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import { FavButton } from "./FavButtons";


export const FavButtonForInnerRecipe = ({ recipe, favButtonsContent }) => {

  const [user, setUser] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

    console.log(user);
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
    <>
      {isAuthenticated && (
        <FavButton
          recipe={recipe}
          userFavList={user.favorites}
          isAuthenticated={isAuthenticated}
          favButtonsContent={favButtonsContent}
        />
      )}
    </>
  );
};