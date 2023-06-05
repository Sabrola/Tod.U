import React, { useState, fragment, Fragment } from 'react';

import './Lembrete_styles.css'
import ReadOnlyLembretes from './readOnlyLembretes';
import EditLembrete from './EditLembrete';


export const Lembrete = ({lembretes , setLembretes}) => {

    const [editLembreteData, setEditLembreteData] = useState({
        data: "",
        hora: "",
        notif_name: "",
        content: "",

        notif_em: "",
        notif_qn: "",
        repetir: "",
        repetir_qn: "",
    })

    const [editLembreteId, setEditLembreteId] = useState(null);

    const handleEditLembreteChange = (e) => {
        e.preventDefault();

        const fieldName = e.target.getAttribute("name");
        const fieldValue = e.target.value;

        const newLembreteData = { ...editLembreteData };
        newLembreteData[fieldName] = fieldValue;

        setEditLembreteData(newLembreteData);
    }

    const handleEditLembreteSubmit = (e) => {
        e.preventDefault();

        const editedLembrete = {
            notif_id: editLembreteId,
            
            data: editLembreteData.data,
            hora: editLembreteData.hora,
            notif_name: editLembreteData.notif_name,
            content: editLembreteData.content,

            notif_em: editLembreteData.notif_em,
            notif_qn: editLembreteData.notif_qn,
            repetir: editLembreteData.repetir,
            repetir_qn: editLembreteData.repetir_qn,
        }

        const newLembretes = [...lembretes];

        const index = lembretes.findIndex((lembrete) => lembrete.notif_id === editLembreteId);

        newLembretes[index] = editedLembrete;

        setLembretes(newLembretes);
        setEditLembreteId(null);
    }

    const handleEditClick = (e, lembrete) => {
        e.preventDefault();

        setEditLembreteId(lembrete.notif_id);

        const lembreteValues = {
            data: lembrete.data,
            hora: lembrete.hora,
            notif_name: lembrete.notif_name,
            content: lembrete.content,

            notif_em: lembrete.notif_em,
            notif_qn: lembrete.notif_qn,
            repetir: lembrete.repetir,
            repetir_qn: lembrete.repetir_qn,
        }

        setEditLembreteData(lembreteValues);
    }

    const handleCancelClick = () => {
        setEditLembreteId(null);
    }

    const handleDeleteClick = (lembreteId) => {
        const newLembretes = [...lembretes];

        const index = lembretes.findIndex((lembrete) => lembrete.notif_id === lembreteId);

        newLembretes.splice(index, 1);

        setLembretes(newLembretes);
    }

    return (
        <div>
           <form onSubmit={handleEditLembreteSubmit}>
           <ul>
                {lembretes.map((lembrete) => (
                    
                    <li key={lembrete.notif_id}>
                    <Fragment>
                    { editLembreteId === lembrete.notif_id ?
                         (<EditLembrete 
                            editLembreteData={editLembreteData}
                            handleEditLembreteChange={handleEditLembreteChange}
                            handleCancelClick={handleCancelClick} />
                    ) : (
                        <ReadOnlyLembretes
                            lembrete={lembrete}
                            handleEditClick={handleEditClick} 
                            handleDeleteClick={handleDeleteClick} />) }
                    </Fragment>
                    </li>
                ))}
           </ul>
            
           </form>
        </div>
    )
};
