
import { useRouter } from "next/router";
import React from 'react'
import SingleCard from './SingleCard';
import { useState , useEffect} from 'react';

const productNo = () => {
      const router = useRouter();
      const productNum = router.query.productNo;

    let [intity , setintity] = useState();
    let apiUrl = `https://fakestoreapi.com/products/${productNum}`;
    let data;
    async function pullapi(){
      const resData = await fetch(apiUrl);
      // const resData = await res.json();
      console.log(resData);
      data =
          <SingleCard
            title={resData.title}
            image={resData.image}
            price={resData.price}
            description={resData.description}
            category={resData.category}
            // rating={resData.rating.rate}
            // count={resData.rating.count}

          />
      setintity(data);
    }
  
    useEffect(()=>{
      pullapi();
    },[]);
  return (
    <div>
      {intity}
    </div>
  )
}

export default productNo;

