import axios from "axios";
const baseUrl = "https://gastro-guide.com.ua";

const responseCountriesEN = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/en/countries`
);
const countriesEN = responseCountriesEN.data.result;

const responseCountriesUK = await axios.get(
  `${process.env.NEXT_PUBLIC_API_URL}/api/uk/countries`
);
const countriesUK = responseCountriesUK.data.result;

const responseRecipesEN = await axios.get(
  `${process.env.NEXT_PUBLIC_API_URL}/api/en/recipes`
);
const recipesEN = responseRecipesEN.data.result;

const responseRecipesUK = await axios.get(
  `${process.env.NEXT_PUBLIC_API_URL}/api/uk/recipes`
);
const recipesUK = responseRecipesUK.data.result;

export default async function sitemap() {
  
    const countriesUrlsEN =
      countriesEN?.map((country) => {
        return {
          url: `${baseUrl}/en/countries/${country._id}`,
          lastModified: new Date(),
          changeFrequency: "weekly",
          priority: 0.9,
        };
      }) ?? [];
    const countriesUrlsUK =
      countriesUK?.map((country) => {
        return {
          url: `${baseUrl}/uk/countries/${country._id}`,
          lastModified: new Date(),
          changeFrequency: "weekly",
          priority: 0.9,
        };
      }) ?? [];
  
  const recipesUrlsEN =
    recipesEN?.map((recipe) => {
      return {
        url: `${baseUrl}/en/recipes/${recipe._id}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.9,
      };
    }) ?? [];
  const recipesUrlsUK =
    recipesUK?.map((recipe) => {
      return {
        url: `${baseUrl}/uk/recipes/${recipe._id}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.9,
      };
    }) ?? [];
  return [
    {
      url: `${baseUrl}/en`,
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
    ...countriesUrlsUK,
    ...recipesUrlsEN,
    ...recipesUrlsUK,
  ];
}
