
const PaymentInfo = () => {
  return (
    <section className="payment-details">
        <h6 className="title-for-checkout-grid">
            PAYMENT DETAILS
        </h6>
        <form className="form-for-payment">
            <div className="first-label-pay">
                <label className="label-for-payment" htmlFor="card">Credit Card</label>
                <input type="radio" name="paymentType" id="card" />
            </div>
            <div className="second-label-pay">
                <label className="label-for-payment" id="delivery-id" htmlFor="cash">Cash on Delivery</label>
                <input type="radio" name="paymentType" id="cash" />
            </div>
            <div className="third-label-pay">
                <label className="label-for-payment" htmlFor="CCNumber">Credit Card Number:</label>
                <input type="text" name="CreditNumber" id="CCNumber" placeholder="XXXX-XXXX-XXXX-XXXX"/>
            </div>
            <div className="four-label-pay">
                <label className="label-for-payment" htmlFor="CCName">Name on Credit Card:</label>
                <input type="text" name="CreditName" id="CCName" />
            </div>
        </form>
    </section>
  )
}

export default PaymentInfo