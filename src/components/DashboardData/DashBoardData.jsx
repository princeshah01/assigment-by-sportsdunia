import React, { useState, useEffect } from "react";
import axios from "axios";
import OverviewBoxes from "./OverviewBoxes";
import SearchBar from "./SearchBar";
import NewsTable from "./NewsTable";
import { data } from "react-router-dom";

const DashboardData = () => {
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [totalPayout, setTotalPayout] = useState(0);


  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=sports&apiKey=3af3fdc01d08411bb07db7e0b7cd4560`
        );
        const articles = response.data.articles.map((article) => ({
          ...article,
          payout: 0,
        }));
        setNews(articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    const savedPayoutData = JSON.parse(localStorage.getItem("payoutNews")) || [];
    fetchNews().then(() => {
      if (savedPayoutData.length > 0) {
        setNews((prevNews) =>
          prevNews.map((article) => {
            const savedArticle = savedPayoutData.find(
              (saved) => saved.url === article.url
            );
            return savedArticle ? { ...article, payout: savedArticle.payout } : article;
          })
        );
      }
    });
  }, []);

  const calculateTotalPayout = () => {
    const total = news.reduce((sum, article) => sum + (article.payout || 0), 0);
    setTotalPayout(total);
  };

  const localStorageData = () => {
    const updatedData = news.map((article) => ({
      title: article.title,
      url: article.url,
      author:article.author ,
      publishedAt:article.publishedAt,
      payout: article.payout,
    }));
    localStorage.setItem("payoutNews", JSON.stringify(updatedData));
  };

  const handlePayoutChange = (index, value) => {
    const updatedNews = [...news];
    updatedNews[index].payout = parseFloat(value) || 0;
    setNews(updatedNews);
    calculateTotalPayout();
    localStorageData();
  };
  const filteredNews = news.filter(
    (article) =>
      article.title &&
      article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    calculateTotalPayout();
  }, [news]);

  return (
    <div className="w-full min-h-screen lg:w-[84.5%] top-16 bg-light-back dark:bg-dark-fore relative left-0 lg:left-56 p-4 space-y-6">
      <OverviewBoxes totalNews={news.length} totalPayout={totalPayout} />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <NewsTable
        news={filteredNews}
        handlePayoutChange={handlePayoutChange}
      />
    </div>
  );
};

export default DashboardData;