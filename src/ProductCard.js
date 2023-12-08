import { useHistory } from "react-router-dom";

const ProductCard = ({ product, addToMyCart }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push({
      pathname: `/ProductInfo/${product.id}`,
      state: { product: product }
    });
  };

  return (
    <div className="product-card">
      <div className="products-image">
        <img src={product.image} alt="Product Image" onClick={handleClick} />
      </div>
      <div className="product-details">
        <h2 className="product-name" onClick={handleClick}>{product.title}</h2>
        <p className="product-price">${product.price}</p>
        <button className="add-to-cart-btn" onClick={() => addToMyCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};



export default ProductCard


