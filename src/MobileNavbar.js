import React from 'react'
import SideMenu from './SideMenu';
import { Link } from 'react-router-dom';

const MobileNavbar = ({ cart, setSideMenu, menu }) => {
  return (
    <div className="mobile-nav-container">
                <div className="mobile-nav-1">
                    <span className="material-symbols-outlined" onClick={setSideMenu}>
                        menu
                    </span>
                    {menu && <SideMenu setMenu={setSideMenu}/>}
                </div>
                <div className="mobile-nav-2">
                    <h6>pulseBuy</h6>
                </div>
                <div className="mobile-nav-3">
                    <Link className="cart-logo" to="/Checkout"><span className="material-symbols-outlined">
                            shopping_cart
                        </span></Link>
                        {cart.length > 0 && <div className="number-in-cart-container">
                        <p className="number-in-cart">{cart.length}</p>
                    </div> }
                </div>
            </div>
  )
}

export default MobileNavbar