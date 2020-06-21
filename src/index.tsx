import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga';
import Routes from './routes';

import GlobalStyle from './styles/global';

import * as serviceWorker from './serviceWorker';

ReactGA.initialize('UA-79205996-1');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
