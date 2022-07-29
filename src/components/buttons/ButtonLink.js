import React, { useState, useContext, Children } from 'react';
import './style.css'

import { Context } from '../../Context/AuthContext';

export default function ButtonLink(props) {

    const { modalAddNovoAtleta, setModalAddNovoAtleta } = useContext(Context);

    //console.log(user);

    return (
        <>
            <button className='buttonLink' {...props}>{props.link}</button>
        </>
    );
}