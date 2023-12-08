import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const Clothing = ({ products, addToCart }) => {

  const clothing = products.filter((product) => product.category === "men's clothing" || product.category === "women's clothing")

  const [filterOption, setFilterOption] = useState("default");
  const [sortedProducts, setSortedProducts] = useState(clothing)


  const handleDropdownChange = (event) => {
    setFilterOption(event.target.value);
  };

  useEffect(() => {

    const sortArray = () => {
      if(filterOption === "default"){
        setSortedProducts(clothing)
      } else if(filterOption === 'lower'){
        const arrToPass = clothing.slice().sort((a, b) => a.price - b.price);
        setSortedProducts(arrToPass)
      }
      else if(filterOption === 'higher'){
        const arrToPass = clothing.slice().sort((a, b) => b.price - a.price);
        setSortedProducts(arrToPass)
      }
      else if(filterOption === 'man'){
        const arrToPass = clothing.filter(item => item.category === "men's clothing")
        setSortedProducts(arrToPass)
      }
      else if(filterOption === 'women'){
        const arrToPass = clothing.filter(item => item.category === "women's clothing")
        setSortedProducts(arrToPass)
      }else{
        setSortedProducts(clothing)
      }
    }

    sortArray()

  },[filterOption,products]);

  

  return (
    <main className="all-products-contianer">
      <div className="products-title-sorting"> 
        <h2>Clothing</h2>
        <div className="dropdown-container">
          <p className="sort-by-p">Sort by:</p>
          <select className="dropdown-for-items" value={filterOption} onChange={handleDropdownChange}>
               <option value="default">Default</option>
              <option value="lower">Lower to higher price</option>
              <option value="higher">Higher to lower price</option>
              <option value="women">Woman clothing</option>
              <option value="man">Man clothing</option>
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

export default Clothing