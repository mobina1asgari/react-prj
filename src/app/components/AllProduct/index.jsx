import { useContext, useEffect, useState } from "react";
import styles from "./index.module.css";
import Product from "./-component/Product";
import Skeleton from "../Skeleton";
import ProductsContext from "@/contexts/ProductsContext";

function AllProduct() {
  const { setFilter, filter, products, loader } = useContext(ProductsContext);
  const filterProduct = (cate) => {
    const updalist = products.filter((product) => product.category === cate);
    setFilter(updalist);
  };
  return (
    <>
      <div className="text-center position-relative">
        <h2 className={styles.daily}>DAILY DEALS!</h2>
        <div className={styles.filterStyle}>
          <button
            onClick={() => setFilter(products)}
            className={`${styles.filter} p-2 mx-3 btn border-0`}
          >
            All Products
          </button>
          <button
            onClick={() => filterProduct("men's clothing")}
            className={`${styles.filter} p-2 mx-3 btn border-0`}
          >
            Men's clothing
          </button>
          <button
            onClick={() => filterProduct("women's clothing")}
            className={`${styles.filter} p-2 mx-3 btn border-0`}
          >
            Women's clothing
          </button>
        </div>
      </div>
      <div className="container d-flex justify-content-center">
        {loader ? <Skeleton /> : <Product/>}
      </div>
    </>
  );
}

export default AllProduct;
