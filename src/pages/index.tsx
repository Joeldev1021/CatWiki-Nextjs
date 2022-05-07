import Home from "@components/Home";
import Loading from "@components/Loading";
import Layout from "@containers/Layout";
import { useEffect, useState } from "react";
import { generateRandomNumber, config } from "utils";

interface Props {
  data: any;
}

const Index = ({ data }: Props) => {

  const [randomCat, setRandomCat] = useState<any[]>([]);
  const [numberRandom, setNumberRandom] = useState<number[]>([]);
  //get random Number
  useEffect(() => {
    const res = generateRandomNumber(numberRandom, data.length-1);
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
        {randomCat.length > 0 ? <Home data={randomCat} /> : <Loading />}
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch(`${process.env.API_URL}/breeds`, {
    headers: config.header,
  });
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default Index;
