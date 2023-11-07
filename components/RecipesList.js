"use client"
import { usePathname } from "next/navigation";
import { SearchInput } from "./SearchInput";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LoadMore } from "./LoadMoreBtn";
import styles from "../styles/RecipesList.module.scss";

export const RecipesList = ({ sectionTitle, placeholder, textBtnMore }) => {
  const pathname = usePathname();
  const [allRecipes, setAllRecipes] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(2);
  const [limit, setLimit] = useState(3);

  async function fetchRecipes(page, limit, pathname) {
    const response = await fetch(
      `https://gastro-guide-cb84aa2b2322.herokuapp.com/api${pathname}?page=${page}&limit=${limit}`
    );
    const recipes = await response.json();
    const sortedRecipes = [...allRecipes, ...recipes.result].sort((a, b) =>
      a.recipeName.localeCompare(b.recipeName)
    );
    setAllRecipes(sortedRecipes);
    setTotalPages(recipes.totalPages);
  }

  useEffect(() => {
    fetchRecipes(currentPage, limit, pathname);
  }, [currentPage, limit, pathname]);

  const loadMoreCountries = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const filteredRecipes = allRecipes.filter((recipe) =>
    recipe.recipeName.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <section className="section">
      <div className="container">
        <h2 className="sectionTitle">{sectionTitle}</h2>
        <SearchInput
          placeholder={placeholder}
          searchValue={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />

        <ul className={styles.recipes__list}>
          {filteredRecipes.map((recipe) => (
            <li key={recipe._id}>
              <Link
                href={`/recipes/${recipe._id}`}
                className={styles.recipes__link}
              >
                <Image
                  src={recipe.recipeImgSmall}
                  alt={recipe.recipeImgAlt}
                  width={450}
                  height={285}
                  className={styles.recipes__image}
                />
                <span className={styles.recipes__name__container}>
                  <span className={styles.recipes__name}>
                    {recipe.recipeName}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {currentPage < totalPages && (
          <LoadMore onClick={loadMoreCountries} textBtnMore={textBtnMore} />
        )}
      </div>
    </section>
  );
};
