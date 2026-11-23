import React, { useState } from 'react';
import Data from './Data.json';

const CountryStateFilter = () => {
  const countryList = Data;
  const [stateList, setStateList] = useState([]);

  const handleDropdown = (e) => {
    console.log(e.target.value);
    let findStates = countryList.find((item) => item.label === e.target.value);
    setStateList(findStates?.state || []);
  };
  return (
    <div>
      <h3>Country State filter</h3>
      <select onChange={handleDropdown}>
        <option value="Select dropdown">Select Country</option>
        {countryList.map((data) => (
          <option>{data.label}</option>
        ))}
      </select>{' '}
      <br />
      <br />
      <select>
        <option value="Select State">Select State</option>
        {stateList.map((data) => (
          <option>{data.label}</option>
        ))}
      </select>
    </div>
  );
};
export default CountryStateFilter;
