import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'font-awesome/css/font-awesome.min.css';
import {CookiesProvider} from 'react-cookie';


ReactDOM.render(<CookiesProvider><App /></CookiesProvider>, document.getElementById('root'));