import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header>
      <Image
        src={"/logo.svg"}
        alt="Picture of the author"
        width={100}
        height={50}
        priority
      />
    </header>
  );
};

export default Header;
