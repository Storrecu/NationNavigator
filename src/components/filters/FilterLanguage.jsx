import '../../styles/filters/FilterLanguage.scss';

const FilterLanguage = ({ selectLang, selectChange, languages }) => {
  const handleSelect = (e) => {
    const selectedLang = e.target.value;
    selectChange(selectedLang);
  };

  return (
    <>
      <label className="filter-lang-title" htmlFor="filter-lang">
        Filter by language:
      </label>
      <select id="filter-lang" value={selectLang} onChange={handleSelect}>
        <option value="All">All languages</option>
        {languages.map((language, i) => (
          <option key={i} value={language}>
            {language}
          </option>
        ))}
      </select>
    </>
  );
};

export default FilterLanguage;
