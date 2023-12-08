
import React, { useRef } from 'react';
import HomeProductCard from "./HomeProductCard";


const ProductsScroll = ({ allProducts, addToScrollCart }) => {
    
    const scrollRef = useRef(null);

    const scroll = (scrollOffset) => {
        if (scrollRef.current) {
          scrollRef.current.scrollLeft += scrollOffset; // Adjust the scrollLeft property
        }
      };

    return (
        <div className="flex-for-buttons">
            <button className="scroll-button-left scroll-button" onClick={() => scroll(-200)}>&lt;</button>
            <div className="flex-scroll-products" ref={scrollRef}>
                {allProducts.map((product, index) => (
                    <HomeProductCard product={product} key={index} addToMyCart={addToScrollCart}/>
                ))}
            </div>
            <button className="scroll-button-right scroll-button" onClick={() => scroll(200)}>&gt;</button>
     </div>
    );
}

export default ProductsScroll


/**<div className="flex-scroll-products">
        {allProducts.map((product) => (
            <ProductCard product={product} />
        ))}
     </div> */