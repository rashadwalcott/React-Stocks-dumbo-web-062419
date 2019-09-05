import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={props.sortTerm==="Alphabetically"} onChange={(event) => props.setSortTerm(event.target.value)}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={props.sortTerm==="Price"} onChange={(event) => props.setSortTerm(event.target.value)}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(event) => props.setFilterTerm(event.target.value)} value={props.term}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
