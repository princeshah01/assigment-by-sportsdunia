import React, { useEffect, useState } from "react";
import axios from "axios";

const Visualize = () => {
  const [data, setData] = useState([]);
  const [articlesByAuthor, setArticlesByAuthor] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=sports&apiKey=028905632fe3447284d33315b9ba3886`
        );
        const articles = response.data.articles.map((article) => ({
          ...article,
          payout: 0,
        }));
        setData(articles);
        countArticlesByAuthor(articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  const countArticlesByAuthor = (articles) => {
    const authorCount = {};

    articles.forEach((article) => {
      const author = article.author || "Unknown Author"; // Handle cases where author might be missing
      if (authorCount[author]) {
        authorCount[author]++;
      } else {
        authorCount[author] = 1;
      }
    });
    const authorArray = Object.entries(authorCount).map(([name, value]) => ({
      name,
      value,
    }));

    setArticlesByAuthor(authorArray);
    console.log(articlesByAuthor);
  };

  return (
    <div className="w-full min-h-screen lg:w-[84.5%] top-16 bg-light-back dark:bg-dark-fore relative left-0 lg:left-56 p-4 space-y-6">
       <span> Inconsole i have data but due to somereason i was unable to complete it sorry : ) </span>
       <span>Done by prince 🏱</span>
       <a href="tel:+919334326203">Ping me here If you 🎔 it !! </a> 

    </div>
  );
};

export default Visualize;