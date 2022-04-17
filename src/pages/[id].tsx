/* eslint-disable no-unused-vars */
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';

interface Params extends ParsedUrlQuery {
    id: string;
}
interface Props {
    id: string;
}
// This function gets called at build time on server-side.
export const getStaticProps: GetStaticProps<Params> = async ({params}) => {
    const {id} = params as Params;
    console.log("id", id);
    return {
        props: {
            id
        }
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
        paths: data.map((item: any) => ({params: {id: item.id}})),
        fallback: "blocking"
    };
};

const  CatComponent = ({ id }:Props) => {
  return (
      <div>
          <h1>hola-{id}</h1>
      </div>
  );
};

export default CatComponent; 