import { useEffect, useState } from "react";
import { useProduct } from "../stores/productStore";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const FormUpdateProduct = ({ productId }) => {
  const [dataProduct, setDataProduct] = useState({});
  const { products } = useProduct();
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  // regex
  const regexProductName = /^[A-Za-z]+(\s[A-Za-z]+)*[A-Za-z]*$/;
  const regexPrice = /^[0-9]+$/;
  const regexCategory = /^(One|Two|Three)+$/;
  const regexfreshness = /^(Brand New|Second Hand|Refurbished)$/;

  useEffect(() => {
    const fecth = async (id) => {
      try {
        const result = await axios.get(
          `https://672311402108960b9cc68deb.mockapi.io/products/product/${id}`
        );
        console.log(result.data);
        setDataProduct(result.data);
      } catch (err) {
        console.error(err);
      }
    };
    if (productId) {
      fecth(productId);
      // const product = products.find((product) => product.no === productId);
      // setDataProduct(product);
      // setImage(product?.image || ""); // Set image if available
    }
  }, [productId, products]);

  // validasi
  const validateForm = (data) => {
    return (
      regexProductName.test(data.productName) &&
      regexPrice.test(data.productPrice) &&
      regexCategory.test(data.productCategory) &&
      regexfreshness.test(data.productFreshness)
    );
  };

  // Handle form input changes
  const handleChange = (event) => {
    const { name, value, type } = event.target;
    if (type === "file") {
      handelChangeImage(event);
    } else {
      setDataProduct({
        ...dataProduct,
        [name]: value,
      });
    }
  };

  const handelChangeImage = (e) => {
    const regexImage = /(\.jpg|\.jpeg|\.png)$/i;
    const file = e.target.files[0];
    if (!regexImage.test(file.name)) {
      alert("format file tidak valid, harus berupa jpg/jpeg/png");
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
      id: productId || crypto.randomUUID(),
      image: image.name,
    };
    try {
      await axios.put(
        `https://672311402108960b9cc68deb.mockapi.io/api/v1/product/${productId}`,
        newProduct
      );
      navigate("/product/list");
    } catch (err) {
      console.error(err);
    }

  };

  return (
    <>
      {dataProduct && (
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
                    value={dataProduct.productName || ""}
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
                    className="form-select"
                    id="productCategory"
                    name="productCategory"
                    value={dataProduct.productCategory || ""}
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
                  {image && <p>Selected file: {image.name}</p>}
                </div>
              </div>
            </div>

            {/* Product Freshness */}
            <div className="row">
              <div className="col-12">
                <label className="form-label py-2">Product Freshness</label>
                {["Brand New", "Second Hand", "Refurbished"].map((option) => (
                  <div className="form-check" key={option}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="productFreshness"
                      value={option}
                      checked={dataProduct.productFreshness === option}
                      onChange={handleChange}
                    />
                    <label className="form-check-label">{option}</label>
                  </div>
                ))}
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
                  name="productDescription"
                  onChange={handleChange}
                  value={dataProduct.productDescription || ""}
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
                  className="form-control"
                  placeholder="$ 1"
                  onChange={handleChange}
                  value={dataProduct.productPrice || ""}
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
        </>
      )}
    </>
  );
};
