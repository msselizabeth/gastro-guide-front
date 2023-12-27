import axios from "axios";
const baseUrl = "https://gastro-guide.com.ua";

const responseCountries = await axios.get(
      `https://gastro-guide-cb84aa2b2322.herokuapp.com/api/countries`
);
const countries = responseCountries.data.result;

const responseRecipes = await axios.get(
  `https://gastro-guide-cb84aa2b2322.herokuapp.com/api/recipes`
);
const recipes = responseRecipes.data.result;

export default async function sitemap() {
  
    const countriesUrlsEN =
      countries?.map((country) => {
        return {
          url: `${baseUrl}/countries/${country._id}`,
          lastModified: new Date(),
          changeFrequency: "weekly",
          priority: 0.9,
        };
      }) ?? [];
    const countriesUrlsUA =
      countries?.map((country) => {
        return {
          url: `${baseUrl}/ua/countries/${country._id}`,
          lastModified: new Date(),
          changeFrequency: "weekly",
          priority: 0.9,
        };
      }) ?? [];
  
  const recipesUrlsEN =
    recipes?.map((recipe) => {
      return {
        url: `${baseUrl}/recipes/${recipe._id}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.9,
      };
    }) ?? [];
  const recipesUrlsUA =
    recipes?.map((recipe) => {
      return {
        url: `${baseUrl}/ua/recipes/${recipe._id}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.9,
      };
    }) ?? [];
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/ua`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/continents`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ua/continents`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/countries`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ua/countries`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/info`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/uaua/info`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/registration`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/ua/registration`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/authorization`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/ua/authorization`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    ...countriesUrlsEN,
    ...countriesUrlsUA,
    ...recipesUrlsEN,
    ...recipesUrlsUA,
  ];
}
