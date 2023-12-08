import ProductsContext from "@/contexts/ProductsContext";
import Footer from "../Footer";
import Header from "../Header";
import { useEffect, useState } from "react";
import CartContext from "@/contexts/CartContext";

function Layout({ children }) {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilter(data);
        setLoader(false);
      })
      .catch((err) => console.log(err));
  }, []);

  // cart Context

  const [cart, setCart] = useState([]);
  const [cartFlag, setCartFlag] = useState(false);
  const [length, setLength] = useState(0);
  const [total, setTotal] = useState(0);

  const addCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist) {
      const newCart = cart.map((item) =>
        item.id === product.id ? { ...item, qty: exist.qty + 1 } : item
      );
      setCart(newCart);
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      setLength(length + 1);
    }
    setCartFlag(true);
  };

  const removeCart = (product) => {
    const newCart = cart.filter((item) => item.id !== product.id);
    setCart(newCart);
    if (cart.length <= 1) {
      setCartFlag(false);
    }
    setLength(length - 1);
  };

  useEffect(() => {
    const total = cart.reduce((prev, current) => {
      return prev + current.price * current.qty;
    }, 0);
    setTotal(total);
  });

  

  function pluseHandler(product) {
    addCart(product);
  }
  function minusHandler(product) {
    const exist = cart.find((item) => item.id === product.id);
    if (exist) {
      const newCart = cart.map((item) => {
        if (item.id === product.id && item.qty>2) {
          return { ...item, qty: exist.qty - 1 };
        }else{
          return { ...item, qty: 1 };
        }
      });
      setCart(newCart);
    }
  }
  const clearCart=()=> {
    setCart([])
    setLength(0)
  }

  
  return (
    <CartContext.Provider
      value={{
        cart,
        clearCart,
        addCart,
        removeCart,
        cartFlag,
        length,
        total,
        minusHandler,
        pluseHandler,
      }}
    >
      <ProductsContext.Provider
        value={{
          products,
          filter,
          setFilter,
          loader,
        }}
      >
        <Header />
        {children}
        <Footer />
      </ProductsContext.Provider>
    </CartContext.Provider>
  );
}

export default Layout;
