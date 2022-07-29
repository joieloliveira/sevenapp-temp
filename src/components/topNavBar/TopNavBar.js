import React, { useContext, useEffect, useRef } from 'react';
import "./style.css";

import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";

import { Context } from '../../Context/AuthContext';

export default function TopNavBar(props) {

    const { abaAtiva, sidebarIsOpen, setSidebarOpen, setAbaAtiva } = useContext(Context);

    const fisica = useRef(null);
    const tecnica = useRef(null);
    const ingles = useRef(null);
    const treinos = useRef(null);
    const academico = useRef(null);

    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

    const Aba = () => {
        if (abaAtiva == "fisica") {
            fisica.current.style.color  = "#C2FF47";
        } else {
            //document.getElementsByClassName('tecnica')[0].style.backgroundColor = "#c2ff47";
            fisica.current.style.color  = "#ffffff"
        }
        if (abaAtiva == "tecnica") {
            tecnica.current.style.color  = "#C2FF47";
        } else {
            //document.getElementsByClassName('tecnica')[0].style.backgroundColor = "#c2ff47";
            tecnica.current.style.color  = "#ffffff"
        }
        if (abaAtiva == "ingles") {
            ingles.current.style.color  = "#C2FF47";
        } else {
            //document.getElementsByClassName('tecnica')[0].style.backgroundColor = "#c2ff47";
            ingles.current.style.color  = "#ffffff"
        }
        if (abaAtiva == "treinos") {
            treinos.current.style.color  = "#C2FF47";
        } else {
            //document.getElementsByClassName('tecnica')[0].style.backgroundColor = "#c2ff47";
            treinos.current.style.color  = "#ffffff"
        }
        if (abaAtiva == "academico") {
            academico.current.style.color  = "#C2FF47";
        } else {
            //document.getElementsByClassName('tecnica')[0].style.backgroundColor = "#c2ff47";
            academico.current.style.color  = "#ffffff"
        }
    }

    useEffect(() => {
        Aba();
    }, [abaAtiva]);

    return (
        <div className='abasTable'>
            <Button style={{ color: "#C2FF47", backgroundColor: "black" }} onClick={toggleSidebar}>
                <FontAwesomeIcon icon={faAlignLeft}/>
            </Button>
            <button type='button' onClick={() => setAbaAtiva("fisica")} ref={fisica} >Física</button>
            <button type='button' onClick={() => setAbaAtiva("tecnica")} ref={tecnica} >Técnica</button>
            <button type='button' onClick={() => setAbaAtiva("ingles")} ref={ingles} >Inglês</button>
            <button type='button' onClick={() => setAbaAtiva("treinos")} ref={treinos} >Treinos</button>
            <button type='button' onClick={() => setAbaAtiva("academico")} ref={academico} >Acadêmico</button>
        </div>
    );
}

//const [show, setShow] = useState(false);
//<Toast onClose={() => setShow(false)} show={show} delay={4000} autohide>Alterações salvas</Toast>