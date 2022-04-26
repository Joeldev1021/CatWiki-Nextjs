import Home from "@components/Home";
import Layout from "@containers/Layout";
import { useEffect, useState } from "react";
import { generateRandomNumber } from "utils";

interface Props {
  data: any;
}

const Index = ({ data }: Props) => {
  const [randomCat, setRandomCat] = useState<any[]>([]);
  const [numberRandom, setNumberRandom] = useState<number[]>([]);
  //get random Number
  useEffect(() => {
    const res =generateRandomNumber(numberRandom, data.length);
    setNumberRandom(res);
  }, []);

  // get random Cat
  useEffect(() => {
    const cats = numberRandom.map((i) => data[i]);
    setRandomCat(cats);
  }, [numberRandom]);

  return (
    <>
      <Layout>
        {randomCat.length > 0 ? (
          <Home data={randomCat} />
        ) : (
          <div>Loading...</div>
        )}
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    `${process.env.API_URL}/breeds`,
    {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": `${process.env.API_KEY}`,
      },
    }
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default Index;
//  `https://api.thecatapi.com/v1/breeds?limit=4&page=0`,