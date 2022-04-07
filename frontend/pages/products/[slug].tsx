import QUERY_GETPAINTINGS from "@queries/GetPaintings.graphql";
import QUERY_GETONEPAINTING from "@queries/GetOnePainting.graphql";
import {
  GetOnePaintingQuery,
  GetPaintingsQuery,
  Painting,
  PaintingEntityResponseCollection,
} from "generated/graphql";
import { initializeApollo } from "lib/apollo";
import { GetStaticPaths, GetStaticProps } from "next";
import React, { HTMLAttributes } from "react";
import Image from "next/image";
import {
  addAmountDispatch,
  addPaintingDispatch,
  addToCartDispatch,
} from "lib/redux/dispatch";
import { useDispatch } from "react-redux";
import Button from "@components/Button";

interface paintingTypes {
  painting: Painting;
}

const Painting = ({ painting }: paintingTypes) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    addToCartDispatch(dispatch);
    addPaintingDispatch(
      painting.Title!,
      painting.Price!,
      painting.Image?.data?.attributes?.url!,
      dispatch
    );
    addAmountDispatch(painting.Price!, dispatch);
  };

  return (
    <div className="onePainting">
      <div className="leftColumn">
        <div className="image">
          <Image
            src={painting.Image?.data?.attributes?.url!}
            alt={painting.Title}
            layout="fill"
          />
        </div>
      </div>
      <div className="rightColumn">
        <div className="rightColumn__top">
          <h1>{painting.Title!}</h1>
          <h2>Artist: {painting.Artist!}</h2>
        </div>
        <div className="rightColumn__bottom">
          <Button onClick={() => handleClick()}>
            {painting.Price} Kr • Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const client = initializeApollo();
  const { data }: { data: GetPaintingsQuery } = await client.query({
    query: QUERY_GETPAINTINGS,
  });

  const paths = data!.paintings!.data!.map(({ attributes }) => ({
    params: { slug: attributes!.Slug! },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const client = initializeApollo();
  const slug = params!.slug;

  const { data }: { data: GetOnePaintingQuery } = await client.query({
    query: QUERY_GETONEPAINTING,
    variables: {
      slug,
    },
  });

  return {
    props: {
      painting: data.paintings?.data[0].attributes,
    },
  };
};

export default Painting;
