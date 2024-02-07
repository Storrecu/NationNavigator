const SearchBar = ({ inputValue, inputChange }) => {
  const handleInputChange = (e) => {
    inputChange(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="search_bar">
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="search-name">Search by country name</label>
        <input
          id="search-name"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};

export default SearchBar;
