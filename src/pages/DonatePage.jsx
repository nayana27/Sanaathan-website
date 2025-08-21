import React from "react";

function DonatePage() {
  return (
    <div className="container my-5 text-center">
      <h1>Donate to Sanaathan Jeevan Trust</h1>
      <p>Your support helps us care for cows, heal communities, preserve sacred knowledge, and serve the needy.</p>
      <h3>How Your Donation Helps</h3>
      <ul className="list-unstyled">
        <li>• Feeding and protecting cows at our Gosala</li>
        <li>• Organising free health camps and medicines</li>
        <li>• Serving healthy community meals</li>
        <li>• Preserving ancient palm leaf manuscripts</li>
      </ul>
      <p>Choose a secure payment method below:</p>
      <button className="btn btn-success">Donate with Razorpay</button>
      <p className="mt-4">Thank you for your generosity!</p>
    </div>
  );
}

export default DonatePage;
