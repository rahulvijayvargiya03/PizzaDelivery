import Product from "./Product"
import data from "./Data"
import { CartContext } from "../pages/CartContext"
import { useContext } from "react"
function createProduct(element){
   return(
      <Product 
         id={element.id}
         key={element.id}
         name={element.Name}
         price={element.price}
         size={element.size}
         img={element.img}
      />
   )
}
function Products(){
   // const {name}=useContext(CartContext);
   const dStyle={
      marginLeft:"60px",
      marginRight:"60px"
   }
   return (
      <div className="container mx-auto pb-24  ">
         <h1 className="text-lg font-bold my-8 ml-12">Products</h1>
         <div style={dStyle} className="grid grid-cols-5 my-5 gap-20 ml-8"> 
               {data.map(createProduct)}
         </div>
      </div>
      

   )
}
export default Products