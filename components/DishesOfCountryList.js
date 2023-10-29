import Link from "next/link";
import styles from "../styles/DishesOfCountryList.module.scss";
import Image from "next/image";

export const DishesOfCountryList = ({dishes, sectionTitle}) => {

    return (
      <section className="section">
        <div className="container">
          <h2 className="sectionTitle">{sectionTitle}</h2>
          <ul className={styles.dishesList}>
            {dishes.map((dish) => (
              <li key={dish._id} className={styles.dishesItem}>
                <Link
                  href={`/recipes/${dish._id}`}
                  className={styles.dishesLink}
                >
                  <Image
                    src={dish.recipeImgSmall}
                    alt={dish.recipeImgAlt}
                    width={450}
                    height={285}
                    className={styles.dishesImg}
                  />
                  <span className={styles.dishesNameContainer}>
                    <span className={styles.dishesName}>{dish.recipeName}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );

}