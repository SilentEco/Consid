import PaintingCard from "@components/PaintingCard";
import QUERY_GETPAINTINGS from "@queries/GetPaintings.graphql";
import { GetPaintingsQuery, PaintingEntity } from "generated/graphql";
import { initializeApollo } from "lib/apollo";
import { GetStaticProps } from "next";

interface paintingTypes {
  painting: PaintingEntity[];
}

const Home = ({ painting }: paintingTypes) => {
  return (
    <div className="paintingContainer">
      <PaintingCard painting={painting} />
    </div>
  );
};
export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const client = initializeApollo();
  const { data }: { data: GetPaintingsQuery } = await client.query({
    query: QUERY_GETPAINTINGS,
  });

  return {
    props: {
      painting: data.paintings?.data,
    },
  };
};
