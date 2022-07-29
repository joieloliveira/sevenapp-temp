import React, { useState, useContext, Children } from 'react';
import './style.css'

import { Context } from '../../Context/AuthContext';

export default function InputCuson1(props) {

    const { modalAddNovoAtleta, setModalAddNovoAtleta } = useContext(Context);

    //console.log(user);

    return (
        <>
            <input className='inputCuston1' {...props}/>
        </>
    );
}