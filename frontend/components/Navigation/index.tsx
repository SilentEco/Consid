import Link from "next/link";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
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
          <a>
            Cart <AiOutlineShoppingCart />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
