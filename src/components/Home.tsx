import React from 'react';
import Article from './Article';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

interface Props {
    data: any[]
}

const Home = ({data}:Props) => {
  return (
      <>
       <Header/>
       <Main data={data}/>
       <Article/>
       <Footer/>
      </>
  );
};

export default Home;