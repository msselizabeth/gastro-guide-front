"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { AuthMobileList } from "./AuthMobileList";
import { NotAuthMobileList } from "./NotAuthMobileList";


export const AuthMobile = ({ auth, registrate, onClick, textExit, textProfile }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState("");
  const router = useRouter();
  useEffect(() => {
    // Провести проверку авторизации при монтировании компонента
    checkAuthentication();
  }, [isAuthenticated]);

  const checkAuthentication = async () => {
    // Выполнить запрос на бекенд для проверки авторизации
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

  const handleLogout = async () => {
    try {
      const authToken = localStorage.getItem("authToken");
      if (authToken) {
        // Отправляем запрос к серверу для выхода из системы с передачей токена
        await axios.post(
          "https://gastro-guide-cb84aa2b2322.herokuapp.com/api/auth/logout",
          null,
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
      }
      localStorage.removeItem("authToken");
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Ошибка при выходе из системы", error.message);
    }

    router.push("/");
  };

  return (
    <>
      {isAuthenticated ? (
        <AuthMobileList
          handleLogout={handleLogout}
          userName={userName}
          onClick={onClick}
          textExit={textExit}
          textProfile={textProfile}
        />
      ) : (
        <NotAuthMobileList
          auth={auth}
          registrate={registrate}
          onClick={onClick}
        />
      )}
    </>
  );
};
