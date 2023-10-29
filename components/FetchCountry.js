import styles from "../styles/CountriesOfContinent.module.scss";
import Link from "next/link";
import Image from "next/image";
import { HeroCountry } from "./HeroCountry";
import { FeaturesCountryList } from "./FeaturesCountryList";
import {HistoryCountry} from "./HistoryCountry";
import { SeasonsProducts } from "./SeasonsProducts";


export async function FetchCountry(params) {

  const response = await fetch(
    `https://gastro-guide-cb84aa2b2322.herokuapp.com/api/${params.locale}/countries/${params.slug}`
  );
  const countries = await response.json();
  return countries;
}


export const CountryData = async ({params, featuresTitle, historyTitle, seasonsTitle, dishesTitle}) => {
    const country = await FetchCountry(params);
   
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