const FilterLanguage = ({ selectLang, selectChange, languages }) => {
  const handleSelect = (e) => {
    const selectedLang = e.target.value;
    selectChange(selectedLang);
  };

  return (
    <div>
      <form>
        <label htmlFor="filter-lang">Filter by Language:</label>
        <select id="filter-lang" value={selectLang} onChange={handleSelect}>
          <option value="All">All languages</option>
          {languages.map((language, i) => (
            <option key={i} value={language}>
              {language}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default FilterLanguage;
