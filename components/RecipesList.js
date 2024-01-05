"use client"
import { usePathname } from "next/navigation";
import { SearchInput } from "./SearchInput";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LoadMore } from "./LoadMoreBtn";
import styles from "../styles/RecipesList.module.scss";
import axios from "axios";
import { FavButton } from "./FavButtons";

export const RecipesList = ({
  sectionTitle,
  placeholder,
  textBtnMore,
  favButtonsContent,
  filterContent,
}) => {
  const pathname = usePathname();
  const [allRecipes, setAllRecipes] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(2);
  const [limit, setLimit] = useState(9);
  const [user, setUser] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");

  async function checkAuth(token) {
    try {
      const response = await axios.get(
        "https://gastro-guide-cb84aa2b2322.herokuapp.com/api/auth/current",
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
    const token = localStorage.getItem("authToken");
    fetchRecipes(currentPage, limit, pathname);
    if (token) {
      checkAuth(token);
    }
  }, [currentPage, limit, pathname]);

  const loadMoreCountries = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const filterRecipes = () => {
    let filteredRecipes = allRecipes;

    if (selectedCategory) {
      filteredRecipes = filteredRecipes.filter(
        (recipe) => recipe.filterCategory === selectedCategory
      );
    }

    if (selectedDifficulty) {
      filteredRecipes = filteredRecipes.filter(
        (recipe) => recipe.filterLevel === selectedDifficulty
      );
    }

    return filteredRecipes;
  };

  const filteredRecipes = filterRecipes().filter((recipe) =>
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
        <form className={styles.filter__form}>
          <label className={styles.filter__label}>
            {filterContent.category.label}
            <select
              className={styles.filter__select}
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">{filterContent.category.all}</option>
              <option value="sauces">{filterContent.category.sauces}</option>
              <option value="garnishes">
                {filterContent.category.garnishes}
              </option>
              <option value="cold">{filterContent.category.cold}</option>
              <option value="hot">{filterContent.category.hot}</option>
              <option value="soups">{filterContent.category.soups}</option>
              <option value="fish dish">{filterContent.category.fish}</option>
              <option value="meat dish">{filterContent.category.meat}</option>
              <option value="poultry dish">
                {filterContent.category.poultry}
              </option>
              <option value="vegetables">
                {filterContent.category.vegetables}
              </option>
              <option value="cereals">{filterContent.category.cereals}</option>
              <option value="pasta">{filterContent.category.pasta}</option>
              <option value="desserts">
                {filterContent.category.desserts}
              </option>
              <option value="baking">{filterContent.category.baking}</option>
              <option value="drinks">{filterContent.category.drinks}</option>
            </select>
          </label>

          <label className={styles.filter__label}>
            {filterContent.level.label}
            <select
              className={styles.filter__select}
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
            >
              <option value="">{filterContent.level.all}</option>
              <option value="easy">{filterContent.level.easy}</option>
              <option value="medium">{filterContent.level.med}</option>
              <option value="hard">{filterContent.level.hard}</option>
              <option value="extra-hard">{filterContent.level.extra}</option>
            </select>
          </label>
        </form>

        <ul className={styles.recipes__list}>
          {filteredRecipes.map((recipe) => (
            <li key={recipe._id} className={styles.recipes__item}>
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
              {isAuthenticated && (
                <FavButton
                  recipe={recipe}
                  userFavList={user.favorites}
                  isAuthenticated={isAuthenticated}
                  favButtonsContent={favButtonsContent}
                />
              )}
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
