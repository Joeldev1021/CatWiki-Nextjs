/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "@styles/Suggesions.module.scss";
import Link from "next/link";

interface Props {
  inputData: string;
  listCat: any[];
}
const Suggesions = ({ inputData, listCat }: Props) => {
  
  return (
    <>
      {inputData.length > 0 && (
        <div className={styles["suggestions"]}>
          {listCat.map((item: any) => {
            if (item.name.toLowerCase().includes(inputData.toLowerCase())) {
              return (
                <Link href={`/${item.id}`} key={item.id}>
                  <a>{item.name}</a>
                </Link>
              );
            }
          })}
        </div>
      )}
    </>
  );
};

export default Suggesions;
