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
import { getDataUserExcluidosRequest, putDataUserExcluidosRequest, deleteDataUserExcluidosRequest } from "../../redux";

export const useAppSelector = useSelector;
export const useAppDispatch = () => useDispatch();

export default function Excluidos(props) {

    const dispatch = useAppDispatch();
    const userData = useAppSelector(state => state.userDataExcluidos)

    const Getdata = () => {
        dispatch(getDataUserExcluidosRequest())
    }

    const fisica = useRef(null);

    const [modalConfirm, setModalConfirm] = useState(false);
    const [modalConfirm2, setModalConfirm2] = useState(false);

    const [userId, setUserId] = useState();

    const RestauraUser = (e) => {
        //console.log(e.target.id);
        setUserId(e.target.id);
        setModalConfirm2(!modalConfirm2)
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

    //console.log(userData.usersDataExcluidos);

    // if (userData.loading) {
    //     return (<p>Loading...</p>)
    // }

    return (
        <>
            <ModalConfirm
                size="sm"
                show={modalConfirm}
                onHide={() => setModalConfirm(!modalConfirm)}
                textbody={"Deseja deletar esse usuário permanentemente"}
            ><ButtonDelete onClick={() => { dispatch(deleteDataUserExcluidosRequest(userId)); setModalConfirm(!modalConfirm) }} /><ButtonCancel onClick={() => setModalConfirm(!modalConfirm)} /></ModalConfirm>
            <ModalConfirm2
                size="sm"
                show={modalConfirm2}
                onHide={() => setModalConfirm2(!modalConfirm2)}
                textbody={"Deseja restaurar esse usuário"}
            ><ButtonConfirm onClick={() => { dispatch(putDataUserExcluidosRequest(userId)); setModalConfirm2(!modalConfirm2)}} /><ButtonCancel onClick={() => setModalConfirm2(!modalConfirm2)} /></ModalConfirm2>
            <div className='tableBox excluidos' ref={fisica}>
                <div className='ButtonsBox'>
                    <button>Importar dados</button>
                    <button>Filtrar</button>
                    <button>Ordenar</button>
                </div>
                <table border="1" className='TableBody'>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Cel</th>
                        <th></th>
                        <th></th>
                    </tr>
                    {userData.usersDataExcluidos.map(dados => (
                        <tr key={dados._id}>
                            <td>{idTable++}</td>
                            <td className='tableNameUser'>{dados.name}</td>
                            <td>{dados.email}</td>
                            <td>{dados.cel ? dados.cel : ""}</td>
                            <td><img src={verificar} id={dados._id} onClick={RestauraUser} width="25" height="25" alt="verificar" /></td>
                            <td><img src={excluir} id={dados._id} onClick={DeletarUser} width="25" height="25" alt="excluir" /></td>
                        </tr>
                    ))}
                </table>
            </div>
        </>
    );
}

//const [show, setShow] = useState(false);
//<Toast onClose={() => setShow(false)} show={show} delay={4000} autohide>Alterações salvas</Toast>