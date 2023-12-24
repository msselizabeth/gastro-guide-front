"use client";
import styles from "../styles/MobileMenu.module.scss";
import { useEffect, useState, useRef } from "react";
import Link from "next-intl/link";
import { usePathname } from "next/navigation";
import { AuthMobile } from "./AuthMobile";

export const MobileMenu = ({ navList, mobileNavList, registrate , auth, textExit, textProfile}) => {
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
              {navList.map(({ id, title, path, pathEN, pathUA }) => {
                return (
                  <li key={id} className={styles.mobileMenuNavListItem}>
                    <Link
                      onClick={closeMenu}
                      href={path}
                      className={`${styles.mobileMenuNavListLink} ${
                        pathname === path || pathname === pathUA
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
              {mobileNavList.map(({ id, title, path, pathUA }) => {
                return (
                  <li key={id} className={styles.mobileMenuNavListItem}>
                    <Link
                      href={path}
                      onClick={closeMenu}
                      className={`${styles.mobileMenuNavListLink} 
                    ${pathname === path || pathname == pathUA ? `${styles.current}` : ""}`}
                    >
                      {title}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <AuthMobile
              registrate={registrate}
              auth={auth}
              onClick={closeMenu}
              textExit={textExit}
              textProfile={textProfile}
            />

            <ul className={styles.mobContactsList}>
              <li>
                <Link
                  href="https://www.instagram.com/gastro___guide?igshid=OGQ5ZDc2ODk2ZA=="
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
