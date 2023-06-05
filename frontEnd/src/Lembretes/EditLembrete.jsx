import React from 'react';

const EditLembrete = ( {editLembreteData, handleEditLembreteChange, handleCancelClick} ) => {
    return (
            <div className="lembrete_card">

                {/* Titulo */} 
                <div className='display_lembretes_top'>
                    <div className='tarefa_date'>
                            <input      onChange={handleEditLembreteChange}     value={editLembreteData.data}
                            type="date"
                            name="data"
                            placeholder='Data do evento'
                            ></input>

                        <section className='tarefa_hora'>
                            <input      onChange={handleEditLembreteChange}     value={editLembreteData.hora}
                            type="time"
                            name="hora"
                            required="required"
                            placeholder='Hora do evento'
                            ></input>
                        </section>
                    </div>
                    <h2 className='title'>
                        <input      onChange={handleEditLembreteChange}     value={editLembreteData.notif_name}
                        type="textfield"
                        name="notif_name"
                        required="required"
                        placeholder='Nome do seu lembrete'
                        ></input>
                    </h2>
                </div>
                {/* Titulo */}

                {/* Conteudo */}
                <div className="content">
                        <textarea      onChange={handleEditLembreteChange}     value={editLembreteData.content}
                        name="content"
                        rows="5" cols='30'
                        placeholder='Insira o contéudo do lembrete aqui'
                        ></textarea>
                </div>

                <div className='display_tarefas_content'>
                   
                    {/* Botão */}
                    <div className='Delete_Edit'>
                        <button className='edit' type="submit"> Salvar</button>
                        <button className='delete' tyle="button" onClick={handleCancelClick}>Cancelar</button>
                    </div>
                    {/* Botão */}

                    {/* Esquerda */}
                    <div className='content_left'>
                        
                        <section className='notifs'>Notificação:
                            <input      onChange={handleEditLembreteChange}     value={editLembreteData.notif_em}
                            type='number'
                            name='notif_em'
                            placeholder='Número'
                            ></input>

                            <select      onChange={handleEditLembreteChange}     value={editLembreteData.notif_qn}
                            type='textfield'
                            name='notif_qn'>
                                <option value="dias">Dias</option>
                                <option value="horas"> Horas</option>
                            </select>
                        </section>
                    </div>
                    {/* Esquerda */}

                    {/* Direita */}
                    <div className='content_right'>

                        <section className='repeat'> Repetindo em:
                        
                        <input      onChange={handleEditLembreteChange}     value={editLembreteData.repetir}
                        type='number'
                        name='repetir'
                        placeholder='Quantos'
                        ></input>
                        
                        <select      onChange={handleEditLembreteChange}     value={editLembreteData.repetir_qn}
                        type='number'
                        name='repetir_qn'
                        placeholder='Dia/Mês/Hora'>
                            <option value="dias">Dias</option>
                            <option value="horas"> Horas</option>
                        </select>
                        </section>
                    </div>
                    {/* Direita */}

                </div>
                {/* Conteudo */}

            </div>
    )
}

export default EditLembrete;