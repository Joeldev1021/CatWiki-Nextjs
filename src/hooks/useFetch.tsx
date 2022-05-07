import { BreedImg } from "interface";
import { useEffect, useState } from "react";
import { config } from "utils";

interface Props {
    id?: string | undefined;
    url?: string | undefined;
}

/**
 * It's a custom hook that fetches data from an API and returns the data as an object.
 * @param {Props}  - Props = {
 * @returns An object with a data property.
 */

export default function useFetch  ({id, url}: Props) {
  const URL = url? url : `https://api.thecatapi.com/v1/images/search?breed_id=${id}&limit=9`;
  const [data, setData] = useState<BreedImg[]>([]);
    useEffect(() => {
    fetch(URL, {
      headers:config.header 
    })
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [id]);

  return {data};
}