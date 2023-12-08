import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';


const Header = ({ products }) => {

  const history = useHistory();
  const [product, setProduct] = useState(null); 

  useEffect(() => {
    
    const laptop = products.find(product => product.id === 13);
    if (laptop) {
      setProduct(laptop);
    }
  }, [products]);

  const handleClick = () => {
    if (product) {
      history.push({
        pathname: `/ProductInfo/${product.id}`,
        state: { product: product }
      });
    }
  };


  return (
    <header className="header-container">
        <div className="image-product-container">
          <div className="new-product-container">
                <h6 className="top-home-h6">NEW PRODUCT</h6>
                <h1 className="top-home-h1">ACER SB220Q LAPTOP</h1>
                <p className="top-home-p">Experience gaming like never before, with fast load times and high FPS in today's games.</p>
                <button onClick={handleClick} className="header-button">SEE PRODUCT</button>
            </div>
            <div className="image-top-container">
              <img className="img-top-home" src="https://png.pngtree.com/background/20230527/original/pngtree-neon-laptop-with-black-background-picture-image_2760719.jpg" alt="" />
            </div>
          </div>
      </header>
  )
}

export default Header