import React, { useEffect, useState } from 'react';
import SearchBar from "../DashboardData/SearchBar";
import PayOutOverview from "./PayOutOverview";
import NewsTable from "../DashboardData/NewsTable"; 

const Payout = () => {
    const [payoutNews, setPayOutNews] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const localStorageData = JSON.parse(localStorage.getItem("payoutNews")) || [];
        const filteredData = localStorageData.filter((article) => article.payout > 0);
        setPayOutNews(filteredData);
    }, []); 
    const totalPayout = payoutNews.reduce((sum, article) => sum + (article.payout || 0), 0);

    const filteredNews = payoutNews.filter(
        (article) =>
            article.title &&
            article.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handlePayoutChange = (index, value) => {
        const updatedPayoutNews = [...payoutNews];
        updatedPayoutNews[index].payout = parseFloat(value) || 0; 
        setPayOutNews(updatedPayoutNews); 

        localStorage.setItem("payoutNews", JSON.stringify(updatedPayoutNews));
    };

    return (
        <div className="w-full min-h-screen lg:w-[84.5%] top-16 bg-light-back dark:bg-dark-fore relative left-0 lg:left-56 p-4 space-y-6">
            <PayOutOverview totalNewsWithPayout={payoutNews.length} totalPayout={totalPayout} />
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <NewsTable
                news={filteredNews}
                handlePayoutChange={handlePayoutChange} 
            />
        </div>
    );
};

export default Payout;