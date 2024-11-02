import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const FormProduct = () => {
  // const [products, setProducts] = useState([]);
  const [dataProduct, setDataProduct] = useState({});
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const regexProductName = /^[A-Za-z]+(\s[A-Za-z]+)*[A-Za-z]*$/;
  const regexPrice = /^[0-9]+$/;
  const regexCategory = /^(One|Two|Three)+$/;
  const regexfreshness = /^(Brand New|Second Hand|Refurbished)$/;

  const validateForm = (data) => {
    if (!regexProductName.test(data.productName)) {
      return false;
    } else if (!regexPrice.test(data.productPrice)) {
      return false;
    } else if (!regexCategory.test(data.productCategory)) {
      return false;
    } else if (!regexfreshness.test(data.productFreshness)) {
      return false;
    } else {
      return true;
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDataProduct({
      ...dataProduct,
      [name]: value,
    });
  };
  const handelChangeImage = (e) => {
    const regexImaga = /(\.jpg|\.jpeg|\.png)$/i;
    const file = e.target.files[0].name;
    if (!regexImaga.test(file)) {
      alert("format file tidak valid haru berupa jpg/jpeg/png");
      e.target.value = null;
      return;
    }
    setImage(file);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm(dataProduct)) {
      alert("data tidak valid");
      return;
    }
    const newProduct = {
      ...dataProduct,
      id: crypto.randomUUID(),
      image: image,
    };
    try {
      await axios.post(
        "https://672311402108960b9cc68deb.mockapi.io/products/product",
        newProduct
      );
      navigate("/product/list");
    } catch (err) {
      console.error(err);
    }
  };

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
                onChange={handelChangeImage}
                required
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
              name="productPrice"
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
      </div>
    </>
  );
};
