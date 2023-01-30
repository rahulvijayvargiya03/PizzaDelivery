import React from 'react'
import { useContext,useEffect ,useState} from 'react'
import { CartContext } from './CartContext'
import data from '../components/Data'
const Cart = () => {
  let totalSum=0;
  const {cart ,setCart} =useContext(CartContext);
  const[products,setProducts]=useState([]);
  // console.log("mk");
  // console.log(cart);
    useEffect(()=>{
        if(!cart.items){
          return ;
        }
      //  console.log("prod",Object.keys(cart.items));
      setProducts(Object.keys(cart.items));
        
        
    },[cart])
    const getName =(productId)=>{
      return data[productId-1].Name;
    }
    const getQty =(productId)=>{
      return cart.items[productId];
    }
    const getPrc =(productId)=>{
     const sum = data[productId-1].price*getQty(productId);
     totalSum+=sum;
     return sum;
    }
    const getImg =(productId)=>{
      console.log(cart.items)
      return data[productId-1].img;
    }
    const increment =(productId)=>{
      const oldQty = cart.items[productId];
      const _cart = {...cart};
      _cart.items[productId]=1+ oldQty;
      _cart.totalItems+=1;
      setCart(_cart); 
    }
    const decrement =(productId)=>{
      const oldQty = cart.items[productId];
      if(oldQty===1){ 
        return;
      }
      const _cart = {...cart};
      _cart.items[productId]= oldQty-1;
      _cart.totalItems-=1;
      setCart(_cart); 
    }
    const handleDelete =(productId)=>{
      const _cart ={...cart};
      const qty = _cart.items[productId];
      delete _cart.items[productId];
      _cart.totalItems-=qty;
      setCart(_cart); 
    }
    const handleOrdernow=()=>{
      setProducts([]);
      setCart({});
      window.alert("Order Placed Succesfully");
    }
  return (
    products.length ?

    <div className='container mx-auto lg:w-1/2 w-full pb-24'>
        <h1 className='my-12 font-bold'>Class Items</h1>
        <ul>
        {
          products.map(product => {
            return(
              <li>
            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <img style={{height: "50px"}} src={getImg(product)} alt='pixxs'></img>
                <span className='font-bold ml-4 w-48'>{getName(product)}</span>
              </div>
              <div>
                <button onClick={() => {decrement(product)}}  className='bg-yellow-500 px-4 py-2 rounded-full leading-none'>-</button>
                <b className='px-3'>{getQty(product)}</b>
                <button onClick={() => {increment(product)}} className='bg-yellow-500 px-4 py-2 rounded-full leading-none'>+</button>
              </div>
              <span>₹ {getPrc(product)}</span>
              <button onClick={() =>{handleDelete(product)}} className='bg-red-500 px-4 py-2 rounded-full leading-none text-white'>Delete</button>
            </div>
          </li>
            )
          })
        }
        </ul>
        <hr className='my-8' />
        <div className='text-right'>
          <b>Grand total</b> : ₹{totalSum}
        </div>
        <div className='text-right mt-6'>
        <button onClick={handleOrdernow} className='bg-yellow-500 px-4 py-2 rounded-full leading-none '>Order Now</button> 
        </div>
     </div>
     :
     <img className='mx-auto w-1/1.5 ' src="http://hsnbazar.com/images/empty-cart.png" alt='empty cart' />
  )
}

export default Cart
