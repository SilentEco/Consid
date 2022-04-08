import Backbtn from "@components/Backbutton";
import Button from "@components/Button";
import QUERY_GETONEPAINTING from "@queries/GetOnePainting.graphql";
import QUERY_GETPAINTINGS from "@queries/GetPaintings.graphql";
import {
  GetOnePaintingQuery,
  GetPaintingsQuery,
  Painting,
} from "generated/graphql";
import { initializeApollo } from "lib/apollo";
import {
  addAmountDispatch,
  addPaintingDispatch,
  addToCartDispatch,
} from "lib/redux/dispatch";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

interface paintingTypes {
  painting: Painting;
}

const Painting = ({ painting }: paintingTypes) => {
  const [frame, setFrame] = useState("white");
  const [background, setBackground] = useState("transparent");
  const [size, setSize] = useState("Large");
  const [isChecked, setIsChecked] = useState(2);

  const dispatch = useDispatch();
  const notify = () => {
    toast.success("Added to cart!", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });
  };
  const handleClick = () => {
    notify();
    addToCartDispatch(dispatch);
    addPaintingDispatch(
      painting.Title!,
      painting.Price!,
      painting.Image?.data?.attributes?.url!,
      frame,
      background,
      size,

      dispatch
    );
    addAmountDispatch(painting.Price!, dispatch);
  };

  const handleChecked = (index: number, value: string) => {
    setIsChecked(index);
    setSize(value);
  };

  return (
    <div className="onePaintingWrapper">
      <div className="onePainting">
        <div className="leftColumn">
          <div
            className={`${size}`}
            style={{
              backgroundColor: background,
              border: `15px solid ${frame}`,
            }}
          >
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
          <div className="rightColumn__middle">
            <hr />
            <div className="frameWrapper">
              <h1>Frame select</h1>
              <div>
                {painting.Frame?.map(({ Value }, index) => (
                  <div
                    key={index}
                    className={`frame`}
                    style={{
                      border: `3px solid ${Value}`,
                    }}
                    onClick={() => setFrame(Value!)}
                  ></div>
                ))}
              </div>
            </div>
            <div className="backgroundWrapper">
              <h1>Background select</h1>
              <div>
                {painting.Background?.map(({ Value }, index) => (
                  <div
                    key={index}
                    className={`background`}
                    style={{
                      backgroundColor: Value,
                      border: `1px solid black`,
                    }}
                    onClick={() => setBackground(Value!)}
                  ></div>
                ))}
              </div>
            </div>
            <div className="sizeWrapper">
              <h1>Size select</h1>
              <div>
                {painting.Size?.map(({ Value }, index) => (
                  <div key={index} className={`size`}>
                    <input
                      value={index}
                      type={"radio"}
                      checked={index === isChecked}
                      name="size"
                      onChange={() => handleChecked(index, Value!)}
                    />
                    {Value}
                  </div>
                ))}
              </div>
            </div>
            <hr />
          </div>
          <div className="rightColumn__bottom">
            <Button onClick={() => handleClick()}>
              {painting.Price} Kr • Add to cart
            </Button>
          </div>
        </div>
      </div>
      <Backbtn />
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
