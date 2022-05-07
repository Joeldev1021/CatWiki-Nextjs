/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import styles from "@styles/FormMobile.module.scss";
import Suggesions from "./Suggesions";

interface Props {
  handleSearch: (n:string) => void;
  listCat: any[];
  setIsShowFormMobile: (n:boolean) => void;
  setInputData: (n:string) => void;
  inputData : string;
}

const FormMobile:React.FC<Props> = ({inputData,setInputData, listCat, setIsShowFormMobile}) => {
  const inputRef =  useRef<HTMLInputElement>(null);
  
 /* A hook that is called when the component is mounted. It is used to focus the input element. */
  useEffect(() => {
    inputRef.current?.focus(); 
  }, []);

  const handleClose = () => {
    setIsShowFormMobile(false);
    setInputData("");
  };
  
  return (
    <div className={styles['form-modal']}>
        <button onClick={()=> handleClose()} className={styles['btn-close']}>x</button>
      <form>
        <input ref={inputRef} defaultValue={inputData} onChange={(e)=> setInputData(e.target.value)}  placeholder="Search" type="text" />
        <button><i className="fa-solid fa-magnifying-glass"></i></button>
      </form>
      <Suggesions listCat={listCat} inputData={inputData} />
    </div>
  );
};

export default FormMobile;
