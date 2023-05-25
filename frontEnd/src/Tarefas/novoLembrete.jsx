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
                    <h1 className="top">
                        Crie um novo lembrete:
                    </h1> <br/>
                    <form clas="notif_basics">
                        <label htmlfor="notif_name">Insira o nome do lembrete:</label>
                        <input class='textfield'
                        type="textfield"
                        name="notif_name"   id='notif_name'
                        required="required"
                        placeholder='Nome do seu lembrete'
                        ></input>

                        <div>
                        <label htmlfor="data"> Insira a data do seu lembrete:</label>
                        <input class='textfield data'
                        type="date"
                        name="data"     id='data'
                        required="required"
                        placeholder='Data do evento'
                        ></input>

                        <label htmlfor="data"> Insira o horario do seu lembrete:</label>
                        <input class='textfield hora'
                        type="time"
                        name="hora"     id='hora'
                        required="required"
                        placeholder='Hora do evento'
                        ></input>

                        </div>

                        <label htmlFor='content'>Escreva informações adicionais do seu lembrete aqui:</label>
                        <textarea class='textfield content'
                        name="content"      id='content'
                        rows="5" cols='30'
                        placeholder='Insira o contéudo do lembrete aqui'
                        ></textarea>

                        <section class='btn_area'>
                        <button class="btn-next" type='submit'> Próximo </button>
                        </section>
                    </form>
                </div>
                {/* Basico */}
                    <br />
                {/* Notifs */}
                <div className="lembretes_notif">
                    <h1 className="top">
                        Criar uma notificação?
                    </h1> <br/>

                    <form> 
                        <input type="radio" id="notif_sim" name="notif_sim" value="sim"></input>
                            <label class='radio' for="notif_sim">Sim</label> 

                         <input type="radio" id="notif_nao" name="notif_nao" value="nao"></input>
                            <label class='radio' for="notif_nao">Não</label>
                    </form> <br/>

                    <form class='notifs_config'>
                        <label htmlFor='notif_em notif_qn'>Quando você quer que essa notificação aconteça?</label>
                        <section>
                            <input class="textfield"
                            type='number'
                            name='notif_em'     id='notif_em'
                            placeholder='Quantos'
                            ></input>

                        <select class="textfield"
                            type='textfield'
                            name='notif_qn'     id="notif_qn"
                            >
                                <option value="dias">Dias</option>
                                <option value="horas"> Horas</option>
                            </select>
                        </section>

                        <label htmlFor='repetir repetir_qn'>Você quer que essa noficação se repita?</label> <br/>
                        <input type="radio" id="repetir" name="repetir_qn" value=""></input>
                            <label class='radio' for="repetir_sim">Sim</label>

                        <input type="radio" id="repetir" name="repetir_qn" value=""></input>
                            <label class='radio' for="repetir_nao">Não</label>

                        <section>
                        <label htmlFor='repetir_qn'></label>
                        <input class="textfield"
                        type='number'
                        name='repetir_qn'
                        placeholder='Quantos'
                        ></input>

                        <select class="textfield"
                        type='number'
                        name='repetir_qn'
                        placeholder='Dia/Mês/Hora'
                        >
                            <option value="dias">Dias</option>
                            <option value="horas"> Horas</option>
                        </select>
                        </section>

                        <button class="btn-next"> Cancelar </button>

                    </form>
                </div>
                
            </div>
        </div>
    )
}