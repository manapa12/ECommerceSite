

const ShippingInfo = () => {
  return (
    <section className="shipping-details">
        <h6 className="title-for-checkout-grid">
            SHIPPING DETAILS
        </h6>
        <form className="form-for-shipping">
            <div className="first-label-ship">
                <label className="label-for-shipping" htmlFor="address">Address:</label>
                <input type="text" name="address" id="address" />
            </div>
            <div className="second-label-ship">
                <label className="label-for-shipping" htmlFor="ZipCode">ZIP code:</label>
                <input type="text" name="ZIPcode" id="ZipCode" />
            </div>
            <div className="third-label-ship">
                <label className="label-for-shipping" htmlFor="city">City:</label>
                <input type="text" name="City" id="city" />
            </div>
            <div className="four-label-ship">
                <label className="label-for-shipping" htmlFor="country">Country:</label>
                <input type="text" name="country" id="country" />
            </div>
        </form>
    </section>
  )
}

export default ShippingInfo