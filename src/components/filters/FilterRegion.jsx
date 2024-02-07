import React from 'react';

const FilterRegion = ({ selectRegion, selectChange, regions }) => {
  const handleSelect = (e) => {
    const selectedRegion = e.target.value;
    selectChange(selectedRegion);
  };

  return (
    <div>
      <form>
        <label htmlFor="filter-reg">Filter by Region:</label>
        <select id="filter-reg" value={selectRegion} onChange={handleSelect}>
          <option>All regions</option>
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
