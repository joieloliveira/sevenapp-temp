import React, { useContext } from "react";
import "./style.css";

import { Tab } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import SideBar from "../../components/sidebar/SideBar";
import TopNavBar2 from "../../components/topNavBar/TopNavBar2";
import Excluidos from "../../components/tabelas/Excluidos";
import ButtonAddNovoAtleta from "../../components/addNovoAtleta/ButtonAddNovoAtleta";
import ModalAddNovoAtleta from "../../components/modalAddNovoAtleta/ModalAddNovoAtleta";
import ButtonLink from "../../components/buttons/ButtonLink";

import { Context } from '../../Context/AuthContext';

export default function PageExcluidos() {

    const { sidebarIsOpen, modalAddNovoAtleta, setModalAddNovoAtleta } = useContext(Context);

    return (
        <div style={{ display: "flex", width: "100%" }}>
            <SideBar isOpen={sidebarIsOpen} excluidos={"#c2ff47"}/>

            <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                <div style={{ display: "flex" }}>
                    <Link to="#" style={{ textDecoration: "none" }}>
                        <ButtonLink link={"Seven Sub 19"} style={{ width: 190, color: "black", backgroundColor: "#C2FF47" }} />
                    </Link>
                    <Link to="#" style={{ textDecoration: "none" }}>
                        <ButtonLink link={"Seven Sub 17"} style={{ width: 180, color: "#ffffff", backgroundColor: "#1E2024" }} />
                    </Link>
                </div>
                <TopNavBar2 />
                <Excluidos />
            </div>

        </div>
    );
};
