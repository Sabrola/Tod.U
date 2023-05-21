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
                    <div className='tarefa_date'>{card.data}
                        <section className='tarefa_hora'> {card.hora}</section>
                    </div>
                    <h2 className='title'>{card.notif_name}</h2>
                </div>
                {/* Titulo */}

                {/* Conteudo */}
                <div className="content">
                    <article className='lembretes_desc'>
                            {' ' + card.content + ' '}
                    </article>
                </div>

                <div className='display_tarefas_content'>

                    {/* Esquerda */}
                    <div className='content_left'>

                        <section className='notifs'>Notificação: {card.notif_em}</section>
                    </div>
                    {/* Esquerda */}

                    {/* Direita */}
                    <div className='content_right'>

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
