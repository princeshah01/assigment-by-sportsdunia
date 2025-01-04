const SearchBar = ({ searchQuery, setSearchQuery }) => {
    return (
      <div className="flex justify-center m-auto items-center">
        <input
          type="text"
          placeholder="Search news by title...."
          className="w-full py-3 px-5 shadow-lg rounded-lg bg-light-fore text-light-text placeholder:dark:text-dark-text dark:bg-[#595959] dark:text-dark-text  focus:bg-light-fore focus:outline-none focus:ring-2 focus:ring-light-uni"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    );
  };
  
  export default SearchBar;
  