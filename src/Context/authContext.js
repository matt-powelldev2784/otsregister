import { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthContextProvider = props => {
    const deviceWidth = window.innerWidth;

    const setAppStateHandler = newState => {
        setAppState(prevState => {
            return { ...prevState, ...newState };
        });
    };

    const [appState, setAppState] = useState({
        token: localStorage.getItem('token'),
        loading: true,
        authError: false,
        authErrors: null,
        authUser: false,
        playerProfile: false,
        playerDetails: false,
        setAppStateHandler: setAppStateHandler,
        isDesktop: deviceWidth > 440 ? true : false,
        gamesData: false,
        planTeamsGameId: sessionStorage.getItem('planTeamsGameId'),
        backgroundColor: '#003a68'
    });

    //console.log('authcContext', appState);
    return <AuthContext.Provider value={appState}>{props.children}</AuthContext.Provider>;
};

export default AuthContext;
