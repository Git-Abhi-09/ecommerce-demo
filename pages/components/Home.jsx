import { useState , useEffect } from "react"
import React from 'react'
import Card from "./Card";
import Navbar from "./Navbar";


const Home = () => {
 
  const [intity , setintity] = useState();
  const [total,setTotal]=useState(0);
  const apiUrl = `https://fakestoreapi.com/products`;
  let data=[];

  const [pageData, setPageData] = useState({ currPage: 0, nextPage: 5 });

  async function pullapi(){
    const res = await fetch(apiUrl);
    const resData = await res.json();
    setTotal(resData.length/5)

   
    data = resData.slice(pageData.currPage ,pageData.nextPage).map((products)=>{
      return(
        <>
        <div>
        <Card
          id={products.id}
          title={products.title}
          image={products.image}
          price={products.price}
        />
        </div>
        </>
      );
    });
    setintity(data);
  }

  const buttons = Array.from({ length:total}).map((_, currIndex) => (
    <button key={currIndex+1} onClick={()=>{
      setPageData({currPage:(currIndex+1)*5-5,nextPage:(currIndex+1)*5})
    }}>
      {`Page No ${currIndex+1}`}
    </button>
  )); 


  useEffect(()=>{
    pullapi();
  },[pageData.currPage, pageData.nextPage ]);

  return (
    <>
    <Navbar/>
    <div className="main-div">
      {intity}
    </div>
    {buttons}
    </>
  )
}
export default Home;



