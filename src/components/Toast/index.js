import React, { useState } from 'react';

import { Toast, ToastContainer } from 'react-bootstrap';

export default function Toasts(props) {

    return (
        <ToastContainer style={{ position: 'fixed', zIndex: 99, width: "100%", margin: "10px 10px 0 0"}}>
            <Toast {...props} style={{ float: 'right' }}>
                <Toast.Header  style={{ backgroundColor: "rgba(194,255,71)"  }}>
                    <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                    />
                    <strong className="me-auto">SEVENID</strong>
                    <small>1 seg atrás</small>
                </Toast.Header>
                <Toast.Body style={{ backgroundColor: "#575454", color: "white",  }}>
                    {props.children}
                </Toast.Body>
            </Toast>
        </ToastContainer>
    );
}

//const [show, setShow] = useState(false);
//<Toast onClose={() => setShow(false)} show={show} delay={4000} autohide>Alterações salvas</Toast>