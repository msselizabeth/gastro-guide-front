import { HeroCountryAndRecipe } from "./HeroCountryAndRecipe";
import { FeaturesCountryList } from "./FeaturesCountryList";
import {HistoryCountry} from "./HistoryCountry";
import { SeasonsProducts } from "./SeasonsProducts";
import { DishesOfCountryList } from "./DishesOfCountryList";


export async function FetchCountry(params) {

  let response;

  if (params.locale === 'en') {
     response = await fetch(
      `https://gastro-guide-cb84aa2b2322.herokuapp.com/api/countries/${params.slug}`
    );
  } else {
    response = await fetch(
      `https://gastro-guide-cb84aa2b2322.herokuapp.com/api/${params.locale}/countries/${params.slug}`
    );
  }
    
  const country = await response.json();
  return country;
}

export async function FetchDishesOfCountry(params) {
  let response;
  if (params.locale === 'en') {
    response = await fetch(
      `https://gastro-guide-cb84aa2b2322.herokuapp.com/api/countries/${params.slug}/recipes`
    );
  }
  else {
    response = await fetch(
      `https://gastro-guide-cb84aa2b2322.herokuapp.com/api/${params.locale}/countries/${params.slug}/recipes`
    );
  }
  const dishes = await response.json();
  return dishes;
  
}


export const CountryData = async ({params, featuresTitle, historyTitle, seasonsTitle, dishesTitle}) => {
  const country = await FetchCountry(params);
  const dishes = await FetchDishesOfCountry(params);
    console.log(params);

  return (
    <>
      <HeroCountryAndRecipe
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
      <DishesOfCountryList dishes={dishes} sectionTitle={dishesTitle} />
    </>
  );
};