{ /*////////////////// App.jsx ///////////////*/ }
import React, {useState} from 'react';

import '../styles/modern-normalize.css';
import '../styles/index.css';
import '../styles/Login.css';
import '../styles/utils.css';

import usuarios from './Stuff/users'

function Login_stuff() {
    
    const [users, setUsers] = useState(usuarios);

    const [loginState, ] = () => {
        e.preventDefault();

        const fieldName = e.target.getAttribute(users.user_id)
    }

    const validateLogin = (e) => {
        if(loginState.user && loginState.description) {
            return true;
        } else {
            return false;
        }
    }

    const handleSubmit = (newLogin) => {
        setUsers([...users, newLogin])

        if (!validateLogin()) return;
    }

    return (
        <div>
        
        <form>       
            <div className="textfield">
                <label for="user">Usuário:</label>
                <input id="user" name="nickname" type="text" placeholder="Usuário"></input>
            </div>
            <div className="textfield">
                <label for="senha">Senha:</label>
                <input id="senha" name="password" type="password" placeholder="Senha"></input>
            </div>
    
            <button className="btn-next" type="submit" onClick={handleSubmit}>Próximo</button>
        </form>
    </div>
    )
}

export default Login_stuff;

