import { useFetchProduct } from "../hooks/useFetchProduct";

export const DetailProduct = () => {
  const { products } = useFetchProduct();
  return (
    <div>
      <h1>Detail Product</h1>
      <div className="container">
        {products.map((product) => (
          <div key={product.no}>
            <h2>Product Name: {product.productName}</h2>
            <p>Product Category: {product.productCategory}</p>
            <p>Product Freshness: {product.productFreshness}</p>
            <p>Product price: {product.price}</p>
            <p>Product Description {product.productDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
