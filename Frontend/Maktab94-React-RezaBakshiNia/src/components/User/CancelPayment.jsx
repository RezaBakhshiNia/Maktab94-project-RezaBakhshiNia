const CancelPayment = () => {
  console.log(localStorage.getItem("finalPurchase2"));
  localStorage.removeItem("finalPurchase2");
  console.log(localStorage.getItem("finalPurchase2"));

  const generateIssueTracking = () => {
    const min = 100000; // Minimum 8-digit number (inclusive)
    const max = 999999; // Maximum 8-digit number (inclusive)

    // Generate a random number between min and max
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
  };
  return (
    <div className="cancel-payment">
      <div className="cancel-payment-message">
        <h2>پرداخت موفقیت آمیز نبود.</h2>
        <p>سفارش شما در انتظار پرداخت است.</p>
        <p>
          <span>شماره پیگیری:</span>
          <span>{generateIssueTracking()}</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default CancelPayment;
