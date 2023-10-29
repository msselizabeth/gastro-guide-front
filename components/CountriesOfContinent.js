"use client"
import { usePathname } from "next/navigation";
import styles from "../styles/CountriesOfContinent.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

export const CountriesOfContinent = ({ title }) => {

  const pathname = usePathname();
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://gastro-guide-cb84aa2b2322.herokuapp.com/api${pathname}/countries`
      )
      .then((response) => setCountries(response.data))
      .catch((error) => console.error(error));
  }, []);
  

    return (
      <section className="section">
        <div className="container">
          <h1 className="sectionTitle">{title}</h1>
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
        </div>
      </section>
    );
}