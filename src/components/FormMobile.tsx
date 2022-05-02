import React from "react";
import styles from "@styles/FormMobile.module.scss";

const FormMobile:React.FC = () => {
  return (
    <div className={styles['form-modal']}>
        <button className={styles['btn-close']}>x</button>
      <form>
        <input placeholder="Search" type="text" />
        <button><i className="fa-solid fa-magnifying-glass"></i></button>
      </form>
    </div>
  );
};

export default FormMobile;
