import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login_stuff from './Login_app';
import Profile from "./Profile_App";
import HomePage from "./main";

import { AuthProvider } from "./Contexts/auth";

const Rotas = () => {

    return (
        <Router>
            <AuthProvider>
            <Routes>
                <Route exact path="/" element={<HomePage/>} />
                <Route exact path="/login" element={<Login_stuff/>} />
                <Route exact path="/profile" element={<Profile/>} />
            </Routes>
            </AuthProvider>
        </Router>
    )
}

export default Rotas;