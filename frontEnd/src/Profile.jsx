{/* //////////////////////// main.jsx //////////////////////// */}

import React from 'react'
import ReactDOM from 'react-dom/client'

import '../styles/modern-normalize.css';
import '../styles/index.css';
import '../styles/profile.css';
import '../styles/mobileMenu.css';
import '../styles/utils.css';

import mobileNav from '../src/mobileMenu'
import Lembretes_Stuff from './Lembretes';

mobileNav();
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Lembretes_Stuff />
    </React.StrictMode>
)

