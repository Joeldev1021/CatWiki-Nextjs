/* eslint-disable no-unused-vars */
import React, { FormEvent, useState } from "react";
import Suggesions from "./Suggesions";
import styles from "@styles/FormSearch.module.scss";

interface Props {
  handleSearch: (n: string) => void;
  listCat: any[];
}

const FormSearch = ({ handleSearch, listCat }: Props) => {
  const [inputData, setInputData] = useState<string>("");

  console.log(listCat);
 
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch(inputData);
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          onChange={(e) => setInputData(e.target.value)}
          type="text"
          placeholder="Search"
          defaultValue={inputData}
        />
        <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
      </form>
      <Suggesions listCat={listCat} inputData={inputData} /> 
    </>
  );
};

export default FormSearch;
