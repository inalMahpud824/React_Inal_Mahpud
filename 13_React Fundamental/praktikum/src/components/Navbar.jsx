export const Navbar = () => {
  return(
    <nav className="navbar navbar-expand-lg shadow-sm">
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
              <button className="btn btn-primary">Home</button>
              <a className="nav-link link-primary" href="#">
                Features
              </a>
              <a className="nav-link link-primary" href="#">
                Pricing
              </a>
              <a className="nav-link link-primary">FAQs</a>
              <a className="nav-link link-primary">About</a>
            </div>
          </div>
        </div>
      </nav>
  )
}