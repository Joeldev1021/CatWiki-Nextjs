import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <Link href="/">
        <a>
          <Image
            src={"/logo.svg"}
            alt="Picture of the author"
            width={100}
            height={50}
            priority
          />
        </a>
      </Link>
    </header>
  );
};

export default Header;
