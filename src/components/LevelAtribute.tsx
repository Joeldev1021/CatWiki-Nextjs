import React from "react";
import styles from "@styles/level.module.scss";

const levels = [1, 2, 3, 4, 5];

interface PropsLevel {
  level: number;
}

const LevelAtribute = ({ level }: PropsLevel) => {
  return (
    <div className={styles["container-level"]}>
      {levels.map((item: any) => (
        <p
          className={styles["bar-level"]}
          style={{ background: `${item <= level ? "#544439" : "#E0E0E0;"}` }}
          key={item}
        ></p>
      ))}
    </div>
  );
};

export default LevelAtribute;
