import React from 'react';



function Index() {
    return (
        <div>
            <button className="btn-Register" onClick="window.location.href='../pages/Registro.html'">Sou novo aqui.</button>
            <button className="btn-login" onClick="window.location.href='../pages/Login.html'">Já tenho uma agenda!</button>
            <button className="btn-share" onClick="window.location.href='../pages/Profile.html'">Profile</button>
        </div>
    )
}

export default Index;