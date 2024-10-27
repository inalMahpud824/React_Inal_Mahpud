// App.js
import { useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import "../styles/createProduct.css";
import { FormUpdateProduct } from "../components/FormUpdateProduct";
import { useEffect, useState } from "react";
function UpdateProduct() {
  const {id} = useParams();
  const [idProduct, setIdProduct] = useState(0);
  useEffect(() => {
    if(id){
      setIdProduct(id)
    }
  }, [])
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
        <h1 className="text-center my-2">Create Product</h1>
        <p className="text-center mx-auto">
          Below is an example form built entirely with Bootstrap’s form
          controls. Each required form group has a validation state that can be
          triggered by attempting to submit the form without completing it.
        </p>
        <div className=""></div>
        <div className="cont-form">
          <h2>Detail Product</h2>

          <FormUpdateProduct productId={idProduct} />
        </div>

        {/* Product Table and Search/Delete Functions */}
      </div>
    </>
  );
}

export default UpdateProduct;