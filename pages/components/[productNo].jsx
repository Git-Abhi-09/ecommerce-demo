import { useRouter } from "next/router";
import React from "react";
import SingleCard from "./SingleCard";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Navbar from "./Navbar";

const productNo = () => {
  const param = useParams();
  const [entity, setEntity] = useState(null);
  const apiUrl = `https://fakestoreapi.com/products/${param?.productNo}`;

  async function getProductData() {
    try {
      const res = await fetch(apiUrl);
      setEntity(await res.json());
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (param?.productNo) {
      getProductData();
    }
  }, [param]);

  return (
    <>
    <Navbar/>

   <div className="singleCard">
      {entity && (
        <SingleCard
          title={entity.title}
          image={entity.image}
          price={entity.price}
          description={entity.description}
          category={entity.category}
          rating={entity.rating.rate}
          count={entity.rating.count}
        />
      )}
    </div>
    </>

  );
};

export default productNo;
