import React, { useState } from 'react';
import './searchBar.css';

function SearchBar() {
  const [input, setInput] = useState('');

  const handleChangeInput = (e) =>{
    setInput(e.target.value)
  }
  return (
    <div className='search-wrapper'>
      <input type="text" value={input} onChange={handleChangeInput}/>
      <img src='/search.png' width='20px' alt="search"></img>
    </div>
  )
}

export default SearchBar