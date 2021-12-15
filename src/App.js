import React, { useEffect } from 'react';
import Articles from './Articles';
import SearchForm from './SearchForm';
import DarkModeButton from './DarkModeButton';

import { set_articles, set_isLoading } from './actions';
import { connect } from 'react-redux';
import NavBar from './NavBar';

const searchUrl = 'https://hn.algolia.com/api/v1/search?query=';

function App({ searchTerm, dispatch }) {
  const fetchArticles = async (url, search) => {
    dispatch({ type: set_isLoading });
    try {
      const res = await fetch(url + search);
      const data = await res.json();
      if (Array.isArray(data.hits)) {
        dispatch({ type: set_articles, payload: data.hits });
      }
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  useEffect(() => {
    fetchArticles(searchUrl, searchTerm);
  }, [searchTerm]);

  return (
    <main>
      <NavBar />

      <SearchForm />
      <Articles />
    </main>
  );
}

const mapStateToProps = (store) => {
  return { ...store };
};

export default connect(mapStateToProps)(App);
