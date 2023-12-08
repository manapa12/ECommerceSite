import { useEffect, useState } from "react"
import  SideMenu from "./SideMenu";
import { Link } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";

const Navbar = ({ isMobile, cart }) => {

  const [menu,setMenu] = useState(false);

    const setSideMenu = () => {
        setMenu(!menu);
    }

  return (
    <nav className='nav-container'>
        {!isMobile ? 
            <div className="flex-nav-container">
                <div className='nav-1'>
                    <h6>pulseBuy</h6>
                </div>
                <div className='nav-2'>
                    <Link className="nav-link" to="/"><p>Home</p></Link>
                    <Link className="nav-link"  to="/Clothing"><p>Clothing</p></Link>
                    <Link className="nav-link"  to="/Jewerly"><p>Jewerly</p></Link>
                    <Link className="nav-link"  to="/Electronics"><p>Electronics</p></Link>
                </div>
                <div className='nav-3'>
                   <Link className="cart-logo" to="/Checkout"><span className="material-symbols-outlined">
                        shopping_cart
                    </span></Link>
                    {cart.length > 0 && <div className="number-in-cart-container">
                        <p className="number-in-cart">{cart.length}</p>
                    </div> }
                </div>
            </div> :
            <MobileNavbar cart={cart} setSideMenu={setSideMenu} menu={menu}/>
    }
    </nav>
  )
}

export default Navbar


/**<span class="material-symbols-outlined">
menu
</span> */