import { create } from "zustand";

export const useCart = create((set) => ({
  items: [],

  addProduct: (product) =>
    set((state) => {
      const existingProduct = state.items.find(
        (item) => item.product.id === product.id,
      );
      if (existingProduct) {
        return {
          items: state.items.map((item) =>
            item.product.id === product.id
              ? { product, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }
      return {
        items: [...state.items, { product, quantity: 1 }],
      };
    }),

  removeProduct: (product) =>
    set((state) => {
      return {
        items: state.items.filter((item) => item.product.id !== product.id),
      };
    }),
    
  resetCart: () => set({ items: [] }),
}));
