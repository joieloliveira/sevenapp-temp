import React, { useState, useContext } from 'react';
import './style.css'

import { Context } from '../../Context/AuthContext';

import { Modal } from 'react-bootstrap';

import { useDispatch } from "react-redux";
import { putDataUserRequest } from "../../redux";

export const useAppDispatch = () => useDispatch();

export default function ModalCriarTreino(props) {

    const { modalCriarTreino, setModalCriarTreino } = useContext(Context);

    const [user, setUser] = useState({});

    const dispatch = useAppDispatch();

    const addTreino = () => {
        dispatch(putDataUserRequest({...user, user: props.id, table: "treinos" }))
        setModalCriarTreino(!modalCriarTreino)
    }

    const valueInput = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <div class="modal-content-cadastro modalAddNovoAtleta">
                <form>
                    <p>ADICIONAR TREINO</p>
                    <label>Data</label>
                    <input type="text" name="data" onChange={valueInput} required />

                    <label>Turma</label>
                    <input type="email" name="turma" onChange={valueInput} />

                    <label>Tipo de trabalho</label>
                    <input type="text" name="tipo_de_trabalho" onChange={valueInput} />
                    <button type="Button" onClick={addTreino}>ADICIONAR</button>
                </form>
            </div >
        </Modal >
    );
}