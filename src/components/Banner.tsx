import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <div >
        <Image src="/HeroImagelg.png"
         width={900}
          height={400} 
          priority />
    </div>
  );
};

export default Banner;