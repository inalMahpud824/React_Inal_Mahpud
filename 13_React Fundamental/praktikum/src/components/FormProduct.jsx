export const FormProduct = () => {
  return (
    <form className="form-input needs-validation" noValidate>
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
              required
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
              className="form-select"
              id="productCategory"
              name="category"
              required
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
              required
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
            className="form-control"
            id="textDescription"
            name="description"
            required
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
            className="form-control"
            required
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