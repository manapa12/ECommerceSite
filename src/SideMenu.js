import { Link } from "react-router-dom";

const SideMenu = ( {setMenu} ) => {
  return (
    <div className="side-menu-contianer">
        <ul className="side-menu-ul">
            <Link onClick={setMenu} className="nav-link" to="/"><li>Home</li></Link>
            <Link onClick={setMenu} className="nav-link"  to="/Clothing"><li>Clothing</li></Link>
            <Link onClick={setMenu} className="nav-link"  to="/Jewerly"><li>Jewerly</li></Link>
            <Link onClick={setMenu} className="nav-link"  to="/Electronics"><li>Electronics</li></Link>
        </ul>
    </div>
  )
}

export default SideMenu
