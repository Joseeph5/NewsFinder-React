import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// redux staff
import { createStore } from 'redux';
import reducer from './reducer';
import { Provider } from 'react-redux';

const intialStore = {
  isLoading: true,
  articles: [],
  searchTerm: 'facebook',
  page: 0,
};

const store = createStore(reducer, intialStore);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
