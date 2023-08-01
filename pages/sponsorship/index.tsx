import React, { useState } from "react";
import { useRouter } from "next/router";

const Sponsorship = () => {
  const [amount, setAmount] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [anonymousDonation, setAnonymousDonation] = useState(false);
  const router = useRouter();

  // Handle donation submission
  const handleDonate = () => {
    // Implement the logic to submit the donation data to your backend or perform other actions here
    // You can access 'amount', 'selectedProduct', and 'anonymousDonation' in this function
    // For example:
    const donation = {
      amount,
      selectedProduct,
      anonymousDonation,
    };
    const queryString = encodeURIComponent(JSON.stringify(donation));
    router.push(`/sponsorship/funding?data=${queryString}`);
    console.log(donation);
  };

  return (
    <div className="sponsorship" >
        <h1>Endless Sponsorships</h1>
      <h2>Support a Fundraiser</h2>
      <p>Enter the amount you want to donate:</p>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(parseFloat(e.target.value))}
      />

      <p>Pick which product you want to fund:</p>
      <select
        value={selectedProduct}
        onChange={(e) => setSelectedProduct(e.target.value)}
      >
        <option value="">Select a product</option>
        <option value="product1">Product 1</option>
        <option value="product2">Product 2</option>
        <option value="product3">Product 3</option>
        {/* Add more options for products */}
      </select>

      <div>
        <input
          type="checkbox"
          checked={anonymousDonation}
          onChange={(e) => setAnonymousDonation(e.target.checked)}
        />
        <label>Donate Anonymously</label>
      </div>

      <button onClick={handleDonate}>Donate</button>
    </div>
  );
};

export default Sponsorship;
