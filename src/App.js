import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Clothing from './Clothing';
import Jewerly from './Jewerly';
import Electronics from './Electronics';
import Footer from './Footer';
import Checkout from './Checkout';
import ProductInfo from './ProductInfo';

function App() {

  const [isMobile,setIsMobile] = useState(false);
  const [cart,setCart] = useState([]);
  const [products, setProducts] = useState([])

  useEffect(() => {
    const checkWindowSize = () => {
      setIsMobile(window.innerWidth < 751);
    };

    checkWindowSize();

    window.addEventListener('resize', checkWindowSize);

    return () => {
      window.removeEventListener('resize', checkWindowSize);
    };
  }, []);

  useEffect(() =>{
    const fetchProducts = async () => {
      const data = await fetch("https://fakestoreapi.com/products");
      const allProducts = await data.json();
      setProducts(allProducts);

    }

    fetchProducts()

  },[])


  
  const addToCart = (product) => {
    const preCart = [product];
    setCart(prevItems => [...prevItems,preCart])
  }
  
  return (
    <div className="App">
      <Navbar 
        isMobile={isMobile}
        cart={cart}
        />
      <Switch />

        <Route exact path="/" 
                render={(props) => <Home {...props} products={products} addToCart={addToCart}/>} />
        <Route exact path="/Clothing"
                render={(props) => <Clothing {...props} products={products} addToCart={addToCart} /> }  />
        <Route exact path="/Jewerly"
                render={(props) => <Jewerly {...props} products={products} addToCart={addToCart} /> } />
        <Route exact path="/Electronics"
              render={(props) => <Electronics {...props} products={products} addToCart={addToCart} /> } />
        <Route exact path="/Checkout"
              render={(props) =>  <Checkout {...props} 
              cart={cart} />
  }/>
        <Route exact path="/ProductInfo/:id"
               render={(props) => (<ProductInfo {...props} cart={cart} addToCart={addToCart}/>
  )}
/>

      <Switch />
      <Footer />
    </div>
  );
}

export default App;
