"use client"
import styles from "../styles/CountriesOfContinent.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

// export async function FetchCountries(pathname) {

//    const response = await fetch(
//       `https://gastro-guide-cb84aa2b2322.herokuapp.com/api/${pathname}/countries`
//     )
//   const countries = await response.json();
//   return countries;
// }

export const RenderListOfCountries = ({pathname}) => {

  const [countries, setCountries] = useState(null);

  useEffect(() => {
    // Вызываем API вашего стороннего бекенда
    axios
      .get(
        `https://gastro-guide-cb84aa2b2322.herokuapp.com/api${pathname}/countries`)
      .then((response) => setCountries(response.data))
      .catch((error) => console.error(error));
  }, []);

  // const countries = FetchCountries(params);
    
  return (
    <ul className={styles.countriesList}>
      {countries &&
        countries.map((country) => {
          return (
            <li key={country._id}>
              <Link
                href={`/countries/${country._id}`}
                className={styles.countriesLink}
              >
                <Image
                  src={country.imageSmall}
                  alt={country.imageAlt}
                  width={450}
                  height={285}
                  className={styles.countriesImage}
                />
                <span className={styles.countriesNameContainer}>
                  <span className={styles.countriesName}>
                    {country.countryName}
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
    </ul>
  );
};
