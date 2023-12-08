import Link from "next/link";

function NavCollappse() {
  return (
    <>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link m-2">Home</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link m-2" href="/Shop/">
            Shop
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link m-2" href="#">
            Collection
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link m-2" href="#">
            Pages
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link m-2" href="#">
            Blog
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
