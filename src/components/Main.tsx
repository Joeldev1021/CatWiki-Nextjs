import Link from "next/link";
import React from "react";
import Banner from "./Banner";
import ListCard from "./ListCard";
import styles from "@styles/main.module.scss";

interface Props {
  data: any[];
}

const Main = ({ data }: Props) => {
  console.log(data);
  return (
    <main className={styles.main}>
      <Banner />
      <div className={styles["content-info"]}>
        <div className={styles["info-header"]}>
          <div>
            <p className={styles["info-text"]}>Most Searched Breeds</p>
            <p className={styles["info-title"]}>
              66+ Breeds For you to discover
            </p>
          </div>
          <Link href="/more" ><a>SEE MORE  <i className="fa-solid fa-arrow-right-long"></i></a></Link>
        </div>
        <div className={styles['wrapper']}>
          {data.length > 0 && data.map((item: any) => (
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
