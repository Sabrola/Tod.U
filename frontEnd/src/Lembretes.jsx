{/* //////////////////////// App.jsx //////////////////////// */}
import React, { useState } from 'react'

import { Lembrete } from './Lembretes/Lembrete'
import { notifs } from './contents'
import { NovoLembrete } from './Lembretes/novoLembrete'
import { NovoLembreteConfig } from './Lembretes/Notif_config'

function Lembretes_Stuff() {
    
    const [lembretes, setLembretes] = useState(notifs);

    const handleSubmit = (newReminder) => {
        setLembretes([...lembretes, newReminder])
    }

    return (
        <div className='App'>
            <NovoLembrete onSubmit={handleSubmit} />
            <NovoLembreteConfig />
            <Lembrete lembretes={lembretes} setLembretes={setLembretes}/>
        </div>
    )
}

export default Lembretes_Stuff