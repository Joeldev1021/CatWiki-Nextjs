import Image from 'next/image';
import React from 'react';
import styles from '@styles/article.module.scss';

const Article = () => {
  return (
    <article className={styles.article}>
       <div>
           <h1 className={styles['article__title']}>Why should you have a cat?</h1>
           <p className={styles['article__text']}>Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves</p>
           <span className={styles['article__btn']}>READ MORE</span>
        </div> 
        <div>
            <Image src="/image 1.png" alt='image 1' width={200} height={100} priority/>
            <Image src="/image 2.png" alt='image 2' width={200} height={100} priority/>
            <Image src="/image 3.png" alt='image 3' width={200} height={100} priority/>
        </div>
    </article>
  );
};

export default Article;