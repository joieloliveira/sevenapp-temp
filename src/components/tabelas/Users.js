import React, { useContext, useRef, useEffect, useState } from 'react';
import "./style.css";

import { Context } from '../../Context/AuthContext';

import ModalConfirm from '../modalConfirm/ModalConfirm';
import ModalConfirm2 from '../modalConfirm/ModalConfirm';
import ButtonDelete from '../buttons/ButtonDelete';
import ButtonConfirm from '../buttons/ButtonConfirm';
import ButtonCancel from '../buttons/ButtonCancel';
import InputCuston1 from '../inputs/inputCuston1';

import edita from '../../img/img/editar.png';
import excluir from '../../img/img/excluir.png';
import verificar from '../../img/img/verificar.png';
import cancelar from '../../img/img/cancelar.png';

import { useDispatch, useSelector } from "react-redux";
import { getDataUserRequest, putDataUserRequest, deleteDataUserRequest } from "../../redux";

export const useAppSelector = useSelector;
export const useAppDispatch = () => useDispatch();

export default function Users(props) {

    const dispatch = useAppDispatch();
    const userData = useAppSelector(state => state.userData)

    const Getdata = () => {
        dispatch(getDataUserRequest())
    }

    const fisica = useRef(null);

    const [modalConfirm, setModalConfirm] = useState(false);
    const [modalConfirm2, setModalConfirm2] = useState(false);

    const [editar, setEditar] = useState("");

    const [userId, setUserId] = useState();

    const [user, setUser] = useState({});

    const valueInput = e => setUser({ ...user, [e.target.name]: e.target.value });

    const EditUser = (e) => {
        setUser({ ...user, _id: e.target.id, table: "users"});
        setModalConfirm2(!modalConfirm2)
        //console.log(user)
    }

    const DeletarUser = (e) => {
        setUserId(e.target.id)
        setModalConfirm(!modalConfirm)
        //console.log(user)
    }

    var idTable = 1

    useEffect(() => {
        Getdata();
    }, [userData.reloading]);

    console.log(userData.usersDataExcluidos);

    // if (userData.loading) {
    //     return (<p>Loading...</p>)
    // }

    return (
        <>
            <ModalConfirm
                size="sm"
                show={modalConfirm}
                onHide={() => setModalConfirm(!modalConfirm)}
                textbody={"Deseja deletar esse usuário"}
            ><ButtonDelete onClick={() => { dispatch(deleteDataUserRequest(userId)); setModalConfirm(!modalConfirm) }} /><ButtonCancel onClick={() => setModalConfirm(!modalConfirm)} /></ModalConfirm>
            <ModalConfirm2
                size="sm"
                show={modalConfirm2}
                onHide={() => setModalConfirm2(!modalConfirm2)}
                textbody={"Deseja editar esse usuário"}
            ><ButtonConfirm onClick={() => { dispatch(putDataUserRequest(user)); setEditar(""); setModalConfirm2(!modalConfirm2) }} /><ButtonCancel onClick={() => setModalConfirm2(!modalConfirm2)} /></ModalConfirm2>
            <div className='tableBox users' ref={fisica}>
                <div className='ButtonsBox'>
                    <button>Importar dados</button>
                    <button>Filtrar</button>
                    <button>Ordenar</button>
                </div>
                <table border="1" className='TableBody'>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Turma</th>
                        <th>Data de início</th>
                        <th>Data de nascimento</th>
                        <th>expectativa de viagem</th>
                        <th>Formatura E.M.</th>
                        <th>Email</th>
                        <th>Cel</th>
                    </tr>
                    {userData.usersData.map(dados => (
                        <tr key={dados._id}>
                            <td>{idTable++}</td>
                            <td className='tableNameUser'>{dados.name}</td>
                            <td>{editar == dados._id ?
                                <InputCuston1
                                    placeholder={dados.turma ? dados.turma : ""}
                                    onChange={valueInput}
                                    type="text"
                                    name="turma" />
                                :
                                dados.turma ? dados.turma : ""}</td>
                            <td>{editar == dados._id ?
                                <InputCuston1
                                    placeholder={dados.data_de_inicio ? dados.data_de_inicio : ""}
                                    onChange={valueInput}
                                    type="text"
                                    name="data_de_inicio" />
                                :
                                dados.data_de_inicio ? dados.data_de_inicio : ""}</td>
                            <td>{editar == dados._id ?
                                <InputCuston1
                                    placeholder={dados.data_de_nascimento ? dados.data_de_nascimento : ""}
                                    onChange={valueInput}
                                    type="text"
                                    name="data_de_nascimento" />
                                :
                                dados.data_de_nascimento ? dados.data_de_nascimento : ""}</td>
                            <td>{editar == dados._id ?
                                <InputCuston1
                                    placeholder={dados.expectativa_de_viagem ? dados.expectativa_de_viagem : ""}
                                    onChange={valueInput}
                                    type="text"
                                    name="expectativa_de_viagem" />
                                :
                                dados.expectativa_de_viagem ? dados.expectativa_de_viagem : ""}</td>
                            <td>{editar == dados._id ?
                                <InputCuston1
                                    placeholder={dados.formatura_e_m ? dados.formatura_e_m : ""}
                                    onChange={valueInput}
                                    type="text"
                                    name="formatura_e_m" />
                                :
                                dados.formatura_e_m ? dados.formatura_e_m : ""}</td>
                            <td>{editar == dados._id ?
                                <InputCuston1
                                    placeholder={dados.email ? dados.email : ""}
                                    onChange={valueInput}
                                    type="text"
                                    name="email" />
                                :
                                dados.email ? dados.email : ""}</td>
                            <td>{editar == dados._id ?
                                <InputCuston1
                                    placeholder={dados.cel ? dados.cel : ""}
                                    onChange={valueInput}
                                    type="text"
                                    name="cel" />
                                :
                                dados.cel ? dados.cel : ""}</td>
                            {editar != dados._id ?
                                <><td><img src={edita} onClick={() => setEditar(dados._id)} width="25" height="25" alt="edita" /></td>
                                    <td><img src={excluir} id={dados._id} onClick={DeletarUser} width="25" height="25" alt="excluir" /></td></>
                                :
                                <><td><img src={verificar} id={dados._id} onClick={EditUser} width="25" height="25" alt="verificar" /></td>
                                    <td><img src={cancelar} onClick={() => setEditar("")} width="25" height="25" alt="cancelar" /></td></>
                            }
                        </tr>
                    ))}
                </table>
            </div>
        </>
    );
}

//const [show, setShow] = useState(false);
//<Toast onClose={() => setShow(false)} show={show} delay={4000} autohide>Alterações salvas</Toast>