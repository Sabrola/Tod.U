import React, { useState } from 'react'
import '../../styles/modern-normalize.css';
import '../Lembretes/novoLembrete.css';
import '../../styles/utils.css';
import { nanoid } from 'nanoid';

export const NovoLembrete = ({onSubmit}) => {
    
    const [addLembreteInfo, setAddLembreteInfo] = useState({
        id: nanoid(),
        data: "",
        hora: "",
        notif_name: "",
        content: "",
    });

    const handleChange = (e) => {
        setAddLembreteInfo({
            ...addLembreteInfo,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit(addLembreteInfo)
    }

    return(
        <div className="new_reminder">
        
        <form className='basic_config'>
                {/* Titulo */} 

                <div className="lembrete_top">
                    
                    <div className="data_hora textfield">
                        <label htmlFor="data"> Data do seu lembrete:</label>
                        <input    value={addLembreteInfo.data}    onChange={handleChange}
                        type="date"
                        name="data"
                        placeholder='Data do evento'
                        ></input>

                        <label htmlFor="hora"> Horário do seu lembrete:</label>
                        <input     value={addLembreteInfo.hora}    onChange={handleChange}
                        type="time"
                        name="hora"
                        required="required"
                        placeholder='Hora do evento'
                        ></input>
                    </div>

                    <div className='name textfield'>
                        <label htmlFor="notif_name">Insira o nome do lembrete:</label> <br/>
                        <input    value={addLembreteInfo.notif_name}    onChange={handleChange}
                        type="textfield"
                        name="notif_name"
                        required="required"
                        placeholder='Nome do seu lembrete'
                        ></input>
                    </div>
                </div>
                {/* Titulo */} 

            {/* Conteudo */}
            <div className="content">
                        <label htmlFor='content'>Escreva informações adicionais do seu lembrete aqui:</label>
                        <textarea     value={addLembreteInfo.content}    onChange={handleChange}
                        name="content"
                        rows="5" cols='30'
                        placeholder='Insira o contéudo do lembrete aqui'
                        ></textarea>
            </div>
            {/* Conteudo */}
        </form>

            <div className="btn_space">
                <button className="btn-next btn_form" type='submit' onClick={handleSubmit}> Próximo </button>
            </div>
            
        </div>
    );
}