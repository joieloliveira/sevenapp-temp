import React, { useState, useContext, Children } from 'react';
import './style.css'

import { Context } from '../../Context/AuthContext';

export default function ButtonCancel(props) {

    const { modalAddNovoAtleta, setModalAddNovoAtleta } = useContext(Context);

    //console.log(user);

    return (
        <>
            <button className='buttonCancel' {...props}>Cancelar</button>
        </>
    );
}