import { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { useProduct } from "../stores/productStore";
import { Link } from "react-router-dom";
import axios from "axios";
export const ListProduct = () => {
  const { products, setProducts } = useProduct();

  useEffect(() => {
    const fetchDataProducts = async () => {
      try {
        const response = await axios.get(
          "https://672311402108960b9cc68deb.mockapi.io/products/product"
        );
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDataProducts();
  }, [setProducts]);
  const deleteProduct = async (id) => {
    const confirm = window.confirm(
      "apakah data dengan no " + id + " ingin di hapus ?"
    );
    if (!confirm) {
      return;
    }
    const response = await axios.delete(
      `https://672311402108960b9cc68deb.mockapi.io/products/product/${id}`
    );
    if(response){
      alert("data berhasil di hapus")
      setProducts(products.filter((product) => product.id !== id));
    }
  };

  return (
    <>
      <Navbar />

      <div className="container py-5">
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((product) => (
                <tr key={product.id}>
                  <td>
                    <Link to={`/product/${product.id}`}>{product.id}</Link>
                  </td>
                  <td>{product.productName}</td>
                  <td>{product.productCategory}</td>
                  <td>{product.productFreshness}</td>
                  <td>{product.productDescription}</td>
                  <td>{product.productPrice}</td>
                  <td>{product.image}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteProduct(product.id)}
                    >
                      Delete
                    </button>{" "}
                    <Link
                      to={`/product/${product.id}`}
                      // onClick={() => editProduct(product.no)}
                      className="btn btn-primary"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
