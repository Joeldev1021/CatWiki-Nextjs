import Footer from "@components/Footer";
import Header from "@components/Header";
import React from "react";
import ListTopCat from "./ListTopCat";
import styles from "@styles/listTopCat.module.scss";

const TopCat = ({ topCat }: any) => {
  return (
    <>
      <Header/>
      <p className={styles['title-top']}>Top 10 most searched breeds</p>
      {topCat.map((item: any) => {
        return (
          <ListTopCat
            key={item.id}
            name={item.name}
            description={item.description}
            img={item.reference_image_id}
          />
        );
      })}
      <Footer/>
    </>
  );
};

export default TopCat;
