import Products from "../components/Products"
function Home(){
   const imgStyle ={
      height :"350px",
      borderRadius:"30px"
   }
   const cStyle ={
      marginLeft:"250px",
      marginTop:"100px",
      // fontSize:"larger"
   }
 
   return(
      <>
         
      <div className="hero py-16 ml-7">
            <div className="container mx-auto flex item-center justify-between">
               <div style={cStyle} className="w-1/2 mr-7">
                  <h6 className='text-lg'><em>Are you Hungry?</em></h6>
                  <h1 className='text-3xl font-bold'>Don't Wait!</h1>
                  <button className="px-6 py-2 rounded-full text-white font-bold mt-4 bg-yellow-500 hover:bg-yellow-600">Order Now</button>
               </div>
               <div className="w-1/2">
                  <img style={imgStyle} className="w-4/5" src="https://img.freepik.com/free-vector/colorful-round-tasty-pizza_1284-10219.jpg?w=2000" alt='pizza'></img>
               </div>
            </div>
      </div>
      <div className="pb-24">
         <Products />
      </div>
      </>
   )
}
export default Home