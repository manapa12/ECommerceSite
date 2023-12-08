import { useHistory } from "react-router-dom";
import BillingInfo from "./BillingInfo";
import ShippingInfo from "./ShippingInfo";
import  PaymentInfo  from "./PaymentInfo";

const Checkout = ({ cart }) => {
  const history = useHistory()

  const goBackComponent = () => {
    history.goBack();
   }

  return (
    <main className="main-checkout-container">
       <p onClick={goBackComponent} className="go-back">Go back</p>
       <div className="checkout-grid-container">
          <div className="checkout-personal-info">
            <h2>CHECKOUT</h2>
            <div className="billing-container">
              <BillingInfo />
            </div>
            <div className="shipping-info-container">
              <ShippingInfo />
            </div>
            <div className="payment-info-container">
              <PaymentInfo />
            </div>
          </div>
          <div className="checkout-all-products"></div>
       </div>
    </main>
  )
}

export default Checkout