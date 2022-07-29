import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import logo7 from '../../img/img/Logo_SevenAcademy-061.png';

import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";

const SideBar = ({ isOpen, toggle, home, users, excluidos }) => (
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="sidebar-header">
      <img src={logo7} alt="logo7" />
    </div>
    <div className="side-menu slideBar">
      <Nav vertical className="list-unstyled pb-3">
        <Link to={"/"}>
          <button style={{color: home}}>Dados</button>
        </Link>
        <Link to={"/users"}>
          <button style={{color: users}}>Atletas</button>
        </Link>
        <Link to={"/"}>
          <button>Treinadores</button>
        </Link>
        <Link to={"/"}>
          <button>Treinadores</button>
        </Link>
        <Link to={"/"}>
          <button>Turmas</button>
        </Link>
        <Link to={"/excluidos"}>
          <button style={{color: excluidos}}>Perfis excluidos</button>
        </Link>
      </Nav>
    </div>
  </div>
);

export default SideBar;
