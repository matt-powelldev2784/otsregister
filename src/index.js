import React from 'react';
import ReactDOM from 'react-dom';
import { AuthContextProvider } from './Context/authContext';
import { store } from './components/redux/store';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <AuthContextProvider>
            <Provider store={store}>
                <App />
            </Provider>
        </AuthContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
