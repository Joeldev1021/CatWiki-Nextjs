import React from "react";
import styles from "@styles/article.module.scss";
import Image from "next/image";

const ListArticleImg = () => {
  return (
    <>
      <div className={styles["article-img"]}>
        <Image
          src="/image 1.png"
          alt="image 1"
          width={249}
          height={440}
          layout="responsive"
        />
      </div>
      <div className={styles["article-img"]}>
        <Image
          src="/image 2.png"
          alt="image 2"
          width={411}
          height={252}
          layout="responsive"
        />
      </div>
      <div className={styles["article-img"]}>
        <Image
          src="/image 3.png"
          alt="image 3"
          width={359}
          height={580}
          layout="responsive"
        />
      </div>
    </>
  );
};

export default ListArticleImg;
