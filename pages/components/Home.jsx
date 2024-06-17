import { useState , useEffect } from "react"
import React from 'react'
import Card from "./Card";
import Navbar from "./Navbar";

const Home = () => {
  
  let [intity , setintity] = useState();
  let apiUrl = `https://fakestoreapi.com/products`;
  let data;
  async function pullapi(){
    const res = await fetch(apiUrl);
    const resData = await res.json();
    data = resData.map((products)=>{
      return(
        <Card
          id={products.id}
          title={products.title}
          image={products.image}
          price={products.price}
        />
      );
    });
    setintity(data);
  }

  useEffect(()=>{
    pullapi();
  },[]);

  return (
    <>
    <Navbar/>
    <div className="main-div">
      {intity}
    </div>
    </>
  )
}
export default Home;
