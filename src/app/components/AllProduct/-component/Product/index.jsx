import Card from "../Card";
import styles from "../../index.module.css"
import { useContext } from "react";
import ProductsContext from "@/contexts/ProductsContext";

function Product() {
  
  const{filter}=useContext(ProductsContext)

  return (
    <div className={styles.cardStyle}>
      {filter.map((item, index) => {
        if (
          item.category == "women's clothing" ||
          item.category == "men's clothing"
        ) {
          return <Card item={item} key={index} />;
        }
      })}
    </div>
  );
}

export default Product;
