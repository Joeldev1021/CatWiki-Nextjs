/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "@styles/Banner.module.scss";
import FormSearch from "./FormSearch";
import { config } from "utils";
import { useWindowSize } from "hooks/useWindowSize";
import useFetch from "hooks/useFetch";

const url:string = 'https://api.thecatapi.com/v1/breeds';

const Banner: React.VFC = () => {
  const [searcData, setSearcData] = useState<string>("");
  const [isShowModalSearch, setIsShowModalSearch] = useState<boolean>(false);

  const { width } = useWindowSize();
  const { data } = useFetch({ url });

  const handleSearch = (n: string) => {
    setSearcData(n);
  };
  
  return (
    <div className={styles.banner}>
      <div className={styles["banner-content"]}>
        <div className={styles['banner-content-logo']}>
          <Image
            className={styles["banner-logo"]}
            src={width! > 768 ? "/logo.svg" : "/logo-mobile.svg"}
            alt="logo"
            width={300}
            height={100}
            layout="responsive"
          />
        </div>
        <p className={styles["banner-text"]}>
          Get to know more about your cat breed
        </p>
        <FormSearch width={width} handleSearch={handleSearch} listCat={data} />
      </div>
      <Image
        src={width! > 768 ? "/HeroImagelg.png" : "/HeroImagesm.png"}
        width={1100}
        alt="Hero Image"
        height={470}
        priority
      />
    </div>
  );
};

export default Banner;
