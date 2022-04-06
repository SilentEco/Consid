import { PaintingEntity } from "generated/graphql";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface paintingTypes {
  painting: PaintingEntity[];
}

const PaintingCard = ({ painting }: paintingTypes) => {
  return (
    <>
      {painting.map(({ attributes }, index) => (
        <Link key={index} passHref href={"products/" + attributes?.Slug}>
          <div className="painting">
            <div className="image">
              <Image
                layout="fill"
                src={attributes?.Image?.data?.attributes?.url!}
                alt={attributes?.Title}
              />
            </div>
            <div className="imageProperties">
              <h1>{attributes?.Title}</h1>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default PaintingCard;
