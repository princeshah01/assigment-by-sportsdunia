const OverviewBoxes = ({ totalNews, totalPayout }) => {
    return (
      <div className="grid md:grid-cols-2  gap-4">
        <div className="p-4 bg-light-fore rounded-lg shadow-md dark:bg-dark-back hover:opacity-70">
          <h2 className="text-lg font-semibold text-light-text dark:text-dark-text">
            Total News
          </h2>
          <p className="text-2xl font-bold text-light-text dark:text-dark-text">
            {totalNews}
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
  
  export default OverviewBoxes;
  