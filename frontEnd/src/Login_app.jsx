{ /*////////////////// App.jsx ///////////////*/ }
import React, { useState } from 'react';

import '../styles/modern-normalize.css';
import '../styles/index.css';
import '../styles/Login.css';
import '../styles/utils.css';


function Login_stuff() {
    const [username, setUsername] = useState("");
    const [senha, setSenha] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit", { username, senha});
    }

    return (
        <div>
        
        <form onSubmit={handleSubmit}>       
            <div className="textfield">
                <label htmlFor="user">Usuário:</label>
                <input name="nickname" type="text" placeholder="Usuário"
                    id="user" value={username} onChange={(e) => setUsername(e.target.value)}></input>
            </div>
            <div className="textfield">
                <label htmlFor="senha">Senha:</label>
                <input name="password" type="password" placeholder="Senha"
                    id="senha" value={senha} onChange={(e) => setSenha(e.target.value)}></input>
            </div>
    
            <button className="btn-next" type="submit">Próximo</button>
        </form>
    </div>
    )
}

export default Login_stuff;

