import { create } from "zustand";
import { UiProductList, UiAddCartStateMain } from "../interface/Allinterface";

interface UiAddCartState {
  cart: UiAddCartStateMain[];
  addToCart: (item: UiProductList, countProduct: number) => void;
  removeToCart: (removeItems: UiAddCartStateMain[]) => void;
  updateCartQuantity: (updateItems: UiAddCartStateMain[]) => void;
  clearCart: () => void;
}

export const useAddToCart = create<UiAddCartState>((set) => ({
  // State
  cart: [],

  // Function
  addToCart: (item: UiProductList, countProduct: number) =>
    set((state) => ({
      cart: [
        ...state.cart,
        { date: new Date().toISOString(), quantity: countProduct, item: item },
      ],
    })),
  removeToCart: (removeItems) =>
    set((state) => ({
      cart: state.cart.filter(
        (cartItem) =>
          !removeItems.some(
            (removeItem) => removeItem.item.id === cartItem.item.id
          )
      ),
    })),
  updateCartQuantity: (updateItems) =>
    set((state) => ({
      cart: state.cart.map((cartItem) => {
        const matchingUpdateItem = updateItems.find(
          (updateItem) => updateItem.item.id === cartItem.item.id
        );
        if (matchingUpdateItem) {
          return matchingUpdateItem;
        }
        return cartItem;
      }),
    })),
  clearCart: () =>
    set(() => ({
      cart: [],
    })),
}));
