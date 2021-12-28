import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { set_search_term } from './actions';

function SearchForm() {
  const searchTerm = useRef('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch({ type: set_search_term, payload: searchTerm.current.value });
  };

  return (
    <div className='search'>
      <form className='search-form' onSubmit={handleSearch}>
        <h3>search news</h3>
        <input type='text' className='form-input' ref={searchTerm} />
      </form>
    </div>
  );
}

export default SearchForm;
