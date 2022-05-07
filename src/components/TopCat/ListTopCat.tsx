import Image from 'next/image';
import React from 'react';
import styles from '@styles/listTopCat.module.scss';

interface Props {
    img : string;
    name : string;
    description : string;
    index:number;
}

const ListTopCat = ({img, name, description, index}:Props) => {
  return (
      <div className={styles['card-top']}>
          <div className={styles['card-img']}>
             <Image src={`https://cdn2.thecatapi.com/images/${img}.jpg`} alt={name} width={170} height={170} layout="responsive" /> 
          </div>
          <div>
              <p className={styles['card-name']}>{index+1}-{name}</p>
              <p className={styles['card-description']}>{description}</p>
          </div>
      </div>
  );
};

export default ListTopCat;