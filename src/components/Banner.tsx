/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "@styles/Banner.module.scss";
import FormSearch from "./FormSearch";

const Banner = () => {
  const [searcData, setSearcData] = useState<string>("");
  const [listCat, setListCat] = useState<any[]>([]);

  const handleSearch = (n:string) => {
    setSearcData(n);
  };

  useEffect(() => {
      fetch(`https://api.thecatapi.com/v1/breeds`, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": `${process.env.API_KEY}`,
        },
      })
      .then(res => res.json())
      .then(data => setListCat(data))
      .catch(err => console.log(err))
      .finally(() => console.log("finally"));
  }, []);
  

  return (
    <div className={styles.banner}>
      <div className={styles["banner__content"]}>
        <Image
          className={styles["banner__logo"]}
          src="/logo.svg"
          alt="logo"
          width={300}
          height={100}
          priority
        />  
        <p className={styles["banner__text"]}>Get to know more about your cat breed</p>
        <FormSearch handleSearch={handleSearch} listCat={listCat} />
      </div>
      <Image
        src="/HeroImagelg.png"
        width={1100}
        alt="Hero Image"
        height={470}
        priority
      />
    </div>
  );
};

export default Banner;
