import {BrowserRouter , Routes ,Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navigation from './components/Navigation';
import Products from './components/Products';
import Cart from './pages/Cart';
import SingleProduct from './pages/SingleProduct';
import { CartContext } from './pages/CartContext';
import { useState, useEffect } from 'react';

function App(){
   const[cart,setCart] = useState({});
   useEffect(()=>{
      const cart =window.localStorage.getItem('cart');
      setCart(JSON.parse(cart));
   },[]);
   useEffect(()=>{
      window.localStorage.setItem('cart',JSON.stringify(cart));
   },[cart]);


   return (
      <BrowserRouter>
      <CartContext.Provider value={{cart,setCart}}>
     <Navigation></Navigation>
      
         <Routes>
            <Route path='/' element={<Home />}> </Route>
            <Route path='/about' element={<About />}> </Route>
            <Route path='/products' element={<Products />}> </Route>
            <Route path='/cart' element={<Cart />}> </Route>
            <Route path='/products/:_id' element={<SingleProduct />}> </Route>
         </Routes>
         </CartContext.Provider>
      </BrowserRouter>
   )

}
export default App