import data from "../components/Data"
import React from "react";
import { useParams ,useNavigate } from "react-router-dom";
import { useEffect , useState } from "react";
function SingleProduct(){
   const[product,setProducts]=useState({});
   const params=useParams();
   const bj = data[params._id - 1];
   // console.log("jai mahakaal");
   // console.log(bj);

   // console.log("jai mahakaal");
   // console.log(product);
   
   
   // setProducts(bj)
   const navigate = useNavigate();
  useEffect(()=>{

   setProducts(bj);
},[]);
// console.log("jai mahakaal");
console.log(product);
   return (
      <div className=" container mx-auto mt-12 ">
         <button className="mb-12 font-bold ml-10" onClick={()=>{navigate('/products')}}>Back</button>
         <div className="flex">
            <img style={{height:"210px"}} src={product.img} alt="none"></img>
            <div className="ml-17">
               <h1 className="text-xl font-bold">{product.Name}</h1>
               <div className="text-md">{product.size}</div>
               <div className="font-bold mt-2">{product.price}</div>
               <button className="bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4">Add To Cart</button>
            </div>
         </div>
      </div>
   )
}
export default SingleProduct