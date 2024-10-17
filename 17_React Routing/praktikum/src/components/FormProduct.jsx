import { useState } from "react";
import { Link } from "react-router-dom";
import { useFetchProduct } from "../hooks/useFetchProduct";

export const FormProduct = () => {
  // const [products, setProducts] = useState([]);
  const [dataProduct, setDataProduct] = useState({});
  const {products, setProducts} = useFetchProduct()
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setDataProduct({
      ...dataProduct,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { ...dataProduct, no: crypto.randomUUID() };
    const data = [...products, newProduct];
    localStorage.setItem("dataProduct", JSON.stringify(data));
    setProducts(data);
  };

  const deleteProduct = (id) => {
    const confirm = window.confirm(
      "apakah data dengan no " + id + " ingin di hapus ?"
    );
    if (!confirm) {
      return;
    }
    const newProducts = products.filter((product) => product.no !== id);
    localStorage.setItem("dataProduct", JSON.stringify(newProducts));
    setProducts(newProducts);
  };

  const editProduct = () => {};

  return (
    <>
      <form className="form-input needs-validation" onSubmit={handleSubmit}>
        {/* Name Product */}
        <div className="row">
          <div className="col-12">
            <div className="name-product has-validation">
              <label htmlFor="nameProduct" className="form-label py-2">
                Name Product
              </label>
              <input
                type="text"
                className="form-control"
                id="productName"
                name="productName"
                placeholder="Example input placeholder"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Product Category */}
        <div className="row">
          <div className="col-12">
            <div className="category-product">
              <label htmlFor="productCategory" className="form-label py-2">
                Product Category
              </label>
              <select
                className={`form-select  `}
                id="productCategory"
                name="productCategory"
                onChange={handleChange}
              >
                <option value="" disabled>
                  Choose...
                </option>
                <option value="One">One</option>
                <option value="Two">Two</option>
                <option value="Three">Three</option>
              </select>
            </div>
          </div>
        </div>

        {/* Image of Product */}
        <div className="row">
          <div className="col-12">
            <div className="image-product">
              <label htmlFor="inputFile" className="form-label py-2">
                Image of Product
              </label>
              <input
                type="file"
                className="form-control"
                id="inputFile"
                name="image"
              />
            </div>
          </div>
        </div>

        {/* Product Freshness */}
        <div className="row">
          <div className="col-12" onChange={handleChange}>
            <label className="form-label py-2">Product Freshness</label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="productFreshness"
                id="brandNew"
                value="Brand New"
              />
              <label className="form-check-label" htmlFor="brandNew">
                Brand New
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="productFreshness"
                id="secondHand"
                value="Second Hand"
              />
              <label className="form-check-label" htmlFor="secondHand">
                Second Hand
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="productFreshness"
                id="refurbished"
                value="Refurbished"
              />
              <label className="form-check-label" htmlFor="refurbished">
                Refurbished
              </label>
            </div>
          </div>
        </div>

        {/* Additional Description */}
        <div className="row">
          <div className="col-12">
            <label htmlFor="textDescription" className="form-label py-2">
              Additional Description
            </label>
            <textarea
              className={`form-control`}
              id="textDescription"
              name="productDescription"
              onChange={handleChange}
            ></textarea>
          </div>
        </div>

        {/* Product Price */}
        <div className="row">
          <div className="col-12">
            <label className="form-label py-2">Product Price:</label>
            <input
              type="number"
              name="price"
              id="price"
              onChange={handleChange}
              className={`form-control `}
              placeholder="$ 1"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-center my-3">
              <button
                type="submit"
                className="btn btn-primary w-100"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Submit Data Now"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className="container my-5">
        <input
          type="text"
          className="form-control"
          id="searchData"
          placeholder="Search by Name Product"
          style={{ width: "20rem", margin: "1rem 0" }}
        />
        {/* <button className="btn btn-primary me-2">Search</button>
        <button className="btn btn-danger">Delete All</button> */}

        <table className="table table-striped mt-3">
          <thead>
            <tr>
              <th>No</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Freshness</th>
              <th>Description</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 &&
              products.map((product) => (
                <tr key={product.no}>
                  <Link to={`/product/${product.no}`}>
                    <td>{product.no}</td>
                  </Link>
                  <td>{product.productName}</td>
                  <td>{product.productCategory}</td>
                  <td>{product.productFreshness}</td>
                  <td>{product.productDescription}</td>
                  <td>{product.price}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteProduct(product.no)}
                    >
                      Delete
                    </button>{" "}
                    <button
                      onClick={() => editProduct(product.no)}
                      className="btn btn-primary"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
          <tbody id="productTableBody"></tbody>
        </table>
      </div>
    </>
  );
};
