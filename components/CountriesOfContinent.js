"use client";
import { usePathname } from "next/navigation";
import { RenderListOfCountries } from "./FetchCountriesOfContinent";

export const CountriesOfContinent = ({title}) => {
  const pathname = usePathname();
  
    return (
      <section className="section">
        <div className="container">
          <h1 className="sectionTitle">{title}</h1>
          <RenderListOfCountries pathname={pathname}/>
        </div>
      </section>
    );
}