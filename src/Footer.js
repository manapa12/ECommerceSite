import { Link } from "react-router-dom";
/*import facebookIcon from './logos/facebookIcon.svg';
import xLogo from './logos/xIcon.svg';
import igIcon from './logos/igIcon.svg'*/

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-flex-container">
          <div className="footer-container-one">
            <h5>pulseBuy</h5>
            <div className="footer-nav-container">
              <Link className="link-of-footer" to='/'>Home</Link>
              <Link className="link-of-footer" to='/Clothing'>Clothing</Link>
              <Link className="link-of-footer" to='/Jewerly'>Jewerly</Link>
              <Link className="link-of-footer" to='/Electronics'>Electronics</Link>
            </div>
          </div>
          <div className="footer-container-two">
            <p>PulseBuy is an e-commerce site to fullfill all your shopping needs. We´re a small team of selllers specialist who are devoted in helping you get the most out of your shopping plans. Come and visit our store, from Monday through Friday.</p>
          </div>
          <div className="footer-container-three">
            <div className="copy-container">
                <p>Copyright 2023. All Rights Reserved.</p>
            </div>
            <div className="icons-container">
                {/*<img className="footer-logo-socials" src={facebookIcon} alt="" />
                <img className="footer-logo-socials" src={igIcon} alt="" />
                <img className="footer-logo-socials" src={xLogo} alt="" />*/}
            </div>
          </div>
      </div>
    </footer>
  )
}

export default Footer