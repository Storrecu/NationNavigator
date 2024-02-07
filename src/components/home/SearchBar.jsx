const SearchBar = ({ inputValue, onInputChange }) => {
  const handleonInputChange = (e) => {
    onInputChange(e.target.value);
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
          onChange={handleonInputChange}
        />
      </form>
    </div>
  );
};

export default SearchBar;
