import React from 'react'
import { useParams } from 'react-router-dom';
import SingleCard from './SingleCard';
import { useState , useEffect} from 'react';

const SingleProduct = () => {
    const params = useParams();
    let [intity , setintity] = useState();
    let apiUrl = `https://fakestoreapi.com/products/${params.id}`;
    let data;
    async function pullapi(){
      const res = await fetch(apiUrl);
      const resData = await res.json();
      data =
          <SingleCard
            title={resData.title}
            image={resData.image}
            price={resData.price}
            description={resData.description}
            category={resData.category}
            rating={resData.rating.rate}
            count={resData.rating.count}

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

export default SingleProduct;

