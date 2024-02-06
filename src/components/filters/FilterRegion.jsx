import React from 'react';

const FilterRegion = ({ selectRegion, selectChange }) => {
  const handleSelect = (e) => {
    const selectedRegion = e.target.value;
    selectChange(selectedRegion === 'All regions' ? '' : selectedRegion);
  };

  return (
    <div>
      <form>
        <label>Filter by Region:</label>
        <select value={selectRegion} onChange={handleSelect}>
          <option>All</option>
        </select>
      </form>
    </div>
  );
};

export default FilterRegion;

// {
//   /* <select>
// {device.options.storages.map((element, index) => (
//   <option key={index} value={element.code}>
//     {element.name}
//   </option>
// ))}
// </select> */
// }
