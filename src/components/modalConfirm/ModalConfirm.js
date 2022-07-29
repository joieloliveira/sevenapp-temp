import React from 'react';
import './style.css'

import { Modal } from 'react-bootstrap';

export default function ModalConfirm(props) {

    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <div class="modal-content-cadastro modalAddNovoAtleta">
                <div className='modalConfirmBG'>
                    <div className='modalConfirmBody'>
                        {props.textbody}
                    </div>
                    <div className='modalConfirmFoot'>
                        {props.children}
                    </div>
                </div>
            </div >
        </Modal >
    );
}