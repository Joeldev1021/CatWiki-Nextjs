/* eslint-disable no-unused-vars */
import Image from "next/image";
import React from "react";
import styles from "@styles/listCard.module.scss";

interface Props {
  url: string;
  name: string;
}

const ListCard = ({ url, name }: Props) => {
  return (
    <div className={styles["card-item"]}>
      <div className={styles["card-img"]}>
        <Image src={url} alt={name} width={220} height={220} priority />
      </div>
      <p className={styles["card__name"]}>{name}</p>
    </div>
  );
};

export default ListCard;
