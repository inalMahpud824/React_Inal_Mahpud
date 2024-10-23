import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useProduct = create(
  persist(
    (set, get) => ({
      products: [
        {
          no: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
          productName: "John",
          productCategory: "Two",
          productFreshness: "Doe",
          productPrice: "Doe",
          image: "Doe",
          productDescription: "Doe",
        },
      ],
      setProducts: (newProducts) => set({ products: newProducts }),
      setUpdateProduct: (updatedProduct) => {
        const { products } = get(); 
        const findProduct = products.find((p) => p.no === updatedProduct.no);
        if (findProduct) {
          set({
            products: products.map((p) =>
              p.no === updatedProduct.no ? updatedProduct : p
            ),
          });
        }
      },
    }),
    {
      name: "dataProduct",
      getStorage: () => localStorage,
    }
  )
);
