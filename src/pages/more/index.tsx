import Loading from "@components/Loading";
import TopCat from "@components/TopCat/TopCat";
import Layout from "@containers/Layout";
import useFetch from "hooks/useFetch";
import { NextPage } from "next";

const More:NextPage = () => {
 
  const {data} = useFetch({url: 'https://api.thecatapi.com/v1/breeds?limit=10&page=0'});

  return ( 
    <Layout>
       {data.length > 0 ? <TopCat topCat={data} /> : <Loading />}
    </Layout>
  );
};

export default More;
