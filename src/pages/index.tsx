/* eslint-disable jsx-a11y/anchor-is-valid */
import Banner from "@components/Banner";
import Header from "@components/Header";
import Layout from "@containers/Layout";
import Link from "next/link";

interface Props {
  data: any;
}

const Home = ({ data }: Props) => {
  return (
    <>
      <Layout>
        <Header />
        <Banner />
        {data.map((item: any) => (
          <Link key={item.id} href={item.id}><a>{item.name}</a></Link>
        ))}
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    `https://api.thecatapi.com/v1/breeds?limit=4&page=1`,
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

export default Home;
