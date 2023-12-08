import { useContext, useState } from "react";
import style from "./index.module.css";
import CartContext from "@/contexts/CartContext";

function ProductId({ product }) {

  const {addCart}=useContext(CartContext)

  return (
    <div className={`d-flex container justify-content-around ${style.main}`}>
      <div>
        <img src={product.image} alt="" className={style.productImg} />
      </div>
      <div className={style.info}>
        <div className={`${style.title}`}>
          <h1 className="fs-5">{product.title}</h1>
          <h4 className={`fs-5 ${style.price} `}> $ {product.price}</h4>
          <p>{product.description}</p>
        </div>
        <div className={`d-flex ${style.border} py-4 my-4`}>
          <button
            className={` ${style.shopBtn}`}
            onClick={()=>addCart(product)}
          >
            Add To Card
          </button>
        </div>
        <div>
          <p className="fs-6">
            <span>CATEGORIES : </span>
            <span className={`${style.color} text-uppercase`}>
              {product.category}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductId;
