const NewsTable = ({ news, handlePayoutChange }) => {
    return (
      <div className="overflow-x-auto bg-light-fore rounded-lg shadow-lg dark:bg-dark-back">
        <table className="w-full text-left table-auto border-collapse border-light-text border-x-0">
          <thead>
            <tr className="bg-light-uni text-light-text">
              <th className="p-4">Title</th>
              <th className="p-4">Author</th>
              <th className="p-4">Date</th>
              <th className="p-4">Payout</th>
            </tr>
          </thead>
          <tbody className="dark:text-dark-text">
            {news.map((article, index) => (
              <tr
                key={index}
                className="hover:bg-light-back dark:hover:bg-dark-fore"
              >
                <td className="p-4 border-b">
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                    {article.title}
                  </a>
                </td>
                <td className="p-4 border-b">{article.author || "Unknown"}</td>
                <td className="p-4 border-b">
                  {new Date(article.publishedAt).toLocaleDateString()}
                </td>
                <td className="p-4 border-b">
                  <input
                    type="number"
                    value={article.payout}
                    className="w-full p-2 shadow-inner focus:outline-none rounded dark:bg-dark-fore bg-light-back"
                    onChange={(e) => handlePayoutChange(index, e.target.value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {news.length === 0 && (
          <p className="p-4 text-center text-light-text dark:text-dark-text">
            No news found.
          </p>
        )}
      </div>
    );
  };
  
  export default NewsTable;
  