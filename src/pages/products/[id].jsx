import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import style from "./index.module.css";
import SkeletonId from "@/pages/products/-components/SkeletonId";
import ProductId from "./-components/productId";



function products() {
  const [product, setProduct] = useState({});
  const [loader, setLoader] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (router.query.id) {
      fetch(`https://fakestoreapi.com/products/${router.query.id}`)
        .then((response) => response.json())
        .then((data) => {
          setProduct(data);
          setLoader(false);
        })
        .catch((err) => console.log(err));
    }
  }, [router.query.id]);


  return <div>{loader ? <SkeletonId /> : <ProductId product={product} />}</div>;
}

export default products;
