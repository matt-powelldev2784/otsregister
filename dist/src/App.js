import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage } from './Pages/LoginPage';
import { SignUpPage } from './Pages/SignUpPage';
import { DashboardPage } from './Pages/DashboardPage';
import { CreateGamePage } from './Pages/CreateGamePage';
import { PlanTeamsPage } from './Pages/PlanTeamsPage';
import { EmailTablePage } from './Pages/EmailTablePage';
import { EditProfilePage } from './Pages/EditProfilePage';
var App = function () {
    var authToken = useSelector(function (state) { return state.authReducer; }).authToken;
    return (React.createElement(BrowserRouter, null,
        React.createElement(Fragment, null,
            React.createElement(Routes, null,
                React.createElement(Route, { path: "/", element: React.createElement(LoginPage, null) }),
                React.createElement(Route, { path: "/signup/", element: React.createElement(SignUpPage, null) }),
                authToken && React.createElement(Route, { path: "/dashboard/", element: React.createElement(DashboardPage, null) }),
                authToken && React.createElement(Route, { path: "/creategame/", element: React.createElement(CreateGamePage, null) }),
                authToken && React.createElement(Route, { path: "/planteams/", element: React.createElement(PlanTeamsPage, null) }),
                authToken && React.createElement(Route, { path: "/emailtable/", element: React.createElement(EmailTablePage, null) }),
                authToken && React.createElement(Route, { path: "/editprofile/", element: React.createElement(EditProfilePage, null) }),
                React.createElement(Route, { path: "*", element: React.createElement(LoginPage, null) })))));
};
export default App;
