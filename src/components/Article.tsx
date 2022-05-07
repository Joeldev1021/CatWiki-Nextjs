import React from "react";
import styles from "@styles/article.module.scss";
import ListArticleImg from "./ListArticleImg";

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
        <span className={styles["article__btn"]}>READ MORE <i className="fa-solid fa-arrow-right-long"></i></span>
      </div>
      <div className={styles["article__images"]}>
       <ListArticleImg/> 
      </div>
    </article>
  );
};

export default Article;
