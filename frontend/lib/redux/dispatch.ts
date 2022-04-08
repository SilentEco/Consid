import { AppDispatch } from "./app/store";
import { addPainting, removePainting } from "./features/paintingSlice";
import { addAmount, removeAmount } from "./features/amountSlice";
import { addToCart, removeFromCart } from "./features/shoppingcartSlice";

export const addPaintingDispatch = (
  name: string,
  price: number,
  image: string,
  frame: string,
  background: string,
  size: string,
  dispatch: AppDispatch
) => {
  dispatch(
    addPainting({
      name: name,
      price: price,
      image: image,
      frame: frame,
      background: background,
      size: size,
    })
  );
};

export const removePaintingDispatch = (name: string, dispatch: any) => {
  dispatch(removePainting(name));
};

export const addAmountDispatch = (price: number, dispatch: AppDispatch) => {
  dispatch(addAmount(price));
};

export const removeAmountDispatch = (price: number, dispatch: AppDispatch) => {
  dispatch(removeAmount(price));
};

export const addToCartDispatch = (dispatch: AppDispatch) => {
  dispatch(addToCart());
};

export const removeFromCartDispatch = (dispatch: AppDispatch) => {
  dispatch(removeFromCart());
};
