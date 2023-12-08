import React from 'react';
import { Link } from 'react-router-dom';

export const ShopType = () => {
  return (
    <>
        <div className='type-clothing type-container'>
            <div className='type-icon-container'>
                <span className="material-symbols-outlined">
                apparel
                </span>
            </div>
            <h6>Clothing</h6>
            <Link className="shop-type-link" to="/Clothing"><p>SHOP &gt;</p></Link>
        </div>
        <div className='type-jewerly type-container'>
            <div className='type-icon-container'>
                <span className="material-symbols-outlined" >
                watch
                </span>
              </div>
            <h6>Jewerly</h6>
            <Link to="/Jewerly" className="shop-type-link"><p>SHOP &gt;</p></Link>
        </div>
        <div className='type-electronics type-container'>
            <div className='type-icon-container'>
                <span className="material-symbols-outlined">
                devices
                </span>
              </div>
            <h6>Electronics</h6>
            <Link to="/Electronics" className="shop-type-link"><p>SHOP &gt;</p></Link>
        </div>
    </>

  )
}
