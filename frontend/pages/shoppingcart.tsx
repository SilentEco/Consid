import { RootState } from "lib/redux/app/store";
import {
  removeFromCartDispatch,
  removeAmountDispatch,
  removePaintingDispatch,
} from "lib/redux/dispatch";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

const Shoppingcart = () => {
  const [totalPrice, setTotalPrice] = useState(0);

  const dispatch = useDispatch();
  const cart = useSelector(
    (state: RootState) => state.painting.paintingReducer.value
  );
  const handleDelete = (name: string, price: number) => {
    removeFromCartDispatch(dispatch);
    removePaintingDispatch(name, dispatch);
    removeAmountDispatch(price, dispatch);
  };

  useEffect(() => {
    const total = cart.map((price) => price.price).reduce((a, b) => a + b, 0);
    setTotalPrice(total);
  }, [cart]);
  return (
    <div>
      <ul className="productList">
        {cart.map(({ name, image, price }, index) => (
          <li key={index} className="product">
            <div className="product__info">
              <h1>{name}</h1>
              <p>{price}:-</p>
            </div>
            <div className="product__painting">
              <Image layout="fill" alt={name} src={image} />
              <div className="deleteContainer">
                <p
                  className="deleteContainer__deleteButton"
                  onClick={() => handleDelete(name, price)}
                >
                  X
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="checkoutContainer">
        <p>TOTAL AMOUNT: {totalPrice}</p>
      </div>
    </div>
  );
};

export default Shoppingcart;
