import React from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

const HomeProductCard = ({ product, addToMyCart }) => {

    const history = useHistory();

   const handleCLick = () => {
    history.push({
        pathname: `/ProductInfo/${product.id}`,
        state: { product: product }
    });
 }

  return (
    <div className="product-card-container">
        <div className="product-image">
            <img className="image-for-product" onClick={handleCLick} src={product.image} alt="" />
        </div>
        <div className="product-info-container">
            <div className="product-info">
                <p onClick={handleCLick} className="product-title">{product.title}</p>
                <div className="add-to-cart-container">
                    <p className="product-price">${product.price}</p>
                    <p onClick={() => addToMyCart(product)} className="add-to-cart">Add to cart</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeProductCard