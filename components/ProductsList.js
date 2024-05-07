"use client";
import { usePathname } from "next/navigation";
import { SearchInput } from "./SearchInput";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LoadMore } from "./LoadMoreBtn";
import styles from "../styles/ProductsList.module.scss";

export const ProductsList = ({ sectionTitle, placeholder, textBtnMore }) => {
  const pathname = usePathname();
  const [allProducts, setAllProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(2);
  const [limit, setLimit] = useState(9);

  async function fetchProducts(page, limit, pathname) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api${pathname}?page=${page}&limit=${limit}`
    );
    const products = await response.json();
    const sortedProducts = [...allProducts, ...products.result].sort(
      (a, b) => a.productName.localeCompare(b.productName)
    );
    setAllProducts(sortedProducts);
    setTotalPages(products.totalPages);
  }

  useEffect(() => {
    fetchProducts(currentPage, limit, pathname);
  }, [currentPage, limit, pathname]);

  const loadMoreCountries = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const filteredProducts = allProducts.filter((prod) =>
    prod.productName.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <section className="section">
      <div className="container">
        <h2 className="sectionTitle">{sectionTitle}</h2>
        <SearchInput
          placeholder={placeholder}
          searchValue={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <ul className={styles.products__list}>
          {filteredProducts.map((prod) => (
            <li key={prod._id}>
              <Link
                href={`/products/${prod._id}`}
                className={styles.products__link}
              >
                <Image
                  src="/"
                  alt={prod.productImgAlt}
                  width={450}
                  height={285}
                  className={styles.products__image}
                />
                <span className={styles.products__name__container}>
                  <span className={styles.products__name}>
                    {prod.productName}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {currentPage < totalPages && (
          <LoadMore onClick={loadMoreCountries} textBtnMore={textBtnMore} />
        )}
      </div>
    </section>
  );
};
