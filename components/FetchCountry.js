import styles from "../styles/CountriesOfContinent.module.scss";
import Link from "next/link";
import Image from "next/image";
import { HeroCountry } from "./HeroCountry";
import { FeaturesCountryList } from "./FeaturesCountryList";
import {HistoryCountry} from "./HistoryCountry";
import { SeasonsProducts } from "./SeasonsProducts";


export async function FetchCountry(pathname) {
    console.log(pathname);
  const response = await fetch(
    `https://gastro-guide-backend.onrender.com/api/${pathname.locale}/countries/${pathname.slug}`
  );
  const countries = await response.json();
  return countries;
}


export const CountryData = async ({pathname, featuresTitle, historyTitle, seasonsTitle, dishesTitle}) => {
    const country = await FetchCountry(pathname);
   
  return (
    <>
      <HeroCountry
        img={country.imageHero}
        title={country.countryName}
        capital={country.capitalCountry}
      />
      <FeaturesCountryList
        features={country.featuresCountry}
        title={country.featuresCountryTitle}
        sectionTitle={featuresTitle}
      />

      <HistoryCountry country={country} sectionTitle={historyTitle} />
      <SeasonsProducts country={country} sectionTitle={seasonsTitle} />
    </>
  );
};