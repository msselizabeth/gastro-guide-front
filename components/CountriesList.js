"use client"
import { usePathname } from "next/navigation";
import { SearchInput } from "./SearchInput";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LoadMore } from "./LoadMoreBtn";
import styles from "../styles/CountriesList.module.scss";


export const CountriesList = ({ sectionTitle, placeholder, textBtnMore }) => {
  const pathname = usePathname();
  const [allCountries, setAllCountries] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(2);
  const [limit, setLimit] = useState(9);

  async function fetchCountries(page, limit, pathname) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api${pathname}?page=${page}&limit=${limit}`
    );
    const countries = await response.json();
    const sortedCountries = [...allCountries, ...countries.result].sort(
      (a, b) => a.countryName.localeCompare(b.countryName)
    );
    setAllCountries(sortedCountries);
    setTotalPages(countries.totalPages);
  }

  useEffect(() => {
    fetchCountries(currentPage, limit, pathname);
  }, [currentPage, limit, pathname]);

  const loadMoreCountries = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const filteredCountries = allCountries.filter((country) =>
    country.countryName.toLowerCase().includes(searchValue.toLowerCase())
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
        <ul className={styles.countries__list}>
          {
            filteredCountries.map((country) => (
              <li key={country._id}>
                <Link
                  href={`/countries/${country._id}`}
                  className={styles.countries__link}
                >
                  <Image
                    src={country.imageSmall}
                    alt={country.imageAlt}
                    width={450}
                    height={285}
                    className={styles.countries__image}
                  />
                  <span className={styles.countries__name__container}>
                    <span className={styles.countries__name}>
                      {country.countryName}
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