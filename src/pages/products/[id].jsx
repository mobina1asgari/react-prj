import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import style from "./index.module.css";
import SkeletonId from "@/pages/products/-components/SkeletonId";
import ProductId from "./-components/productId";
import ProductsContext from "@/contexts/ProductsContext";

function products() {
  const router = useRouter();

  const { products } = useContext(ProductsContext);

  const product = products.find((item) => {
    return item.id == router.query.id;
  });

  return (
    <div>{product ? <ProductId product={product} /> : <SkeletonId />}</div>
  );
}

export default products;
