import { useEffect } from "react";
import { useFetchProduct } from "../hooks/useFetchProduct";
import {useNavigate, useParams} from 'react-router-dom'
export const DetailProduct = () => {
  const params = useParams();
  const id =  params.id
  console.log(id)
  useEffect(() => {
    // const fetchDetail
    // if(id) {

    // }
  }, [id])
  return (
    <div>
      <h1>Detail Product</h1>
      
      <div className="container">
        {/* {products.map((product) => (
          <div key={product.id}>
            <h2>Product Name: {product.productName}</h2>
            <p>Product Category: {product.productCategory}</p>
            <p>Product Freshness: {product.productFreshness}</p>
            <p>Product price: {product.price}</p>
            <p>Product Description {product.productDescription}</p>
          </div>
        ))} */}
      </div>
    </div>
  );
};
