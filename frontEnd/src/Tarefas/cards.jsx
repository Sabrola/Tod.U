import '../../styles/modern-normalize.css';
import '../Tarefas/cards.css';
import '../../styles/utils.css';

import { notifs } from '../contents'

export default function Lembretes() {
    const lembretes_cards = notifs.map(card =>
        <li key={card.notif_id}>
            <div className="lembrete_card">

                {/* Titulo */} 
                <div className='display_lembretes_top'>
                    <h2 className='title'>{card.notif_name}</h2>
                    <div className='tarefa_date'>{card.data}
                        <section className='tarefa_hora'> {card.hora}</section>
                    </div>
                </div>
                {/* Titulo */}

                {/* Conteudo */}
                <div className='display_tarefas_content'>

                    {/* Esquerda */}
                    <div className='content_left'>
                        <article className='lembretes_desc'>
                            {' ' + card.content + ' '}
                        </article>

                        <article className='lembretes_btns'>
                            <button className="lembretes_btn edit"> Editar</button>
                            <button className='lembretes_btn delet'> Deletar</button>
                        </article>
                    </div>
                    {/* Esquerda */}

                    {/* Direita */}
                    <div className='content_right'>
                        <section className='notifs'>Notificação: {card.notif_em}</section>
                        <hr />
                        <section className='repeat'> Repetindo : {card.repetir}</section>
                    </div>
                    {/* Direita */}

                </div>
                {/* Conteudo */}

            </div>
        </li>
    );

    return <ul>{lembretes_cards}</ul>;
}
