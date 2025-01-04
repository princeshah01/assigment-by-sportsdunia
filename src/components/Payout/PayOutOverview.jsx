const PayOutOverview = ({ totalNewsWithPayout, totalPayout }) => {
    return (
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-light-fore rounded-lg shadow-md dark:bg-dark-back hover:opacity-70">
          <h2 className="text-lg font-semibold text-light-text dark:text-dark-text">
          Total news with Payouts
          </h2>
          <p className="text-2xl font-bold text-light-text dark:text-dark-text">
            {totalNewsWithPayout}
          </p>
        </div>
        <div className="p-4 bg-light-fore rounded-lg shadow-md dark:bg-dark-back hover:opacity-70">
          <h2 className="text-lg font-semibold text-light-text dark:text-dark-text">
            Total Payout Amount
          </h2>
          <p className="text-2xl font-bold text-light-text dark:text-dark-text">
          ₹{totalPayout}
          </p>
        </div>
      </div>
    );
  };
  
  export default PayOutOverview;
  