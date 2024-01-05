import { HeroHomeSection } from "@/components/HeroHomeSection";
import { AboutResourceSection } from "@/components/AboutResourceSection";
import { AuthorSection } from "@/components/AuthorSection";
import { StartTravel } from "@/components/StartTrevel";


const enMetadata = {
  title:
    "Gastronomic guide: World cuisine, food traditions, features and benefits of dishes",
  description:
    "Discover the wealth of world cuisine with the Gastronomic Guide. Learn about food traditions in different countries, the peculiarities of cooking and their health benefits.",
  keywords:
    "world cuisine, gastronomic guide, food traditions, benefits of dishes, cuisine of countries of the world, cuisines of the world, gastronomic web application",
};
const uaMetadata = {
  title:
    "Гастрономічний гід: Світова кулінарія, традиції харчування, особливості та користь страв",
  description:
    "Відкрийте для себе багатство світової кулінарії з Гастрономічним гідом. Дізнайтеся про традиції харчування в різних країнах, особливості приготування страв та їх користь для здоров'я.",
  keywords:
    "світова кулінарія, гастрономічний гід, традиції харчування, користь страв, кулінарія країн світу, кухні світу, гастрономічний веб-застосунок",
  googleSiteVerification: "Lf5mZGdfZuKq_Y5nsRckuGA6b6om3qxJTJTSqjjWqXg",
};


export async function generateMetadata({params}) {
  return params.locale === "en" ? enMetadata : uaMetadata;
}


export default function Home() {

  return (
    <>
      <HeroHomeSection />
      <AboutResourceSection />
      <AuthorSection />
      <StartTravel />
    </>
  );
}
