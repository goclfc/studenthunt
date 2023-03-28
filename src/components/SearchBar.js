import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './input.css'
function SearchInput() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Do something with the search term, such as send a request to a server
    console.log(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="ძებნა"
          value={searchTerm}
          onChange={handleChange}
        />
        <div className="input-group-append">
          <button type="submit" className="btn btn-outline-secondary">
            <FaSearch />
          </button>
        </div>
      </div>
    </form>
  );
}

export default SearchInput;
