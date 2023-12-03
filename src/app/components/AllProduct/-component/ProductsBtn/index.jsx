import styles from "./index.module.css" 

function ProductsBtn() {
    const filterProduct = (cate) => {
        const updalist = products.filter((product) => product.category === cate);
        setFilter(updalist)
      };
  return (
    <div className={styles.filterStyle}>
      <button className={`${styles.filter} p-2 mx-3 btn border-0`}>
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
  );
}

export default ProductsBtn;
