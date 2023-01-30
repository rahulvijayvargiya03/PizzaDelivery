import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../pages/CartContext"
function Navigation(){

   const cartStyle ={
      background:"#F59E0D",
      display:"flex",
      padding:"6px 12px",
      borderRadius:"50px"
   }
   const {cart}=useContext(CartContext);
   return (
      <>
     <nav className="container mx-auto flex items-center justify-between py-5">
     
         <Link to="/">
           <img className="ml-7" style ={{height:55}} src="https://img.freepik.com/free-vector/colorful-round-tasty-pizza_1284-10219.jpg?w=740&t=st=1671194786~exp=1671195386~hmac=0c388d0b753d57f3e90f9e1fbbc0277b22d6037509fcb6dd9eff800142f621a3" alt="logo"></img>
         </Link>
         <ul className="flex items-center">
            <li className="">
               <Link to="/">Home</Link>
            </li>
            <li className="ml-6">
               <Link to="/products">Products</Link>
            </li>
            <li className="ml-6 mr-6">
               <Link to="/cart">
                  <div style={cartStyle}>
                     <span>{cart.totalItems}</span>
                     <img className="ml-3" style ={{height:25}} src="https://cdn-icons-png.flaticon.com/512/711/711897.png" alt="cart"></img>
                  </div>
               </Link>
            </li>
         </ul>
     </nav>

      </>
   )
}
export default Navigation