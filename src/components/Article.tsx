import Image from "next/image";
import React from "react";
import styles from "@styles/article.module.scss";

const Article = () => {
  return (
    <article className={styles.article}>
      <div>
        <h1 className={styles["article__title"]}>
          Why should you <br /> have a cat?
        </h1>
        <p className={styles["article__text"]}>
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety leves
        </p>
        <span className={styles["article__btn"]}>READ MORE</span>
      </div>
      <div className={styles["article__images"]}>
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
      </div>
    </article>
  );
};

export default Article;
