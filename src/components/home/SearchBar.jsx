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
        <label>SearchBar</label>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </form>
    </div>
  );
};

export default SearchBar;

// const filterDevice = devices.filter((device) => {
//   const searchText = text.toLowerCase();
//   return (
//     device.brand.toLowerCase().includes(searchText) ||
//     device.model.toLowerCase().includes(searchText)
//   );
// });
