import { RootState } from "lib/redux/app/store";
import Link from "next/link";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

const Navbar = () => {
  const amount = useSelector(
    (state: RootState) => state.cart.cartReducer.value
  );
  return (
    <div className="header">
      <div className="navbar">
        <Link passHref href={"/about"}>
          <a>About</a>
        </Link>
        <Link passHref href={"/"}>
          <h1>Art Gallery</h1>
        </Link>
        <Link passHref href={"/shoppingcart"}>
          <div className="cart">
            <a>
              Cart <AiOutlineShoppingCart />
            </a>
            <p>{amount}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
