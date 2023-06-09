import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login_stuff from './Login_app';

const Rotas = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/login" element={<Login_stuff/>} />
            </Routes>
        </Router>
    )
}

export default Rotas;