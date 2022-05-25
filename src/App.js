import React, { Fragment, useContext } from 'react';
import AuthContext from './Context/authContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage } from './Pages/LoginPage';
import { SignUpPage } from './Pages/SignUpPage';
import { DashboardPage } from './Pages/DashboardPage';
import { CreateGamePage } from './Pages/CreateGamePage';
import { PlanTeamsPage } from './Pages/PlanTeamsPage';
import { EmailTablePage } from './Pages/EmailTablePage';
import { EditProfilePage } from './Pages/EditProfilePage';

const App = () => {
    const { token } = useContext(AuthContext);

    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/signup/" element={<SignUpPage />} />
                    {token && <Route path="/dashboard/" element={<DashboardPage />} />}
                    {token && <Route path="/creategame/" element={<CreateGamePage />} />}
                    {token && <Route path="/planteams/" element={<PlanTeamsPage />} />}
                    {token && <Route path="/emailtable/" element={<EmailTablePage />} />}
                    {token && <Route path="/editprofile/" element={<EditProfilePage />} />}
                    <Route path="*" element={<LoginPage />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
};

export default App;
