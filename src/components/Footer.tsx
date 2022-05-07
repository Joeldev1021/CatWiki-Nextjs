import styles from "@styles/footer.module.scss";
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
      <footer className={styles.footer}>
        <div className={styles.img}>
          <Image src="/logo.svg" alt='logo' width={200} height={100} layout="responsive" />
        </div>
          <p>© created by <a href="https://github.com/Joeldev1021"> Joeldev1021 </a> - devChallenge.io 2022</p>
      </footer>
  );
};

export default Footer;