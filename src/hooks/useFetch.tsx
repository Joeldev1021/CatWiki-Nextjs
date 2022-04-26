import { BreedImg } from "interface";
import { useEffect, useState } from "react";

interface Props {
    id: string;
}

export default function useFetch  ({id}: Props) {
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

  return {imgs};
}