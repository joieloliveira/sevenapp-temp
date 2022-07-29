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

export default function Tecnica(props) {

    const dispatch = useAppDispatch();
    const userData = useAppSelector(state => state.userData)

    const Getdata = () => {
        dispatch(getDataUserRequest())
    }

    const tecnica = useRef(null);

    const { abaAtiva } = useContext(Context);

    const [modalConfirm, setModalConfirm] = useState(false);
    const [modalConfirm2, setModalConfirm2] = useState(false);

    const [editar, setEditar] = useState("");

    const [userId, setUserId] = useState();

    const [user, setUser] = useState({});

    const valueInput = e => setUser({ ...user, [e.target.name]: e.target.value });

    const EditUserTecnica = (e) => {
        setUser({ ...user, user: e.target.id, table: "tecnica" });
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
        if (abaAtiva == "tecnica") {
            //document.getElementsByClassName('tecnica')[0].style.backgroundColor = "#c2ff47";
            tecnica.current.style.display = "flex";
        } else {
            //document.getElementsByClassName('tecnica')[0].style.backgroundColor = "#c2ff47";
            tecnica.current.style.display = "none";
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
            <div className='tableBox tecnica' ref={tecnica}>
                <div className='ButtonsBox'>
                    <button>Importar dados</button>
                    <button>Filtrar</button>
                    <button>Ordenar</button>
                </div>
                <table border="1" className='TableBody'>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Passe</th>
                        <th>Finalização</th>
                        <th>Drible</th>
                        <th>Recompo-sição</th>
                        <th>Passe longo</th>
                        <th>Recepção</th>
                        <th>Tipo de jogo</th>
                        <th>Adversário</th>
                        <th>Data</th>
                        <th></th>
                        <th></th>
                    </tr>
                    {userData.usersData.map(dados => (
                        <tr key={dados._id}>
                            <td>{idTable++}</td>
                            <td className='tableNameUser'>{dados.name}</td>
                            <td>{editar == dados._id ?
                                <InputCuston1
                                    placeholder={dados.tecnica ? dados.tecnica.passe : ""}
                                    onChange={valueInput}
                                    type="text"
                                    name="passe" />
                                :
                                dados.tecnica ? dados.tecnica.passe : ""}</td>
                            <td>{editar == dados._id ?
                                <InputCuston1
                                    placeholder={dados.tecnica ? dados.tecnica.finalizacao : ""}
                                    onChange={valueInput}
                                    type="text"
                                    name="finalizacao" />
                                :
                                dados.tecnica ? dados.tecnica.finalizacao : ""}</td>
                            <td>{editar == dados._id ?
                                <InputCuston1
                                    placeholder={dados.tecnica ? dados.tecnica.drible : ""}
                                    onChange={valueInput}
                                    type="text"
                                    name="drible" />
                                :
                                dados.tecnica ? dados.tecnica.drible : ""}</td>
                            <td>{editar == dados._id ?
                                <InputCuston1
                                    placeholder={dados.tecnica ? dados.tecnica.recomposição : ""}
                                    onChange={valueInput}
                                    type="text"
                                    name="recomposição" />
                                :
                                dados.tecnica ? dados.tecnica.recomposição : ""}</td>
                            <td>{editar == dados._id ?
                                <InputCuston1
                                    placeholder={dados.tecnica ? dados.tecnica.passe_longo : ""}
                                    onChange={valueInput}
                                    type="text"
                                    name="passe_longo" />
                                :
                                dados.tecnica ? dados.tecnica.passe_longo : ""}</td>
                            <td>{editar == dados._id ?
                                <InputCuston1
                                    placeholder={dados.tecnica ? dados.tecnica.recepcao : ""}
                                    onChange={valueInput}
                                    type="text"
                                    name="recepcao" />
                                :
                                dados.tecnica ? dados.tecnica.recepcao : ""}</td>
                            <td>{editar == dados._id ?
                                <InputCuston1
                                    placeholder={dados.tecnica ? dados.tecnica.tipo_de_jogo : ""}
                                    onChange={valueInput}
                                    type="text"
                                    name="tipo_de_jogo" />
                                :
                                dados.tecnica ? dados.tecnica.tipo_de_jogo : ""}</td>
                            <td>{editar == dados._id ?
                                <InputCuston1
                                    placeholder={dados.tecnica ? dados.tecnica.adversario : ""}
                                    onChange={valueInput}
                                    type="text"
                                    name="adversario" />
                                :
                                dados.tecnica ? dados.tecnica.adversario : ""}</td>
                            <td>{editar == dados._id ?
                                <InputCuston1
                                    placeholder={dados.tecnica ? dados.tecnica.data : ""}
                                    onChange={valueInput}
                                    type="text"
                                    name="data" />
                                :
                                dados.tecnica ? dados.tecnica.data : ""}</td>
                            {editar != dados._id ?
                                <><td><img src={edita} onClick={() => setEditar(dados._id)} width="25" height="25" alt="edita" /></td>
                                    <td><img src={excluir} id={dados._id} onClick={DeletarUser} width="25" height="25" alt="excluir" /></td></>
                                :
                                <><td><img src={verificar} id={dados._id} onClick={EditUserTecnica} width="25" height="25" alt="verificar" /></td>
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