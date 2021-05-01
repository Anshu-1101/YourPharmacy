import React from 'react';
import './searchcss.css';
import SearchIcon from '@material-ui/icons/Search'

const SearchBar = ({onChange, placeholder}) => {
    return (
      <div className="Search">
        <span className="SearchSpan">
            <SearchIcon></SearchIcon>
        </span>
        <input
          className="SearchInput"
          type="text"
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    );
  };

export default SearchBar;