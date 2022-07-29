import React, { useContext, useEffect, useRef } from 'react';
import "./style.css";

import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";

import { Context } from '../../Context/AuthContext';

export default function TopNavBar2(props) {

    const { abaAtiva, sidebarIsOpen, setSidebarOpen, setAbaAtiva } = useContext(Context);

    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

    return (
        <div className='abasTable'>
            <Button style={{ color: "#C2FF47", backgroundColor: "black" }} onClick={toggleSidebar}>
                <FontAwesomeIcon icon={faAlignLeft}/>
            </Button>
            
        </div>
    );
}

//const [show, setShow] = useState(false);
//<Toast onClose={() => setShow(false)} show={show} delay={4000} autohide>Alterações salvas</Toast>