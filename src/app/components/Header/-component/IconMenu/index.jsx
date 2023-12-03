import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../../index.module.css";
import Cart from "../../../Cart";
import { useContext, useRef } from "react";
import CartContext from "@/contexts/CartContext";

function IconMenu() {
  const { length } = useContext(CartContext);
  const ref = useRef();

  function clickHandel() {
    ref.current.classList.toggle(`active`);
  }

  return (
    <>
      <a href="#">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className={styles.icon}
        ></FontAwesomeIcon>
      </a>
      <a href="#">
        <FontAwesomeIcon
          icon={faUser}
          className={styles.icon}
        ></FontAwesomeIcon>
      </a>
      <div>
        <a>
          <FontAwesomeIcon
            icon={faCartShopping}
            className={styles.icon}
            onClick={clickHandel}
          />
        </a>
        <Cart ref={ref} />
        <div className={`bg-black rounded-circle text-white ${styles.length}`}>{length}</div>
      </div>
    </>
  );
}
export default IconMenu;
