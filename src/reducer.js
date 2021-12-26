import { remove_article, set_articles, set_isLoading, set_search_term } from './actions';

const reducer = (state, action) => {
  switch (action.type) {
    case set_articles:
      return { ...state, articles: action.payload, isLoading: false };
    case set_search_term:
      return { ...state, searchTerm: action.payload };
    case set_isLoading:
      return { ...state, isLoading: true };
    case remove_article:
      return { ...state, articles: action.payload };
    default:
      return state;
  }
};

export default reducer;
