import React, { useState } from "react";
import btnImage from "../../assets/dwnld.gif";
import btnDownloadImage from "../../assets/dwnld.png";

const Export = () => {
  const [btnClicked, setBtnClicked] = useState(false);
  const dataKey = "payoutNews";

  const handleExportCSV = () => {
    const localStorageData = JSON.parse(localStorage.getItem(dataKey)) || [];
    const filteredData = localStorageData.filter((item) => parseFloat(item.payout) > 0);

    if (filteredData.length === 0) {
      alert("No data to export!");
      return;
    }

    // Generate CSV content
    const csvRows = [];
    csvRows.push(["Title", "Author", "Payout"].join(","));
    filteredData.forEach((item) => {
      const row = [item.title || "", item.author || "", item.payout || ""].join(",");
      csvRows.push(row);
    });

    // Create and download the CSV file
    const csvString = csvRows.join("\n");
    const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "exported_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Clear local storage
    localStorage.removeItem(dataKey);

    // Set button clicked state
    setBtnClicked(true);
  };

  return (
    <div className="w-full  top-56 relative left-0 ">
      <div className="flex flex-col justify-center items-center">
        <span className="text-lg font-semibold -mb-10 z-50">Download payouts data </span>
        {btnClicked?(<img src={btnImage} alt="Downloding" />):(<img onClick={handleExportCSV} src={btnDownloadImage} alt="click to download" />)}
      </div>
    </div>
  );
};

export default Export;
