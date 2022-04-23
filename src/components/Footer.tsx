import styles from "@styles/footer.module.scss";
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
      <footer className={styles.footer}>
          <Image src="/logo.svg" alt='logo' width={200} height={100} priority />
          <p>© created by <strong>Joeldev1021 </strong> - devChallenge.io 2022</p>
      </footer>
  );
};

export default Footer;