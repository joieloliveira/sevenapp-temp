import React, { useContext, useRef, useEffect } from 'react';
import "./style.css";

import { Context } from '../../Context/AuthContext';

export default function ButtonAddNovoAtleta() {

  const { modalAddNovoAtleta, setModalAddNovoAtleta } = useContext(Context);

    return (
        <>
        <button className='buttonAddNovoAtleta' onClick={() => setModalAddNovoAtleta(!modalAddNovoAtleta)}>Adicionar novo atleta</button>
        </>
    );
}

//const [show, setShow] = useState(false);
//<Toast onClose={() => setShow(false)} show={show} delay={4000} autohide>Alterações salvas</Toast>