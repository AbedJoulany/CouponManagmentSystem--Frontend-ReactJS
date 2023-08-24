import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import CompanyPage from "./pages/CompanyPage";
import CustomerPage from "./pages/CustomerPage";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Navbar from "./components/Navbar";
import CartPage from "./components/cartPage/CartPage";


function App() {
    return (
        <div className="app">
            <Navbar/>
            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/admin" element={<AdminPage />} />
                    <Route path="/company" element={<CompanyPage />} />
                    <Route path="/customer" element={<CustomerPage />} />
                    <Route path="/cart" element={<CartPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
