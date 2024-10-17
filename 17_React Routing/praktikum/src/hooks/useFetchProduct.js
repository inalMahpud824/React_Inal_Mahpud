import { useEffect, useState } from "react";

export const useFetchProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("dataProduct");
    if (data) {
      setProducts(JSON.parse(data));
      return;
    }
    return;
  }, [products]);

  return {products, setProducts}
}