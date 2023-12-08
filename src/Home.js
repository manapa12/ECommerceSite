import Header from "./Header"
import { ShopType } from "./ShopType"
import ProductsScroll from "./ProductsScroll"

const Home = ({ products, addToCart }) => {
  return (
    <>
      <Header products={products} />
      <main className="home-container-main">
        <section className="type-of-item-container">
          <ShopType />
        </section>
        <section className="scrollable-products-container">
          <ProductsScroll  
            allProducts={products}
            addToScrollCart={addToCart}
          />
        </section>
     </main> 
    </>
    
  )
}

export default Home