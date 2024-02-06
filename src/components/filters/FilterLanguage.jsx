const FilterLanguage = ({ selectLang, selectChange }) => {
  const handleSelect = (e) => {
    const selectedLang = e.target.value;
    selectChange(selectedLang === 'All languages' ? '' : selectedLang);
  };

  // const renderLanguages = () => {
  //   const languageCode = languages.map((language) => Object.values(language));
  //   const sortedLanguages = languageCode.sort();

  //   return sortedLanguages.map((language) => (
  //     <option key={language} value={language}>
  //       {language}
  //     </option>
  //   ));
  // };

  return (
    <div>
      <form>
        <label>Filter by Language:</label>
        <select value={selectLang} onChange={handleSelect}>
          <option>All</option>
          {/* {renderLanguages()} */}
        </select>
      </form>
    </div>
  );
};

export default FilterLanguage;
