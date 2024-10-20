import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg shadow-sm"
      style={{ background: "white" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Simple Header
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <Link to={'/'} className="nav-link link-primary ">
             Home 
            </Link>
            <Link to={'/product'} className="nav-link link-primary ">
             Create Product
            </Link>
            <a className="nav-link link-primary" href="#">
              Pricing
            </a>
            <a className="nav-link link-primary">FAQs</a>
            <a className="nav-link link-primary">About</a>
          </div>
        </div>
      </div>
    </nav>
  );
}