// Payment.tsx
import React, { useState } from "react";
import { useRouter } from "next/router";


const Payment = () => {
  const [paymentAmount, setPaymentAmount] = useState("");
  const [dividedParts, setDividedParts] = useState([]);
  const router = useRouter();

  const data = router.query.data
    ? JSON.parse(decodeURIComponent(router.query.data))
    : null;

  const handlePaymentChange = (event) => {
    setPaymentAmount(event.target.value);
  };
 
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const handleDividePayment = async () => {
    if (!isNaN(data) && Number(data) > 0) {
      const dividedAmount = parseFloat(data) / 3;
      setDividedParts([dividedAmount, dividedAmount, dividedAmount]);
      console.log("connecting to revolut...")
      await sleep(5000)
      console.log("Connected to Revolut!")
      console.log(
        "Payment deposited to:",
        "Tax account: $",
        Math.floor(dividedAmount),
        "Seller's Portion: $",
        Math.floor(dividedAmount),
        "Endless Factory Account: $",
        Math.floor(dividedAmount)
      );
      router.push('/')
    } else {
      console.log(
        "Invalid payment amount. Please enter a valid number greater than 0."
      );
    }
  };

  return (
    <div className="payment-container">
      <h2 className="payment-heading">Payment via </h2>
      <img width='200px' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png" />
      <div className="payment-input-container">
        <label className="payment-label">
          <h3>
            You have to pay: {data}
          </h3>
        </label>
        <button className="payment-button" onClick={handleDividePayment}>
          Pay
        </button>
      </div>
    </div>
  );
};

export default Payment;
