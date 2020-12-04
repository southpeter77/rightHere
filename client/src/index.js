import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from "./components/store/configureStore"

const initialState={
  entities:{

  },
  errors:{
    loginErrors:[],
    signUpErrors:[],
  }
}
const store = configureStore(initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store ={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
