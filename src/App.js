// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import Register from './components/Register';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<Navigate to="/register" replace />} />
                {/* 可以添加其他路由 */}
            </Routes>
        </Router>
    );
};

export default App;
