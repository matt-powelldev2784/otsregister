import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './components/redux/store';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
ReactDOM.render(React.createElement(React.StrictMode, null,
    React.createElement(Provider, { store: store },
        React.createElement(App, null))), document.getElementById('root'));
