import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Favorites from './Routes/favorites';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Beer from './Components/Beer/Beer';
import Beers from './Routes/beers';
import { ErrorPage } from './Components/ErrorPage/ErrorPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<App />}
        />
        <Route
          path="home"
          element={<App />}
        />
        <Route
          path="favorites"
          element={<Favorites />}
        />
        <Route
          path="beers"
          element={<Beers />}
        >
          <Route
            path=":beerName"
            element={<Beer />}
          ></Route>
        </Route>
        <Route
          path="*"
          element={<ErrorPage />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
