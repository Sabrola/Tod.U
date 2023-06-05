import React, { useState } from 'react'
import '../../styles/modern-normalize.css';
import '../Lembretes/novoLembrete.css';
import '../../styles/utils.css';

export const NovoLembreteConfig = ({onSubmit}) => {
    
    const [addNotifInfo, setAddNotifInfo] = useState({
        notif_em: "",
        notif_qn: "",
        repetir: "",
        repetir_qn: "",
    });

    const handleChange = (e) => {
        setAddNotifInfo({
            ...addNotifInfo,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit(addNotifInfo)
    }

    return(
        <div className="new_reminder">
            <form className='notif_config'>
                <div className='notif_space'>
                        
                    {/* Esquerda */}
                    <div className='notif_left'>
                        <label htmlFor='notif_em'>Quando você quer que essa notificação aconteça?</label>
                            <section className='notif_section'>
                                <input    value={addNotifInfo.notif_em}    onChange={handleChange}
                                type='number'
                                name='notif_em'
                                placeholder='Número'
                                ></input>

                                <select    value={addNotifInfo.notif_qn}    onChange={handleChange}
                                type='textfield'
                                name='notif_qn'
                                >
                                    <option value="dias">Dias</option>
                                    <option value="horas"> Horas</option>
                                </select>
                            </section>
                        </div>
                        {/* Esquerda */}

                        {/* Direita */}
                        <div className='notif_right'>

                            <label htmlFor='repetir'>Você quer que essa noficação se repita?</label>
                                <section className='notif_section'>
                                    <input    value={addNotifInfo.repetir}    onChange={handleChange}
                                    type='number'
                                    name='repetir'
                                    placeholder='Quantos'
                                    ></input>

                                    <select    value={addNotifInfo.repetir_qn}    onChange={handleChange}
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
                </form>
                
                <div className="btn_space">
                <button className="btn-next btn_form" type='submit' onClick={handleSubmit}> Próximo </button>
                </div>

            </div>
        )
}