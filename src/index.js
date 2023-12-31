import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import makeServer from './mirage/server';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';



if (process.env.REACT_APP_ENVIRONMENT === 'mockApi') {
  makeServer();
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="" element={<App />} />
  </Routes>
  </BrowserRouter>
);


reportWebVitals();
