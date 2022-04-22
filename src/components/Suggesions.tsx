import React from "react";
import styles from "@styles/Suggesions.module.scss";

interface Props {
  inputData: string;
  listCat: any[];
}
const Suggesions = ({ inputData, listCat }: Props) => {
  return (
    <div className={styles["suggestions"]}>
      {inputData.length > 0 &&
        listCat.map((item: any) => {
          if (item.name.toLowerCase().includes(inputData.toLowerCase())) {
            return <li key={item.id}>{item.name}</li>;
          }
        })}
    </div>
  );
};

export default Suggesions;
