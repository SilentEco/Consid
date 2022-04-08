import { useRouter } from "next/router";
import React from "react";
import { AiFillCaretLeft } from "react-icons/ai";

const Backbtn = () => {
  const router = useRouter();
  return (
    <div
      className="backBtn"
      onClick={() => {
        router.back();
      }}
    >
      <AiFillCaretLeft />
    </div>
  );
};

export default Backbtn;
