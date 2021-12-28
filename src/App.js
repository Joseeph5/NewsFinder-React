import React, { useEffect } from 'react';
import Articles from './Articles';
import SearchForm from './SearchForm';

import { set_articles, set_isLoading } from './actions';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from './NavBar';

const searchUrl = 'https://hn.algolia.com/api/v1/search?query=';

function App() {
  const { searchTerm } = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchArticles = async () => {
    dispatch({ type: set_isLoading });
    try {
      const res = await fetch(searchUrl + searchTerm);
      const data = await res.json();
      if (Array.isArray(data.hits)) {
        dispatch({ type: set_articles, payload: data.hits });
      }
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  useEffect(() => {
    fetchArticles();
    // eslint-disable-next-line
  }, [searchTerm]);

  return (
    <main>
      <NavBar />

      <SearchForm />
      <Articles />
    </main>
  );
}

export default App;
