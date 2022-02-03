import React from 'react';
import ReactDOM from 'react-dom';
// import StoreContext from './utils/context';
import { Provider } from "react-redux"
import store from "./store"
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    {/* <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider> */}

    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);
