import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useContext } from "react";
import { CartContext } from "../pages/CartContext";
function Product(props){
   const[isAdding,setIsAdding]=useState(false);
   const {cart,setCart}=useContext(CartContext);
   const addToCart =(event,props)=>{
      event.preventDefault();
      // console.log("jmk");
      // console.log(props);
      let _cart ={...cart};
      if(!_cart.items){
         _cart.items = {}
      }  
      if(_cart.items[props.id]){
         _cart.items[props.id]+=1;
      }
      else{
         _cart.items[props.id]=1;
      }
      if(!_cart.totalItems){
         _cart.totalItems=0;
      }
      _cart.totalItems+=1;
      setCart(_cart);
      setIsAdding(true);
      setTimeout(() =>{
         
         setIsAdding(false);
      },400)
   }
   return(
      <Link to={`/products/${props.id}`}>
   <div>
      <img src={props.img}></img>
     <div className="text-center">
     <h2 className="text-lg font-bold py-2">{props.name}</h2>
      <span className="bg-gray-200 py-1 rounded-full text-sm px-4">{props.size} </span>
     </div>
      <div className="flex justify-between items-center mt-4">
         <span>₹{props.price}</span>
         <button onClick={(e)=>{addToCart(e,props)}} className={` ${isAdding ? "bg-green-500" : "bg-yellow-500"}  py-1 px-4 rounded-full font-bold`}>Add{isAdding?"ed":null}</button>
      </div>
   </div>
      </Link>
   
   
   )
}
export default Product