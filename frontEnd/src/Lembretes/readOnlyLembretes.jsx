import React from 'react';

const ReadOnlyLembretes = ( {lembrete, handleEditClick, handleDeleteClick} ) => {
    return (
            <div className="lembrete_card">

                {/* Titulo */} 
                <div className='display_lembretes_top'>
                    <div className='tarefa_date'>{lembrete.data}
                        <section className='tarefa_hora'> {lembrete.hora}</section>
                    </div>
                    <h2 className='title'>{lembrete.notif_name}</h2>
                </div>
                {/* Titulo */}

                {/* Conteudo */}
                <div className="content">
                    <article className='lembretes_desc'>
                            {' ' + lembrete.content + ' '}
                    </article>
                </div>

                <div className='display_tarefas_content'>
                    
                    <div className='Delete_Edit'>
                        <button  className='edit' type="button" onClick={(event) => handleEditClick(event, lembrete)}>Editar Lembrete</button>
                        <button className='delete' type="button" onClick={() => handleDeleteClick(lembrete.notif_id)}>Excluir Lembrete</button>
                    </div>

                    {/* Esquerda */}
                    <div className='content_left'>
                        
                        <section className='notifs'>Notificação: {lembrete.notif_em} {lembrete.notif_qn}</section>
                    </div>
                    {/* Esquerda */}

                    {/* Direita */}
                    <div className='content_right'>

                        <section className='repeat'> Repetindo em: {lembrete.repetir} {lembrete.repetir_qn}</section>
                    </div>
                    {/* Direita */}

                </div>
                {/* Conteudo */}



            </div>
    )
}

export default ReadOnlyLembretes;