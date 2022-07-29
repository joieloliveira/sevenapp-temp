import React, { useState, useContext, Children } from 'react';
import './style.css'

import { Context } from '../../Context/AuthContext';

export default function ButtonDelete(props) {

    const { modalAddNovoAtleta, setModalAddNovoAtleta } = useContext(Context);

    //console.log(user);

    return (
        <>
            <button className='buttonDelete' {...props}>Deletar</button>
        </>
    );
}