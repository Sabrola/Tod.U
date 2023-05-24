import React from 'react'
import '../../styles/modern-normalize.css';
import '../../styles/novoLembrete.css';
import '../../styles/utils.css';

export const NovoLembrete = () => {
    return (
        <div className="form_container">
            <div className="lembrete">
                
                {/* Basico */}
                <div className="lembrete_basic">
                    <div className="top">
                        Crie um novo lembrete:
                    </div>
                    <form clas="notif_basics">
                        <input class='textfield'
                        type="textfield"
                        name="notif_name"
                        required="required"
                        placeholder='Nome do seu lembrete'
                        ></input>

                        <div>
                        <p> Insira a data e o horario do seu lembrete:</p>
                        <input class='textfield data'
                        type="date"
                        name="data"
                        required="required"
                        placeholder='Data do evento'
                        ></input>

                        <input class='textfield hora'
                        type="time"
                        name="hora"
                        required="required"
                        placeholder='Hora do evento'
                        ></input>

                        </div>

                        <p>Escreva informações adicionais do seu lembrete aqui:</p>
                        <input class='textfield content'
                        type="textfield"
                        name="content"
                        required=""
                        placeholder='Insira o contéudo do lembrete aqui'
                        ></input>

                        <button class="btn-next"> Próximo </button>
                    </form>
                </div>
                {/* Basico */}
                    <br />
                {/* Notifs */}
                <div className="lembretes_notif">
                    <div className="top">
                        Crie uma notificação:
                        <br />
                        Quando você quer que essa notificação aconteça:
                    </div>
                    <form>
                        <input class="textfield"
                        type='number'
                        name='notification'
                        required='notif_em'
                        placeholder=''
                        ></input>

                       <input class="textfield"
                        type='textfield'
                        name='notification'
                        required='notif_qn'
                        placeholder='Dia/Mês/Hora'
                        ></input>

                        <input class="textfield"
                        type='textfield'
                        name='repetir'
                        required='required'
                        placeholder='repetir'
                        ></input>

                        <input class="textfield"
                        type='textfield'
                        name='repetir_qn'
                        required='required'
                        placeholder='Dia/Mês/Hora'
                        ></input>

                        <button class="btn-next"> Próximo </button>
                    </form>
                </div>
            </div>
        </div>
    )
}