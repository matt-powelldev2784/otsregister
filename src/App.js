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

const App = () => {
    const { authToken } = useSelector(state => state.authReducer);

    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/signup/" element={<SignUpPage />} />
                    {authToken && <Route path="/dashboard/" element={<DashboardPage />} />}
                    {authToken && <Route path="/creategame/" element={<CreateGamePage />} />}
                    {authToken && <Route path="/planteams/" element={<PlanTeamsPage />} />}
                    {authToken && <Route path="/emailtable/" element={<EmailTablePage />} />}
                    {authToken && <Route path="/editprofile/" element={<EditProfilePage />} />}
                    <Route path="*" element={<LoginPage />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
};

export default App;
