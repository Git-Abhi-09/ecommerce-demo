import { useRouter } from "next/router";
import { useState ,useEffect} from "react";
import SingleCard from "./SingleCard";
import axios from "axios";

const productNo = () => {
    const router = useRouter();
    const productNum = router.query.productNo;

    let [intity , setintity] = useState();
    let apiUrl = `https://fakestoreapi.com/products/${productNum}`;
    let data;
    async function pullapi(){
      const resData = await axios.get(apiUrl);
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
    <>
      {intity}
    </>
  )
}

export default productNo;
