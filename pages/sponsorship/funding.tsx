import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";

const Funding = () => {
  const router = useRouter();
  const data = router.query.data
    ? JSON.parse(decodeURIComponent(router.query.data))
    : null;

    const paymentAmount = data.amount
    // const [paymentAmount, setPaymentAmount] = useState("");
  const [dividedParts, setDividedParts] = useState([]);

  const handlePaymentChange = (event) => {
    setPaymentAmount(event.target.value);
  };

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const handleDividePayment = async () => {
    if (!isNaN(paymentAmount) && Number(paymentAmount) > 0) {
      const dividedAmount = parseFloat(paymentAmount) / 3;
      setDividedParts([dividedAmount, dividedAmount, dividedAmount]);
      console.log("connecting to revolut...")
      await sleep(5000)
      console.log("Connected to Revolut!")
      console.log(
        "Deposited amount:", paymentAmount
      );
      console.log("Deposited to:", data.selectedProduct)
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
          Payable amount:
          <h2>Product Name: {data.selectedProduct}</h2>
          <h3>${data.amount}</h3>
          {/* <input
            type="number"
            className="payment-input"
            value={paymentAmount}
            onChange={handlePaymentChange}
          /> */}
        </label>
        <button className="payment-button" onClick={handleDividePayment}>
          Pay
        </button>
      </div>
      </div>
  );
};

export default Funding;
