import React from "react";

const Checkout = () => {
  return (
    <div className="formWrapper">
      <form className="form personalForm">
        <label htmlFor="fname">First name</label>
        <input id="fname" type="text" />
        <label htmlFor="lname">Last name</label>
        <input id="lname" type="text" />
        <label htmlFor="address">Address</label>
        <input id="address" type="text" />
        <label htmlFor="zip">Zip code</label>
        <input id="zip" type="text" />
        <label htmlFor="email">Email</label>
        <input id="email" type="email" />

        <label htmlFor="phone">Phone</label>
        <input id="phone" type="tel" />
      </form>

      <form className="form billingForm">
        <label htmlFor="card">Card number</label>
        <input id="card" type="text" maxLength={16} />
        <div className="detailWrapper">
          <div className="exp">
            <label htmlFor="exp">Expiration date</label>
            <div className="details">
              <input id="exp" type="text" maxLength={2} placeholder="MM" />
              <span> / </span>
              <input id="exp" type="text" maxLength={2} placeholder="YY" />
            </div>
          </div>

          <div className="cvc">
            <label htmlFor="cvc">CVC</label>
            <div>
              <input id="cvc" type="text" maxLength={3} placeholder="CVC" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
