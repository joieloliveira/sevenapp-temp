import React, { useContext, useState } from "react";
import "./style.css";

import { Tab } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import SideBar from "../../components/sidebar/SideBar";
import TopNavBar from "../../components/topNavBar/TopNavBar";
import Fisica from "../../components/tabelas/Fisica";
import Academico from "../../components/tabelas/Academico";
import Ingles from "../../components/tabelas/Ingles";
import Tecnica from "../../components/tabelas/Tecnica";
import Treinos from "../../components/tabelas/Treinos";
import ButtonAddNovoAtleta from "../../components/addNovoAtleta/ButtonAddNovoAtleta";
import ModalAddNovoAtleta from "../../components/modalAddNovoAtleta/ModalAddNovoAtleta";
import ButtonLink from "../../components/buttons/ButtonLink";

import { Context } from '../../Context/AuthContext';

export const Home = () => {

    const { sidebarIsOpen, modalAddNovoAtleta, setModalAddNovoAtleta } = useContext(Context);

    return (
        <div style={{ display: "flex", width: "100%" }}>
            
            <SideBar isOpen={sidebarIsOpen} home={"#c2ff47"}/>

            <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                <ModalAddNovoAtleta
                    show={modalAddNovoAtleta}
                    onHide={() => setModalAddNovoAtleta(false)}
                />
                <div style={{ display: "flex" }}>
                    <Link to="#" style={{ textDecoration: "none" }}>
                        <ButtonLink link={"Seven Sub 19"} style={{ width: 190, color: "black", backgroundColor: "#C2FF47" }} />
                    </Link>
                    <Link to="#" style={{ textDecoration: "none" }}>
                        <ButtonLink link={"Seven Sub 17"} style={{ width: 180, color: "#ffffff", backgroundColor: "#1E2024" }} />
                    </Link>
                </div>
                <TopNavBar />
                <ButtonAddNovoAtleta />
                <Fisica />
                <Academico />
                <Ingles />
                <Tecnica />
                <Treinos />
            </div>

        </div>
    );
};

export default Home;
