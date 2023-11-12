"use client"
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/RegisterForm.module.scss";
import { VerifyAgain } from "./VerifyAgain";
import { HaveProfile } from "./HaveProfile";




export const RegistrationForm = ({textContent}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registrationError, setRegistrationError] = useState(null);
  const [errors, setErrors] = useState({});
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const url = "https://gastro-guide-cb84aa2b2322.herokuapp.com/api/auth/register";

  const handleChange = (e) => {
      const { name, value } = e.target;

    // Обновляем соответствующее состояние на основе имени поля
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
            setEmail(value);
             setRegistrationError(null);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      default:
        break;
    }

    // При изменении любого из полей пароля или подтверждения, сбрасываем ошибку
     setErrors({
       email: "",
       password: "",
       confirmPassword: "",
     });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Проверка почты
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = textContent.errors.email;
      isValid = false;
    }

    // Проверка пароля
    if (password.length < 6) {
      newErrors.password = textContent.errors.password;
      isValid = false;
    }

    // Проверка подтверждения пароля
    if (password !== confirmPassword) {
      newErrors.confirmPassword = textContent.errors.confirmPass;
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        await axios.post(url, {
          userName: name,
          email,
          password,
        });
       setRegistrationSuccess(true);
      } catch (error) {
        if (error.response && error.response.status === 409) {
          setRegistrationError(textContent.errors.auth);
        } else {
          console.error(error.response.data.message);
        }
      }
    }
  };

    return (
      <>
        {registrationSuccess ? (
          <div>
            <p className={styles.register__text}>
              {textContent.successful.message}
            </p>
            <div className={`${styles.successful__btn__container} ${styles.register__btn__container}`}>
              {/* <Link href="/authorization" className={styles.register__btn}>
                {textContent.successful.loginLink}
              </Link> */}
            </div>

            <VerifyAgain textContent={textContent} />
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit} className={styles.register__form}>
              <label className={styles.register__label}>
                {textContent.form.name}:
                <input
                  className={styles.register__input}
                  placeholder={textContent.form.namePlaceholder}
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  required
                />
              </label>
              <label className={styles.register__label}>
                {textContent.form.email}:
                <input
                  className={styles.register__input}
                  placeholder={textContent.form.emailPlaceholder}
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                {registrationError && (
                  <p className={styles.register__error}>{registrationError}</p>
                )}
              </label>
              <label className={styles.register__label}>
                {textContent.form.password}:
                <input
                  className={styles.register__input}
                  placeholder={textContent.form.passwordPlaceholder}
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  required
                />
                {errors.password && (
                  <p className={styles.register__error}>{errors.password}</p>
                )}
              </label>
              <label className={styles.register__label}>
                {textContent.form.confirmPswr}:
                <input
                  className={styles.register__input}
                  placeholder={textContent.form.confirmPswrPlaceholder}
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleChange}
                  required
                />
                {errors.confirmPassword && (
                  <p className={styles.register__error}>
                    {errors.confirmPassword}
                  </p>
                )}
              </label>
              <div className={styles.register__btn__container}>
                <button className={styles.register__btn} type="submit">
                  {textContent.form.btn}
                </button>
              </div>
            </form>
            <HaveProfile textContent={textContent} />
          </>
        )}
      </>
    );
};
