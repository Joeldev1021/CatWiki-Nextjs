import About from "@components/About/About";
import Layout from "@containers/Layout";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";

interface Params extends ParsedUrlQuery {
  id: string;
}

interface CatProps {
  data: any;
}

// This function gets called at build time on server-side.
export const getStaticProps: GetStaticProps<CatProps, Params> = async ({
  params,
}) => {
  const { id } = params as Params;
  const res = await fetch(`${process.env.API_URL}/breeds/${id}`, {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": `${process.env.API_KEY}`,
    },
  });
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
};
// This gets called on every request
export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const result = await fetch(`https://api.thecatapi.com/v1/breeds`, {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": `${process.env.API_KEY}`,
    },
  });

  const data = await result.json();
  return {
    paths: data.map((item: any) => ({ params: { id: item.id } })),
    fallback: "blocking",
  };
};

const CatComponent = ({ data }: CatProps) => {
  return (
    <Layout>
      <About data={data}/>
    </Layout>
  );
};

export default CatComponent;