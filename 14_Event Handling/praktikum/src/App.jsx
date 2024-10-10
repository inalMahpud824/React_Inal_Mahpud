// App.js
import { FormProduct } from "./components/FormProduct";
import { Navbar } from "./components/Navbar";
import "./style/style-create-product.css";
import {article} from "./contain/data.js";
import { useState } from "react";

function App() {
  const [enLenguange, setEnLenguange] = useState(false);
  const handleClick = () => {
    console.log(Math.floor(Math.random() * 100));
  }
  const handleChangeLanguage = () => {
    setEnLenguange(!enLenguange);
  }

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
        <h2 className="text-center my-2">{ enLenguange ? article.title.en : article.title.id}</h2>
        <p className="text-center mx-auto">
          {enLenguange ? article.description.en : article.description.id}
        </p>
        <div className="">
        <button className="btn btn-primary mx-auto" onClick={handleClick}>Random Number in Console</button>
        <button className="btn btn-secondary mx-auto" onClick={handleChangeLanguage}>Change Lenguenge</button>
        </div>
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
