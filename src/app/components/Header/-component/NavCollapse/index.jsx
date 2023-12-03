import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function NavCollappse() {
  return (
    <>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link m-2" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link m-2" href="#">
            Shop
            <FontAwesomeIcon
              icon={faAngleDown}
              style={{ width: 15, height: 13 }}
            />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link m-2" href="#">
            Collection
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link m-2" href="#">
            Pages
            <FontAwesomeIcon
              icon={faAngleDown}
              style={{ width: 15, height: 13 }}
            />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link m-2" href="#">
            Blog
            <FontAwesomeIcon
              icon={faAngleDown}
              style={{ width: 15, height: 13 }}
            />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link m-2" href="#">
            Contact Us
          </a>
        </li>
      </ul>
    </>
  );
}

export default NavCollappse;
