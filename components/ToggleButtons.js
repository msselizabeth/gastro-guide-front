
import { useTranslations } from "next-intl";
import styles from "../styles/ToggleButtons.module.scss";

export const ToggleButtons = ({ expanded, toggleExpand }) => {
  const t = useTranslations("Buttons");
  return (
    <div>
      {!expanded ? (
        <div className={styles.toggleBtnContainer}>
          <button className={styles.expandButton} onClick={toggleExpand}>
            {t("more")}
          </button>
        </div>
      ) : (
        <div className={styles.toggleBtnContainer}>
          <button className={styles.collapseButton} onClick={toggleExpand}>
            {t("collapse")}
          </button>
        </div>
      )}
    </div>
  );
};

export default ToggleButtons;
