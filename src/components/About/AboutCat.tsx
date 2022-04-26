import React from "react";
import styles from "@styles/catDetails.module.scss";

interface AboutCatProps {
    name: string;
    description: string;
    temperament: string;
    origin: string;
    life_span: string;
}

const AboutCat = ({name, description, temperament, origin, life_span}:AboutCatProps) => {
  return (
    <div>
      <h1>{name}</h1>
      <p className={styles["cat-description"]}>{description}</p>
      <p>
        <strong>Temperament: </strong>
        {temperament}
      </p>
      <p>
        <strong>Origin: </strong>
        {origin}
      </p>
      <p>
        <strong>Life span: </strong>
        {life_span}
      </p>
    </div>
  );
};

export default AboutCat;
