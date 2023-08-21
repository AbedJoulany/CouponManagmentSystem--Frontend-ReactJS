import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

function App() {
    return (
        <div className="app">
            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/admin" element={<AdminPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
