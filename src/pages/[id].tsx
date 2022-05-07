import About from "@components/About/About";
import Layout from "@containers/Layout";
import { GetStaticPaths, GetStaticProps} from "next";
import type { NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import { config } from "utils";
import Loading from "@components/Loading";

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
  const res = await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${id}`, {
    headers:config.header 
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
    headers: config.header,
  });
  
  const data = await result.json();
  return {
    paths: data.map((item: any) => ({ params: { id: item.id } })),
    fallback: "blocking",
  };
};

const CatComponent:NextPage<CatProps> = ({ data }) => {
  return (
    <Layout>
      {
        data.length > 0
        ? <About image={data[0].url} data={data[0].breeds[0]}/>
        :<Loading/>
      }
    </Layout>
  );
};

export default CatComponent;