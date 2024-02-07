import '../../styles/filters/FilterRegion.scss';

const FilterRegion = ({ selectRegion, selectChange, regions }) => {
  const handleSelect = (e) => {
    const selectedRegion = e.target.value;
    selectChange(selectedRegion);
  };

  return (
    <div>
      <form>
        <label className="filter-reg-title" htmlFor="filter-reg">
          Filter by Region:
        </label>
        <select id="filter-reg" value={selectRegion} onChange={handleSelect}>
          <option value="All">All regions</option>
          {regions.map((region, i) => (
            <option key={i} value={region}>
              {region}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default FilterRegion;
