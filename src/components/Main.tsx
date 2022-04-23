/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import React from "react";
import Banner from "./Banner";
import ListCard from "./ListCard";
import styles from "@styles/main.module.scss";

interface Props {
  data: any[];
}

const Main = ({ data }: Props) => {
  return (
    <main className={styles.main}>
      <Banner />
      <div className={styles["content__info"]}>
        <div className={styles["info__header"]}>
          <div>
            <p className={styles["info__text"]}>Most Searched Breeds</p>
            <p className={styles["info__title"]}>
              66+ Breeds For you to discover
            </p>
          </div>
          <Link href="/more" ><a>more {"-->"}</a></Link>
        </div>
        <div className="wrapper">
          {data.map((item: any) => (
            <Link key={item.id} href={item.id}>
              <a>
                <ListCard name={item.name} url={item.image.url} />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Main;
