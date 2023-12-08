
import { useState,useEffect } from "react";
import ProductCard from "./ProductCard";

const Jewerly = ({ products, addToCart }) => {

  const jewerly = products.filter((product) => product.category === "jewelery")

  const [filterOption, setFilterOption] = useState("default");
  const [sortedProducts, setSortedProducts] = useState(jewerly)
  
  
  const handleDropdownChange = (event) => {
    setFilterOption(event.target.value);
  };

  useEffect(() => {

    const sortArray = () => {
      if(filterOption === "default"){
        setSortedProducts(jewerly)
      } else if(filterOption === 'lower'){
        const arrToPass = jewerly.slice().sort((a, b) => a.price - b.price);
        setSortedProducts(arrToPass)
      }
      else if(filterOption === 'higher'){
        const arrToPass = jewerly.slice().sort((a, b) => b.price - a.price);
        setSortedProducts(arrToPass)
      }
      else{
        setSortedProducts(jewerly)
      }
    }

    sortArray()

  },[filterOption,products]);


  return (
    <main className="all-products-contianer">
      <div className="products-title-sorting"> 
        <h2>Jewerly</h2>
        <div className="dropdown-container">
          <p className="sort-by-p">Sort by:</p>
          <select className="dropdown-for-items" value={filterOption} onChange={handleDropdownChange}>
               <option value="default">Default</option>
              <option value="lower">Lower to higher price</option>
              <option value="higher">Higher to lower price</option>
          </select>
        </div>
      </div>
      <div className="show-products-flex-container">
      {sortedProducts.map((product, index) => (
                    <ProductCard product={product} key={index} addToMyCart={addToCart} filterOption={filterOption}/>
                ))}
      </div>
    </main>
  )
}

export default Jewerly