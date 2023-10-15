import { HeroHomeSection } from "@/components/HeroHomeSection";
import { AboutResourceSection } from "@/components/AboutResourceSection";
import { AuthorSection } from "@/components/AuthorSection";
import { StartTravel } from "@/components/StartTrevel";


const enMetadata = {
  title: "Gastronomic Guide",
  discription: "Gastronomic guide - app about world cuisine, traditions in the different countries, features and benefits of the food. "
};
const uaMetadata = {
  title: "Гастрономічний гід",
  discription: "Гастрономічний гід - веб-застосунок про світову кулінарію, традиції харчування в різних країнах свтіу, особливості та користь страв.",
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
