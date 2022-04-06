import { AppDispatch } from "./app/store";
import { addNFT, removeNFT } from "./features/nftSlice";
import { addAmount, removeAmount } from "./features/amountSlice";
import { addToCart, removeFromCart } from "./features/shoppingcartSlice";

export const addNFTDispatch = (
  name: string,
  price: number,
  image: string,
  dispatch: AppDispatch
) => {
  dispatch(
    addNFT({
      name: name,
      price: price,
      image: image,
    })
  );
};

export const removeNFTDispatch = (name: string, dispatch: any) => {
  dispatch(removeNFT(name));
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
