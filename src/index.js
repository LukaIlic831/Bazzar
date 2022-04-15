import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faFacebook, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faCartShopping, faHeart, faAngleDown, faTableCellsLarge, faBars, faPhone, faAngleRight, faStar, faEnvelope, faLocationPin, faList, faTrash} from '@fortawesome/free-solid-svg-icons';

library.add(faHeart, faCartShopping, faAngleDown, faBars, faPhone, faTableCellsLarge, faAngleRight, faStar, faEnvelope, faFacebook, faInstagram, faTwitter, faLocationPin, faTrash, faList)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
