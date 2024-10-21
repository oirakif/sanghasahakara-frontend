// /src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UserStatisticsPage from './pages/UserStatisticsPage';
import UsersListPage from './pages/UsersListPage';
import MyProfilePage from './pages/MyProfilePage';
import ResetPasswordPage from './pages/ResetPasswordPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/users/statistics" element={<UserStatisticsPage />} />
        <Route path="/users" element={<UsersListPage />} />
        <Route path="/users/me" element={<MyProfilePage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
