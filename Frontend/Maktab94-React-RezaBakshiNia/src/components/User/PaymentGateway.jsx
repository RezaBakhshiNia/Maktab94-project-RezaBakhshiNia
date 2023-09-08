import { useState } from "react";
import { generatePath, useNavigate } from "react-router-dom";

const PaymentGateway = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleExpiryDateChange = (e) => {
    setExpiryDate(e.target.value);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };

  const generatePassword = () => {
    const min = 100000; // Minimum 8-digit number (inclusive)
    const max = 999999; // Maximum 8-digit number (inclusive)

    // Generate a random number between min and max
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    setPassword(randomNumber);
    alert("رمز دوم: " + randomNumber);
    return randomNumber;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/Payment-Success-Page");

    console.log("Payment submitted:", cardNumber, expiryDate, cvv);

    // Reset form fields
    setCardNumber("");
    setExpiryDate("");
    setCvv("");
  };

  const handlePaymentCanceling = () => {
    navigate("/Cancel-Payment");
  };

  return (
    <div className="payment-gateway">
      <h2 className="payment-gateway__title">درگاه پرداخت</h2>
      <form className="payment-gateway__form" onSubmit={handleSubmit}>
        <label htmlFor="cardNumber" className="payment-gateway__label">
          شماره کارت
        </label>
        <input
          type="text"
          id="cardNumber"
          className="payment-gateway__input"
          value={cardNumber}
          onChange={handleCardNumberChange}
        />

        <label htmlFor="expiryDate" className="payment-gateway__label">
          تاریخ انقضاء
        </label>
        <input
          type="text"
          id="expiryDate"
          className="payment-gateway__input"
          value={expiryDate}
          onChange={handleExpiryDateChange}
        />

        <label htmlFor="cvv" className="payment-gateway__label">
          CVV2
        </label>
        <input
          type="text"
          id="cvv"
          className="payment-gateway__input"
          value={cvv}
          onChange={handleCvvChange}
        />
        <div className="isert-pasword">
          <label htmlFor="cvv" className="payment-gateway__label">
            رمز:
          </label>{" "}
          <div className="">
            <input
              type="passwrd"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="payment-gateway__input"
              placeholder="رمز را وارد کنید."
            />
            <span onClick={generatePassword}>درخواست رمز دوم</span>
          </div>
        </div>

        <button type="submit" className="payment-gateway__button">
          پرداخت
        </button>
        <button
          className="payment-gateway__button"
          style={{ backgroundColor: "orangered" }}
          onClick={handlePaymentCanceling}
        >
          لغو پرداخت
        </button>
      </form>
    </div>
  );
};

export default PaymentGateway;
