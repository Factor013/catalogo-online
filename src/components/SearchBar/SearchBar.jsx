import React from 'react';
import './SearchBar.css';
import { LuSearch } from 'react-icons/lu';

function SearchBar() {

 

  const handleSearch = () =>{
    alert('teste');
  };


  return ( 
    <form className="search_form" onSubmit={handleSearch}>
      <input
        type="search"
        placeholder="Buscar" 
        className="search_input"
        required
      />
      <button type="submit" className="search_button">
        <LuSearch />
      </button>
    </form>
  );
}

export default SearchBar;
