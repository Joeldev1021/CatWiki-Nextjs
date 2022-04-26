import Header from "@components/Header";
import OtherImg from "@components/OtherImg";
import Image from "next/image";
import React from "react";
import AboutCat from "./AboutCat";
import AtributeCat from "./AtributeCat";
import styles from "@styles/catDetails.module.scss";
import Footer from "@components/Footer";

const About:React.VFC = ({data}:any) => {
  return (
    <>
      <Header />
      <div className={styles["cat-details"]}>
        <div className={styles["cat-img"]}>
          <Image
            alt={data.name}
            src={`https://cdn2.thecatapi.com/images/${data.reference_image_id}.jpg`}
            width={370}
            height={370}
            layout="responsive"
          />
        </div>
        <div className={styles["cat-info"]}>
          <AboutCat
            name={data.name}
            description={data.description}
            temperament={data.temperament}
            origin={data.origin}
            life_span={data.life_span}
          />
          <AtributeCat
            adaptability={data.adaptability}
            affection_level={data.affection_level}
            child_friendly={data.child_friendly}
            grooming={data.grooming}
            health_issues={data.health_issues}
            intelligence={data.intelligence}
            social_needs={data.social_needs}
            stranger_friendly={data.stranger_friendly}
          />
        </div>
      </div>
      <h2 className={styles["sub-title"]}>Other Photos</h2>
      <OtherImg id={data.id} />
      <Footer/>
    </>
  );
};

export default About;
