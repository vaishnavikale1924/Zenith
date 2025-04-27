import React from "react";
import "./PaymentMethods.css";

const paymentOptions = [
  {
    id: "1",
    method: "Google Pay (UPI)",
    details: "vaishnavi.kale@okaxis",
    icon: "/icon/gpay.png", // put in public/icons/
  },
  {
    id: "2",
    method: "HDFC Bank Debit Card",
    details: "**** **** **** 1234",
    icon: "/icon/card.png",
  },
  {
    id: "3",
    method: "Net Banking",
    details: "State Bank of India",
    icon: "/icon/netbanking.png",
  },
  {
    id: "4",
    method: "Cash on Delivery",
    details: "Pay with cash at delivery",
    icon: "/icon/cod.png",
  },
];

const PaymentMethods = () => {
  return (
    <div className="payment-container">
      <h2>Payment Methods</h2>
      {paymentOptions.map((option) => (
        <div className="payment-card" key={option.id}>
          <img src={option.icon} alt={option.method} className="payment-icon" />
          <div className="payment-details">
            <h4>{option.method}</h4>
            <p>{option.details}</p>
          </div>
          <button className="pay-btn">Select</button>
        </div>
      ))}
    </div>
  );
};

export default PaymentMethods;
