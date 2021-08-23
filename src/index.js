import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import HttpsRedirect from 'react-https-redirect';
import WebFont from 'webfontloader';
import App from './components/App/App';
// import reportWebVitals from './reportWebVitals';
import './index.scss';

WebFont.load({
  google: {
    families: [
      'Urbanist: 400'
    ]
  }
});

ReactDOM.render(
  <HttpsRedirect>
    <Router>
      <App />
    </Router>
  </HttpsRedirect>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
