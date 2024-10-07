// App.js
import { FormProduct } from "./components/FormProduct";
import { Navbar } from "./components/Navbar";
import "./style/style-create-product.css";


function App() {
  return (
    <>
      <Navbar />

      {/* Main Content */}
      <div className="container">
        <img
          src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
          alt="bootstrap-logo"
          style={{ width: "100px", marginTop: "1.5rem" }}
          className="mx-auto d-block mt-5"
        />
        <h2 className="text-center my-2">Create Product</h2>
        <p className="text-center mx-auto">
          Below is an example form built entirely with Bootstrap’s form
          controls. Each required form group has a validation state that can be
          triggered by attempting to submit the form without completing it.
        </p>

        <div className="cont-form">
          <h2>Detail Product</h2>

        <FormProduct />

        </div>

        {/* Product Table and Search/Delete Functions */}
        <div className="container my-5">
          <input
            type="text"
            className="form-control"
            id="searchData"
            placeholder="Search by Name Product"
            style={{ width: "20rem", margin: "1rem 0" }}
          />
          <button className="btn btn-primary me-2" >
            Search
          </button>
          <button className="btn btn-danger" >
            Delete All
          </button>

          <table className="table table-striped mt-3">
            <thead>
              <tr>
                <th>No</th>
                <th>Product Name</th>
                <th>Category</th>
                <th>Freshness</th>
                <th>Description</th>
                <th>Price</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody id="productTableBody">
            
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
