import { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";

const ProductInfo = ({ cart, addToCart }) => {
  const location = useLocation()
  const history = useHistory();

  const { product } = location.state;
  const [value, setValue] = useState(0);
  
  const increment = () => {
    setValue(prevValue => prevValue + 1);
  };

  const decrement = () => {
    if (value > 0) {
      setValue(prevValue => prevValue - 1);
    }
  };

 const handleClick = () => {
  let copyOfCart = []
  if(value > 0){
    for(let i = 0; i < value; i++){
      copyOfCart.push(product)
    }
  }else{
    alert("NO PRODUCTS ON CART")
  }
  copyOfCart.forEach(prod => addToCart(prod))
 }
 
 const goBackComponent = () => {
  history.goBack();
 }

  return (
    <main className="product-information-container">
      <p onClick={goBackComponent} className="go-back">Go back</p>
      <div className="product-information-flex">
          <div className="img-on-info-container">
            <img className="img-on-information" src={product.image} alt="" />
          </div>
          <div className="info-of-product-and-price">
              <h1>{product.title}</h1>
              <p>{product.description}</p>
              <h4>Price: <strong className="color-for-price">${product.price}</strong></h4>
              <div className="quantity-flex">
                  <button onClick={handleClick} className="info-add-to-cart">ADD TO CART</button>
                  <div className="decrement-button-container">
                      <button onClick={decrement}>-</button>
                      <span id="value">{value}</span>
                      <button onClick={increment}>+</button>
                  </div>
              </div>
          </div>
          
      </div>
      
    </main>
  )
}

export default ProductInfo