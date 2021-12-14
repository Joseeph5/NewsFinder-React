import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { set_search_term } from './actions';

function SearchForm({ dispatch }) {
  const searchTerm = useRef('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchTerm.current.value);
    dispatch({ type: set_search_term, payload: searchTerm.current.value });
  };

  return (
    <form className='search-form' onSubmit={handleSearch}>
      <h2>search news</h2>
      <input type='text' className='form-input' ref={searchTerm} />
    </form>
  );
}

const mapStateToProps = (store) => {
  return { ...store };
};

export default connect(mapStateToProps)(SearchForm);
