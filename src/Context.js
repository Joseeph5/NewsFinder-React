import React, { useContext, useEffect, useReducer } from 'react';
import reducer from './reducer';
import {} from './actions';

const AppContext = React.createContext();

const searchUrl = 'https://hn.algolia.com/api/v1/search?query=';

const initialState = {
  loading: true,
  articles: [],
  searchTerm: '',
  page: 0,
};

export default function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchArticles = async (url, search) => {
    const res = await fetch(url + search);
    const data = await res.json();
    console.log(data.hits);
    if (Array.isArray(data.hits)) {
      dispatch({ type: 'set_articles', payload: data.hits });
    }
  };

  useEffect(() => {
    fetchArticles(searchUrl, state.searchTerm);
  }, [state.searchTerm]);

  return <AppContext.Provider value={{ ...state }}>{children} </AppContext.Provider>;
}

// custom Hook
export const useGlobaleContext = () => {
  return useContext(AppContext);
};
