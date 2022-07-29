import React, { useState, useContext, Children } from 'react';
import './style.css'

import { Context } from '../../Context/AuthContext';

export default function ButtonConfirm(props) {

    const { modalAddNovoAtleta, setModalAddNovoAtleta } = useContext(Context);

    //console.log(user);

    return (
        <>
            <button className='buttonConfirm' {...props}>Confirma</button>
        </>
    );
}