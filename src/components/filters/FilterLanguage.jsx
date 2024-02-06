const FilterLanguage = ({ selectLang, selectChange, languages }) => {
  const handleSelect = (e) => {
    const selectedLang = e.target.value;
    selectChange(selectedLang === 'All languages' ? '' : selectedLang);
  };

  return (
    <div>
      <form>
        <label>Filter by Language:</label>
        <select value={selectLang} onChange={handleSelect}>
          <option value="">All languages</option>
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
