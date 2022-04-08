import Backbtn from "@components/Backbutton";
import Button from "@components/Button";
import { RootState } from "lib/redux/app/store";
import {
  removeAmountDispatch,
  removeFromCartDispatch,
  removePaintingDispatch,
} from "lib/redux/dispatch";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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
        {cart.map(({ name, image, price, frame, background, size }, index) => (
          <li key={index} className="product">
            <div className="product__info">
              <h1>{name}</h1>
              <p>{price}:-</p>
            </div>
            <div className="product__options">
              <div className="frame">
                <h1>Frame </h1>
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    border: `2px ${frame} solid`,
                  }}
                />
              </div>
              <div className="background">
                <h1>Background </h1>
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    border: `1px gray solid`,
                    backgroundColor: background,
                  }}
                />
              </div>
              <div className="size">
                <h1>Size </h1>
                <div>{size}</div>
              </div>
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
        <Backbtn />
        <Link passHref href={"/checkout"}>
          <Button>
            <span>
              Checkout
              <br />
            </span>
            Total: {totalPrice}:-
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Shoppingcart;
