import React, { useState, useContext, useEffect } from 'react';
import './style.css'

import { useHistory } from 'react-router-dom';

import api from '../../config/configApi';

import { Context } from '../../Context/AuthContext';

import { Modal } from 'react-bootstrap';

import { useDispatch, useSelector } from "react-redux";
import { postDataUserRequest, getDataUserRequest } from "../../redux";

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

export default function ModalAddNovoAtleta(props) {

    const { modalAddNovoAtleta, setModalAddNovoAtleta } = useContext(Context);

    const [user, setUser] = useState({});

    const [erro, setErro] = useState(false);

    const dispatch = useAppDispatch();
    const userData = useAppSelector(state => state.userData)

    const Getdata = () => {
        dispatch(getDataUserRequest())
    }

    const addUser = () => {
        if (user.name == undefined || user.email == undefined 
            // user.cel == undefined || user.data_de_inicio == undefined ||
            // user.data_de_nascimento == undefined || user.turma == undefined ||
            // user.formatura_e_m == undefined || user.expectativa_de_viagem == undefined
            ) { return setErro(true) }
        dispatch(postDataUserRequest(user))
        setModalAddNovoAtleta(!modalAddNovoAtleta)
    }

    const valueInput = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    //console.log(user);
    useEffect(() => {
        Getdata();
        if(userData.error!=102){setModalAddNovoAtleta(false)}else{setModalAddNovoAtleta(true)}
    }, [userData.error]);

    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <div class="modal-content-cadastro modalAddNovoAtleta">
                <form>
                    {erro ? <p style={{ color: "red" }}>Preencha todos os campos com *</p> : ""}
                    {userData.error==102 ? <p style={{ color: "red" }}>Este email ja esta cadastrado</p> : ""}
                    <p>ADICIONAR NOVO ATLETA</p>
                    <label>Nome *</label>
                    <input type="text" name="name" onChange={valueInput} required />

                    <label>E-mail *</label>
                    <input type="email" name="email" onChange={valueInput} />

                    <label>Celular</label>
                    <input type="text" name="cel" onChange={valueInput} />

                    <label>Data de início</label>
                    <input type="date" name="data_de_inicio" onChange={valueInput} required />

                    <label>Data de nascimento</label>
                    <input type="date" name="data_de_nascimento" onChange={valueInput} required />

                    <label>Turma</label>
                    <input type="text" name="turma" onChange={valueInput} required />

                    <label>Formatura E.M.</label>
                    <input type="date" name="formatura_e_m" onChange={valueInput} required />

                    <label>Expectativa de viagem</label>
                    <select name="expectativa_de_viagem" onChange={valueInput} required>
                        <option value="selecione" selected>Selecione</option>
                        <option value="futebolMasculino">Futebol masculino</option>
                        <option value="futebolFeminino">Futebol feminino</option>
                    </select>
                    <button type="Button" onClick={addUser}>CADASTRAR</button>
                </form>
            </div >
        </Modal >
    );
}