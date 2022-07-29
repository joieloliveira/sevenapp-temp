import React, { useContext, useRef, useEffect, useState } from 'react';
import "./style.css";

import { Context } from '../../Context/AuthContext';

import ModalConfirm from '../../components/modalConfirm/ModalConfirm';
import ModalConfirm2 from '../../components/modalConfirm/ModalConfirm';
import ModalCriarTreino from '../../components/modalCriarTreino/ModalCriarTreino';
import ButtonDelete from '../../components/buttons/ButtonDelete';
import ButtonConfirm from '../../components/buttons/ButtonConfirm';
import ButtonCancel from '../buttons/ButtonCancel';
import InputCuston1 from '../inputs/inputCuston1';

import edita from '../../img/img/editar.png';
import excluir from '../../img/img/excluir.png';
import verificar from '../../img/img/verificar.png';
import cancelar from '../../img/img/cancelar.png';
import Polygon1 from '../../img/img/Polygon1.png';
import Polygon2 from '../../img/img/Polygon2.png';
import treino from '../../img/img/treino.png';

import { useDispatch, useSelector } from "react-redux";
import { getDataUserRequest, putDataUserRequest, deleteDataUserRequest } from "../../redux";

export const useAppSelector = useSelector;
export const useAppDispatch = () => useDispatch();

export default function Treinos(props) {

    const dispatch = useAppDispatch();
    const userData = useAppSelector(state => state.userData)

    const Getdata = () => {
        dispatch(getDataUserRequest())
    }

    const treinos = useRef(null);

    const { abaAtiva, modalCriarTreino, setModalCriarTreino } = useContext(Context);

    const [modalConfirm, setModalConfirm] = useState(false);
    const [modalConfirm2, setModalConfirm2] = useState(false);

    const [editar, setEditar] = useState("");

    const [userId, setUserId] = useState();
    const [userTreinoId, setUserTreinoId] = useState();

    const [user, setUser] = useState({});

    const [tabelaN, seTabelaN] = useState(0);

    const valueInput = e => setUser({ ...user, [e.target.name]: e.target.value });

    const addNovoTreino = (e) => {
        setUserId(e.target.id);
        setModalCriarTreino(!modalCriarTreino)
        //console.log(user)
    }

    const EditUserTreino = (e) => {
        setUser({ ...user, treinoId: e.target.id, table: "treinos" });
        setModalConfirm2(!modalConfirm2)
    }

    const DeletarUserTreino = (e) => {
        setUserTreinoId({ ...userTreinoId, treinoId: e.target.id, table: "tabelaTreino" })
        setModalConfirm(!modalConfirm)
        //console.log(user)
    }

    var idTable = 1

    const Aba = () => {
        if (abaAtiva == "treinos") {
            //document.getElementsByClassName('treinos')[0].style.backgroundColor = "#c2ff47";
            treinos.current.style.display = "flex";
        } else {
            //document.getElementsByClassName('treinos')[0].style.backgroundColor = "#c2ff47";
            treinos.current.style.display = "none";
        }
    }

    // useEffect(() => {
    //     Getdata();
    // }, [userData.reloading]);

    useEffect(() => {
        Aba();
    }, [abaAtiva]);

    console.log(userData);

    // if (userData.loading) {
    //     return (<p>Loading...</p>)
    // }

    return (
        <>
            <ModalCriarTreino
                show={modalCriarTreino}
                onHide={() => setModalCriarTreino(!modalCriarTreino)}
                id={userId}
            />
            <ModalConfirm
                size="sm"
                show={modalConfirm}
                onHide={() => setModalConfirm(!modalConfirm)}
                textbody={"Deseja deletar a tabela de treino desse usuário"}
            ><ButtonDelete onClick={() => { dispatch(putDataUserRequest(userTreinoId)); setModalConfirm(!modalConfirm) }} /><ButtonCancel onClick={() => setModalConfirm(!modalConfirm)} /></ModalConfirm>
            <ModalConfirm2
                size="sm"
                show={modalConfirm2}
                onHide={() => setModalConfirm2(!modalConfirm2)}
                textbody={"Deseja editar a tabela de treino desse usuário"}
            ><ButtonConfirm onClick={() => { dispatch(putDataUserRequest(user)); setModalConfirm2(!modalConfirm2); setEditar("") }} /><ButtonCancel onClick={() => setModalConfirm2(!modalConfirm2)} /></ModalConfirm2>
            <div className='tableBox treinos' ref={treinos}>
                <div className='ButtonsBox'>
                    <button>Importar dados</button>
                    <button>Filtrar</button>
                    <button>Ordenar</button>
                    {tabelaN == 0 ?
                        <><img src={Polygon1} width="10" height="10" alt="Polygon1"/></>
                        :
                        <><img src={Polygon1} width="10" height="10" alt="Polygon1" onClick={() => seTabelaN(tabelaN - 1)}/></>
                    }
                    <button style={{marginLeft: 10}}>Treino: {tabelaN}</button>
                    <img src={Polygon2} width="10" height="10" alt="Polygon2" onClick={() => seTabelaN(tabelaN + 1)} />
                </div>
                <table border="1" className='TableBody'>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Data</th>
                        <th>Presença</th>
                        <th>Intensidade</th>
                        <th>Foco</th>
                        <th>Observações gerais</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    {userData.usersData.map(dados => (
                        <tr key={dados._id}>
                            <td>{idTable}</td>
                            <td className='tableNameUser'>{dados.name}</td>
                            <td>{editar == dados._id ?
                                <InputCuston1
                                    placeholder={dados.treinos[tabelaN] ? dados.treinos[tabelaN].data : ""}
                                    onChange={valueInput}
                                    type="text"
                                    name="data" />
                                :
                                dados.treinos[tabelaN] ? dados.treinos[tabelaN].data : ""}</td>
                            <td>{editar == dados._id ?
                                <InputCuston1
                                    placeholder={dados.treinos[tabelaN] ? dados.treinos[tabelaN].presenca : ""}
                                    onChange={valueInput}
                                    type="text"
                                    name="presenca" />
                                :
                                dados.treinos[tabelaN] ? dados.treinos[tabelaN].presenca : ""}</td>
                            <td>{editar == dados._id ?
                                <InputCuston1
                                    placeholder={dados.treinos[tabelaN] ? dados.treinos[tabelaN].intensidade : ""}
                                    onChange={valueInput}
                                    type="text"
                                    name="intensidade" />
                                :
                                dados.treinos[tabelaN] ? dados.treinos[tabelaN].intensidade : ""}</td>
                            <td>{editar == dados._id ?
                                <InputCuston1
                                    placeholder={dados.treinos[tabelaN] ? dados.treinos[tabelaN].foco : ""}
                                    onChange={valueInput}
                                    type="text"
                                    name="foco" />
                                :
                                dados.treinos[tabelaN] ? dados.treinos[tabelaN].foco : ""}</td>
                            <td>{editar == dados._id ?
                                <InputCuston1
                                    placeholder={dados.treinos[tabelaN] ? dados.treinos[tabelaN].observacoes_gerais : ""}
                                    onChange={valueInput}
                                    type="text"
                                    name="observacoes_gerais" />
                                :
                                dados.treinos[tabelaN] ? dados.treinos[tabelaN].observacoes_gerais : ""}</td>
                            {editar != dados._id ?
                                <>{dados.treinos[tabelaN] ?
                                    <><td><img src={edita} onClick={() => setEditar(dados._id)} width="25" height="25" alt="edita" /></td>
                                        <td><img src={excluir} id={dados.treinos[tabelaN]._id} onClick={DeletarUserTreino} width="25" height="25" alt="excluir" /></td></>
                                    :
                                    <><td><img src={edita} width="25" height="25" alt="edita" /></td>
                                        <td><img src={excluir} id={dados._id} width="25" height="25" alt="excluir" /></td></>}
                                </>
                                :
                                <><td><img src={verificar} id={dados.treinos[tabelaN]._id} onClick={EditUserTreino} width="25" height="25" alt="verificar" /></td>
                                    <td><img src={cancelar} onClick={() => setEditar("")} width="25" height="25" alt="cancelar" /></td></>
                            }
                            <td><img src={treino} id={dados._id} onClick={addNovoTreino} width="25" height="25" alt="treino" /></td>
                            <td style={{ display: "none" }}>{idTable++}</td>
                        </tr>
                    ))}

                </table>
            </div>
        </>
    );
}

//const [show, setShow] = useState(false);
//<Toast onClose={() => setShow(false)} show={show} delay={4000} autohide>Alterações salvas</Toast>