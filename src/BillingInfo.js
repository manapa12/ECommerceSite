

const BillingInfo = () => {
  return (
    <section className="billing-details">
        <h6 className="title-for-checkout-grid">
            BILLING DETAILS
        </h6>
        <form className="form-for-billing">
            <div className="first-label-bill">
                <label className="label-for-billing" htmlFor="name">Name:</label>
                <input type="text" name="fullName" id="name" />
            </div>
            <div className="second-label-bill">
                <label className="label-for-billing" htmlFor="email">Email Address:</label>
                <input type="text" name="EmailAddress" id="email" />
            </div>
            <div className="third-label-bill">
                <label className="label-for-billing" htmlFor="phone">Phone Number:</label>
                <input type="text" name="PhoneNumber" id="phone" />
            </div>
        </form>
    </section>
  )
}

export default BillingInfo