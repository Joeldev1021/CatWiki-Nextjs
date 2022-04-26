import LevelAtribute from "@components/LevelAtribute";
import styles from "@styles/atributeCat.module.scss";
import React from "react";

interface AtributeProps {
    adaptability: number;
    affection_level: number;
    child_friendly: number;
    grooming: number;
    intelligence: number;
    health_issues: number;
    social_needs: number;
    stranger_friendly: number;    
}

const AtributeCat = ({adaptability, affection_level, child_friendly, grooming, health_issues, intelligence, social_needs, stranger_friendly}:AtributeProps) => {
  return (
    <>
      <div className={styles["cat-level"]}>
        <strong>Adaptability: </strong>
        <LevelAtribute level={adaptability} />
      </div>
      <div className={styles["cat-level"]}>
        <strong>Affection level: </strong>
        <LevelAtribute level={affection_level} />
      </div>
      <div className={styles["cat-level"]}>
        <strong>Child Friendly: </strong>
        <LevelAtribute level={child_friendly} />
      </div>
      <div className={styles["cat-level"]}>
        <strong>Grooming: </strong>
        <LevelAtribute level={grooming} />
      </div>
      <div className={styles["cat-level"]}>
        <strong>Intelligence: </strong>
        <LevelAtribute level={intelligence} />
      </div>
      <div className={styles["cat-level"]}>
        <strong>Health issues: </strong>
        <LevelAtribute level={health_issues} />
      </div>
      <div className={styles["cat-level"]}>
        <strong>Social needs: </strong>
        <LevelAtribute level={social_needs} />
      </div>
      <div className={styles["cat-level"]}>
        <strong>Stranger friendly: </strong>
        <LevelAtribute level={stranger_friendly} />
      </div>
    </>
  );
};

export default AtributeCat;
