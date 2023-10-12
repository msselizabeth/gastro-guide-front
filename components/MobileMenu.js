"use client";
import styles from "../styles/MobileMenu.module.scss";
import { useEffect, useState, useRef } from "react";
import Link from "next-intl/link";
import { usePathname } from "next/navigation";



export const MobileMenu = ({ navList, mobileNavList, registrate , auth}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const pathname = usePathname();

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <button className={styles.mobMenuBtn} onClick={openMenu}></button>

      <div
        className={`${styles.mobileMenu} ${isOpen ? `${styles.open}` : ""}`}
        ref={menuRef}
      >
        <div className={styles.mobileMenuContainer}>
          <button
            className={styles.mobileMenuBtnClose}
            onClick={closeMenu}
          ></button>

          <div>
            <ul className={styles.mobileMenuNavList}>
              {navList.map(({ id, title, path, pathEn }) => {
                return (
                  <li key={id} className={styles.mobileMenuNavListItem}>
                    <Link
                      href={path}
                      className={`${styles.mobileMenuNavListLink} ${
                        pathname === path || pathname === pathEn
                          ? `${styles.current}`
                          : ""
                      }`}
                    >
                      {title}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <ul className={styles.mobileMenuNavList}>
              {mobileNavList.map(({ id, title, path }) => {
                return (
                  <li key={id} className={styles.mobileMenuNavListItem}>
                    <Link href={path} className={styles.mobileMenuNavListLink}>
                      {title}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <ul className={styles.mobileMenuAuthList}>
              <li className={styles.mobileMenuAuthListItem}>
                <Link
                  href=""
                  className={`${styles.mobileMenuAuthListLink} ${styles.mobileMenuAuthListLinkAuth}`}
                >
                 {auth}
                </Link>
              </li>
              <li className={styles.mobileMenuAuthListItem}>
                <Link
                  href=""
                  className={`${styles.mobileMenuAuthListLink} ${styles.mobileMenuAuthListLinkRegister}`}
                >
                 {registrate}
                </Link>
              </li>
            </ul>

            <ul className={styles.mobContactsList}>
              <li>
                <Link
                  href="https://instagram.com/_gastroguide?igshid=NTc4MTIwNjQ2YQ=="
                  className={`${styles.mobContactsLink} ${styles.mobContactsLinkInsta}`}
                  target="_blank"
                ></Link>
              </li>
              <li>
                <Link
                  href="https://www.facebook.com/profile.php?id=100095173823392"
                  className={`${styles.mobContactsLink} ${styles.mobContactsLinkFb}`}
                  target="_blank"
                ></Link>
              </li>
              <li>
                <Link
                  href="mailto:gastroguide@ukr.net"
                  className={`${styles.mobContactsLink} ${styles.mobContactsLinkMail}`}
                  target="_blank"
                ></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
