/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-unused-vars */
import React, { FormEvent, useState } from "react";
import Suggesions from "./Suggesions";
import styles from "@styles/FormSearch.module.scss";
import { useWindowSize } from "hooks/useWindowSize";
import FormMobile from "./FormMobile";

interface Props {
  handleSearch: (n: string) => void;
  listCat: any[];
  width?: number;
}

const FormSearch = ({ handleSearch, listCat, width }: Props) => {
  const [inputData, setInputData] = useState<string>("");
  const [isShowFormMobile, setIsShowFormMobile] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch(inputData);
  };

  const handleModalMobile = () => {
    if (width! < 469) {
      setIsShowFormMobile(!isShowFormMobile);
    }
    if (width! > 469) setIsShowFormMobile(false);
  };
  console.log(width);

  //http://www.vetstreet.com/cats/cymric => read more
  return (
    <>
      {isShowFormMobile && (
        <FormMobile
          handleSearch={handleSearch}
          listCat={listCat}
          setIsShowFormMobile={setIsShowFormMobile}
          setInputData={setInputData}
          inputData={inputData}
        />
      )}
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          onFocus={() => handleModalMobile()}
          onChange={(e) => setInputData(e.target.value)}
          type="text"
          placeholder="Search"
          defaultValue={inputData}
        />
        <button type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
      <Suggesions listCat={listCat} inputData={inputData} />
    </>
  );
};

export default FormSearch;
