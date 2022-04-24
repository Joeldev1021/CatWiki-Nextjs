import { BreedImg } from "interface";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Props {
  id: string;
}


const OtherImg = ({ id }: Props) => {
  const [imgs, setImgs] = useState<BreedImg[]>([]);
  useEffect(() => {
    fetch(`https://api.thecatapi.com/v1/images/search?breed_id=${id}&limit=9`, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": `${process.env.API_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setImgs(res));
  }, [id]);
  console.log(imgs);
  return (
    <div>
      {
      imgs.length > 0 &&
      imgs.map((item: BreedImg) => <Image height={item.height} width={item.width} key={item.id} src={item.url} alt={item.id} priority />)
     }
    </div>
  );
};

export default OtherImg;
