import '../../styles/filters/FilterRegion.scss';

const FilterRegion = ({ selectRegion, selectChange, regions }) => {
  const handleSelect = (e) => {
    const selectedRegion = e.target.value;
    selectChange(selectedRegion);
  };

  return (
    <>
      <label className="filter-reg-title" htmlFor="filter-reg">
        Filter by region:
      </label>
      <select id="filter-reg" value={selectRegion} onChange={handleSelect}>
        <option value="All">All regions</option>
        {regions.map((region, i) => (
          <option key={i} value={region}>
            {region}
          </option>
        ))}
      </select>
    </>
  );
};

export default FilterRegion;
