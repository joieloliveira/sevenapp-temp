import React, { useContext, useRef, useEffect, useState } from 'react';
import "./style.css";

import { Context } from '../../Context/AuthContext';

import ModalConfirm from '../../components/modalConfirm/ModalConfirm';
import ModalConfirm2 from '../../components/modalConfirm/ModalConfirm';
import ButtonDelete from '../../components/buttons/ButtonDelete';
import ButtonConfirm from '../../components/buttons/ButtonConfirm';
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

export default function Academico(props) {

    const dispatch = useAppDispatch();
    const userData = useAppSelector(state => state.userData)

    const Getdata = () => {
        dispatch(getDataUserRequest())
    }

    const academico = useRef(null);

    const {abaAtiva} = useContext(Context);

    const [modalConfirm, setModalConfirm] = useState(false);
    const [modalConfirm2, setModalConfirm2] = useState(false);

    const [editar, setEditar] = useState("");

    const [userId, setUserId] = useState();

    const [user, setUser] = useState({});

    const valueInput = e => setUser({ ...user, [e.target.name]: e.target.value });

    const EditUserAcademico = (e) => {
        setUser({ ...user, user: e.target.id, table: "academico"});
        setModalConfirm2(!modalConfirm2)
        //console.log(user)
    }

    const DeletarUser = (e) => {
        setUserId(e.target.id)
        setModalConfirm(!modalConfirm)
        //console.log(user)
    }

    var idTable = 1

    const Aba = () => {
        if (abaAtiva == "academico") {
            //document.getElementsByClassName('tecnica')[0].style.backgroundColor = "#c2ff47";
            academico.current.style.display = "flex";
        } else {
            //document.getElementsByClassName('tecnica')[0].style.backgroundColor = "#c2ff47";
            academico.current.style.display = "none";
        }
    }

    // useEffect(() => {
    //     Getdata();
    // }, [userData.reloading]);

    useEffect(() => {
        Aba();
    }, [abaAtiva]);

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
            ><ButtonConfirm onClick={() => { dispatch(putDataUserRequest(user)); setModalConfirm2(!modalConfirm2); setEditar("") }} /><ButtonCancel onClick={() => setModalConfirm2(!modalConfirm2)} /></ModalConfirm2>
            <div className='tableBox academico' ref={academico}>
                <div className='ButtonsBox'>
                    <button>Importar dados</button>
                    <button>Filtrar</button>
                    <button>Ordenar</button>
                </div>
                <table border="1" className='TableBody'>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>GPA/trimesetre</th>
                        <th>GPA (ano) acumulativo</th>
                        <th>GPA (EM) acumulativo</th>
                        <th></th>
                        <th></th>
                    </tr>
                    {userData.usersData.map(dados => (
                        <tr key={dados._id}>
                            <td>{idTable++}</td>
                            <td className='tableNameUser'>{dados.name}</td>
                            <td>{editar == dados._id ?
                                <InputCuston1
                                    placeholder={dados.academico ? dados.academico.gpa_trimestre : ""}
                                    onChange={valueInput}
                                    type="text"
                                    name="gpa_trimestre" />
                                :
                                dados.academico ? dados.academico.gpa_trimestre : ""}</td>
                            <td>{editar == dados._id ?
                                <InputCuston1
                                    placeholder={dados.academico ? dados.academico.gpa_ano_acumulativo : ""}
                                    onChange={valueInput}
                                    type="text"
                                    name="gpa_ano_acumulativo" />
                                :
                                dados.academico ? dados.academico.gpa_ano_acumulativo : ""}</td>
                            <td>{editar == dados._id ?
                                <InputCuston1
                                    placeholder={dados.academico ? dados.academico.gpa_em_acumulativo : ""}
                                    onChange={valueInput}
                                    type="text"
                                    name="gpa_em_acumulativo" />
                                :
                                dados.academico ? dados.academico.gpa_em_acumulativo : ""}</td>
                            {editar != dados._id ?
                                <><td><img src={edita} onClick={() => setEditar(dados._id)} width="25" height="25" alt="edita" /></td>
                                    <td><img src={excluir} id={dados._id} onClick={DeletarUser} width="25" height="25" alt="excluir" /></td></>
                                :
                                <><td><img src={verificar} id={dados._id} onClick={EditUserAcademico} width="25" height="25" alt="verificar" /></td>
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