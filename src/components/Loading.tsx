import Image from "next/image";
import React from "react";
import styles from "@styles/loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.loading}>
      <Image
        src={'/catLoading.gif'}
        width={300}
        height={300}
        layout="responsive"
        alt="Loading"
      />
    </div>
  );
};

export default Loading;
