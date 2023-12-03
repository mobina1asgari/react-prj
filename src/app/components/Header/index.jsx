import "bootstrap/dist/css/bootstrap.css";
import NavCollappse from "./-component/NavCollapse";
import IconMenu from "./-component/IconMenu";
import { useState, useEffect } from "react";
import "../../../app/globals.css";

function Header() {
  const [headerFlag, setHeaderFlag] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY>20 ?setHeaderFlag(true):setHeaderFlag(false)
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar navbar-expand-lg ${headerFlag ? "fixed" : ""}`}
    >
      <div className="container-lg">
        <a href="#" className="navbar-brand">
          <img src="/img/logo.png" alt="flone" />
        </a>
        <div
          id="navbar1"
          className="collapse navbar-collapse justify-content-center position-relative"
        >
          <NavCollappse />
        </div>
        <div className="d-flex justify-content-around">
          <IconMenu />
          <button
            className="navbar-toggler"
            data-bs-target="#navbar1"
            data-bs-toggle="collapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
