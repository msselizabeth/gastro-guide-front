import styles from "../styles/SearchInput.module.scss";

export const SearchInput = ({ searchValue, onChange, placeholder }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={searchValue}
      onChange={onChange}
      className={styles.search__input}
    />
  );
};

