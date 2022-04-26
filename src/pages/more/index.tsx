import { useEffect, useState } from "react";

const More = () => {

  const [topResult, setTopResult] = useState<any[]>([]);
   
  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/breeds?limit=10&page=0', {
        headers: {
            "Content-Type": "application/json",
            "x-api-key": `${process.env.API_KEY}`,
        },
    })
    .then(res => res.json())
    .then(res => setTopResult(res));
  }, []);

  return ( 
    <div>
      {
        topResult.map((item: any, index:number) => <h1 key={item.id}>{index+1}-{item.name}</h1>) 
      }
    </div>
  );
};

export default More;
