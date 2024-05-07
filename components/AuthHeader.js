
"use client"
import { useState, useEffect } from "react";

import axios from "axios";
import { useRouter } from "next/navigation";
import { NotAuthHeaderList } from "./NotAuthHeaderList";
import { AuthHeaderList } from "./AuthHeaderList";

export const AuthHeader = ({ textAuth, textRegister, textExit, textProfile }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState("");
  const router = useRouter();

  useEffect(() => {
    checkAuthentication();
  }, [isAuthenticated]);

  const checkAuthentication = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/current`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`, // Получаем токен из локального хранилища
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      setUserName(data.userName);
        setIsAuthenticated(true);

    } else {
      setIsAuthenticated(false);
    }
  };

  const handleLogout = async() => {
     try {
        const authToken = localStorage.getItem("authToken");
          if (authToken) {
                // Отправляем запрос к серверу для выхода из системы с передачей токена
                await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/logout`, null, {
                    headers: {
                        Authorization: `Bearer ${authToken}`,
                    },
          });
          }
        localStorage.removeItem("authToken");
       setIsAuthenticated(false);
     } catch (error) {
      console.error(
        "Ошибка при выходе из системы",
        error.message
      );
     }

    router.push("/")

  };

  return (
    <>
      {isAuthenticated ? (
        <AuthHeaderList handleLogout={handleLogout} userName={userName} textExit={textExit} textProfile={textProfile} />
      ) : (
        <NotAuthHeaderList textAuth={textAuth} textRegister={textRegister} />
      )}
    </>
  );
};
