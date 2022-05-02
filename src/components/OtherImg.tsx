import useFetch from "hooks/useFetch";
import { BreedImg } from "interface";
import styles from "@styles/otherImg.module.scss";
import Image from "next/image";
import React from "react";

interface Props {
  id: string;
}

const OtherImg = ({ id }: Props) => {
  const { data } = useFetch({ id });

  return (
    <div className={styles["wrapper-other"]}>
      {data.length > 0 &&
        data.map((item: BreedImg) => {
          return (
            <div className={styles["card-other"]} key={item.id}>
              <Image
                height={item.height}
                width={item.height}
                key={item.id}
                src={item.url}
                alt={item.id}
                layout="responsive"
              />
            </div>
          );
        })}
    </div>
  );
};

export default OtherImg;
