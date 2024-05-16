import axios from "axios";
const baseUrl = "https://gastro-guide.com.ua";

const responseCountries = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/countries`
);
const countries = responseCountries.data.result;

const responseRecipes = await axios.get(
  `${process.env.NEXT_PUBLIC_API_URL}/api/recipes`
);
const recipes = responseRecipes.data.result;

export default async function sitemap() {
  
    const countriesUrlsEN =
      countries?.map((country) => {
        return {
          url: `${baseUrl}/en/countries/${country._id}`,
          lastModified: new Date(),
          changeFrequency: "weekly",
          priority: 0.9,
        };
      }) ?? [];
    const countriesUrlsUA =
      countries?.map((country) => {
        return {
          url: `${baseUrl}/uk/countries/${country._id}`,
          lastModified: new Date(),
          changeFrequency: "weekly",
          priority: 0.9,
        };
      }) ?? [];
  
  const recipesUrlsEN =
    recipes?.map((recipe) => {
      return {
        url: `${baseUrl}/en/recipes/${recipe._id}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.9,
      };
    }) ?? [];
  const recipesUrlsUA =
    recipes?.map((recipe) => {
      return {
        url: `${baseUrl}/uk/recipes/${recipe._id}`,
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
      url: `${baseUrl}/uk`,
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
      url: `${baseUrl}/uk/continents`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/en/countries`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/uk/countries`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/en/info`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/uk/info`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en/registration`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/uk/registration`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/en/authorization`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/uk/authorization`,
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
