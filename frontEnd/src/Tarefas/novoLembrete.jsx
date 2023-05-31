import React, { useState } from 'react'
import '../../styles/modern-normalize.css';
import '../../styles/novoLembrete.css';
import '../../styles/utils.css';


export const NovoLembrete = () => {

    const [lembreteState, setLembreteState] = useState({
        data: "",
        hora: "",
        notif_name: "",
        content: "",
    });

    const handleChange = (e) => {
        setLembreteState({
            ...LembreteState,
            [e.target.name] : e.target.value
        });
    };

    const handlesubmit = (e) => {
        e.preventDefault();

        console.log(lembreteState);
    }

    return (
        <div className="new_reminder">
        
        <form className='basic_config'>
                {/* Titulo */} 

                <div className="lembrete_top">
                    
                    <div className="data_hora textfield">
                        <label htmlFor="data"> Data do seu lembrete:</label>
                        <input value={lembreteState.data}   onChange={handleChange}
                        type="date"
                        name="data"     id='data'
                        required="required"
                        placeholder='Data do evento'
                        ></input>

                        <label htmlFor="data"> Horário do seu lembrete:</label>
                        <input value={lembreteState.hora}   onChange={handleChange}
                        type="time"
                        name="hora"     id='hora'
                        required="required"
                        placeholder='Hora do evento'
                        ></input>
                    </div>

                    <div className='name textfield'>
                        <label htmlFor="notif_name">Insira o nome do lembrete:</label> <br/>
                        <input value={lembreteState.notif_name}   onChange={handleChange}
                        type="textfield"
                        name="notif_name"   id='notif_name'
                        required="required"
                        placeholder='Nome do seu lembrete'
                        ></input>
                    </div>
                </div>
                {/* Titulo */} 

            {/* Conteudo */}
            <div className="content">
                        <label htmlFor='content'>Escreva informações adicionais do seu lembrete aqui:</label>
                        <textarea value={lembreteState.content}   onChange={handleChange}
                        name="content"      id='content'
                        rows="5" cols='30'
                        placeholder='Insira o contéudo do lembrete aqui'
                        ></textarea>
            </div>
            {/* Conteudo */}
        </form>
        
        <form className='notif_config'>
            <div className='notif_space'>
                
                {/* Esquerda */}
                <div className='notif_left'>
                <label htmlFor='notif_em notif_qn'>Quando você quer que essa notificação aconteça?</label>
                        <section className='notif_section'>
                            <input
                            type='number'
                            name='notif_em'     id='notif_em'
                            placeholder='Número'
                            ></input>

                        <select className=""
                            type='textfield'
                            name='notif_qn'     id="notif_qn"
                            >
                                <option value="dias">Dias</option>
                                <option value="horas"> Horas</option>
                            </select>
                        </section>
                </div>
                {/* Esquerda */}

                {/* Direita */}
                <div className='notif_right'>

                    <label htmlFor='repetir repetir_qn'>Você quer que essa noficação se repita?</label>
                        <section className='notif_section'>
                            <input
                            type='number'
                            name='repetir_qn'
                            placeholder='Quantos'
                            ></input>

                            <select className=""
                            type='number'
                            name='repetir_qn'
                            placeholder='Dia/Mês/Hora'
                            >
                                <option value="dias">Dias</option>
                                <option value="horas"> Horas</option>
                            </select>
                        </section>
                </div>
                {/* Direita */}

            </div>
            <div className="btn_space">
                <button className="btn-next btn_form" type='submit' onClick={handlesubmit}> Próximo </button>
            </div>
        </form>
            <div className="btn_space">
                <button className="btn-next btn_form"> Cancelar </button>
            </div>
            
        </div>
    )
}