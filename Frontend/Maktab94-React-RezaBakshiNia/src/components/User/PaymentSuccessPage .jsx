const PaymentSuccessPage = () => {

  console.log(JSON.parse(localStorage.getItem("finalPurchase2")));
  

  const generateIssueTracking = () => {
    const min = 100000;
    const max = 999999;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
  };
  return (
    <div className="Payment-Success-Page">
      <div className="Payment-Success-Page-wrapper">
        <h2>پرداخت با موفقیت انجام شد</h2>
        <p> از خرید شما متشکریم.</p>
        <div className="issue-tracking">
          <p>شماره پیگیری:</p>
          <p>{generateIssueTracking()}</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
