import { useState } from "react";

export const FormProduct = () => {
  const [formError, setFormError] = useState(false);
  const [productName, setProductName] = useState('');
  const [form, setForm] = useState({
    productCategory: '',
    price: '',
    productDescription: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value
    })
  }
    const handleChangeProduct = (value) => {
      setProductName(value)
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      if (productName.length === 0) {
        alert("Please enter a valid product name.");
        return
      }
      for (const [key, value] of Object.entries(form)) {
        if (value === "") {
          setFormError(true);
          return;
        }
      }
      console.log("success")
    }

  return (
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
              id="nameProduct"
              name="name"
              placeholder="Example input placeholder"
              onChange={(e) => handleChangeProduct(e.target.value)}
            />
            {productName.length > 25 ? (
              <p className="text-danger">
                Last Name must not exceed 25 characters.
              </p>
            ) : (
              ""
            )}
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
              className={`form-select ${
                formError && form.productCategory === ""
                  ? " border-2 border-danger"
                  : ""
              } `}
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
        <div className="col-12">
          <label className="form-label py-2">Product Freshness</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="freshness"
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
              name="freshness"
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
              name="freshness"
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
            className={`form-control  ${
              formError && form.productDescription === ""
                ? " border-2 border-danger"
                : ""
            }`}
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
            className={`form-control  ${
              formError && form.price === ""
                ? " border-2 border-danger"
                : ""
            }`}
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
  );
}