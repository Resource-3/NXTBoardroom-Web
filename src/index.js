import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { save, load } from "redux-localstorage-simple";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers/rootReducer";
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(
  rootReducer,
  load(),
  composeWithDevTools(applyMiddleware(thunk, save()))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>

      {/* grid container start region */}
      <div className="grid-container">
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
      </div>
      {/* grid container end region */}


      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
