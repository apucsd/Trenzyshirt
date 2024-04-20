import { TProduct } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TCartProduct extends TProduct {
  selectedQuantity?: number;
  selectedPrice?: number;
}

type TInitialState = {
  products: TCartProduct[];
  subTotal: number;
  total: number;
  deliveryCharge: number;
};

const initialState: TInitialState = {
  products: [],
  subTotal: 0,
  total: 0,
  deliveryCharge: 15,
};

interface QuantityUpdatePayload {
  _id: string;
  type: "increase" | "decrease";
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<TProduct>) => {
      const isExistItem = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (isExistItem) {
        isExistItem.selectedQuantity = (isExistItem.selectedQuantity || 0) + 1;
        isExistItem.selectedPrice =
          isExistItem.price * isExistItem.selectedQuantity;
      } else {
        const newItem = {
          ...action.payload,
          selectedQuantity: 1,
          selectedPrice: action.payload.price,
        };
        state.products.push(newItem);
      }
      state.subTotal = calculateSubTotal(state.products);
      state.total = calculateGrandTotal(state);
    },
    updateQuantity: (state, action: PayloadAction<QuantityUpdatePayload>) => {
      const product = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (product) {
        if (action.payload.type === "increase") {
          product.selectedQuantity = (product.selectedQuantity || 0) + 1;
        } else if (
          action.payload.type === "decrease" &&
          product.selectedQuantity &&
          product.selectedQuantity > 1
        ) {
          product.selectedQuantity -= 1;
        }
        product.selectedPrice = product.price * (product.selectedQuantity || 0);
      }
      state.subTotal = calculateSubTotal(state.products);
      state.total = calculateGrandTotal(state);
    },
    removeFromCart: (state, action: PayloadAction<{ _id: string }>) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload._id
      );
      state.subTotal = calculateSubTotal(state.products);
      state.total = calculateGrandTotal(state);
    },
  },
});

// const calculateSelectedPrice = (product: TBook): number => product.selectedQuantity! * product.price;

const calculateSubTotal = (products: TCartProduct[]): number =>
  products.reduce((total, product) => total + (product.selectedPrice || 0), 0);

const calculateGrandTotal = (state: TInitialState): number =>
  state.subTotal > 0 ? state.subTotal + state.deliveryCharge : state.subTotal;

export const { addToCart, updateQuantity, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
