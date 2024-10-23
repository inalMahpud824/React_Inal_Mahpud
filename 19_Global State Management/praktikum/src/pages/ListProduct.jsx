import { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { useProduct } from "../stores/productStore";
import { Link } from "react-router-dom";
export const ListProduct = () => {
  const { products, setProducts } = useProduct();
  useEffect(() => {
    const getData = () => {
      const data = localStorage.getItem("dataProduct");
      if (data) {
        const parsedData = JSON.parse(data);
        if (parsedData && parsedData.products) {
          console.log(parsedData)
          console.log( parsedData.products)
          return parsedData.products;
        }
      }
      return [];
    };
    const iniData = getData();
    if (iniData.length > 0) {
      setProducts(iniData);
    } else {
      localStorage.setItem("dataProduct", JSON.stringify({ products }));
    }
  }, []);


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
            {products.length > 0 &&
              products.map((product) => (
                <tr key={product.no}>
                  <td>
                    <Link to={`/product/${product.no}`}>{product.no}</Link>
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
                      onClick={() => deleteProduct(product.no)}
                    >
                      Delete
                    </button>{" "}
                    <Link
                      to={`/product/${product.no}`}
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
