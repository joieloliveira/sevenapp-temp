import React, { createContext, useEffect, useState } from 'react';

import api from '../config/configApi';

const Context = createContext();

function AuthProvider({ children }) {

    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const [abaAtiva, setAbaAtiva] = useState("fisica");
    const [modalAddNovoAtleta, setModalAddNovoAtleta] = useState(false);
    const [modalCriarTreino, setModalCriarTreino] = useState(false);

    useEffect(() => {

        const getLogin = async () => {
            const token = localStorage.getItem('token');

            if (token && valUser()) {
                api.defaults.headers.Authorization = `Bearer ${(token)}`;
                setAuthenticated(true);
            };

            setLoading(false);
        }

        getLogin();
    }, []);

    const valUser = async () => {
        const valueToken = localStorage.getItem('token');

        const headers = {
            'headers': {
                'Authorization': 'Bearer ' + valueToken
            }
        }

        await api.get("v1/users/" + localStorage.getItem('id'), headers)
            .then((response) => {
                return true;
            }).catch((err) => {
                setAuthenticated(false);
                localStorage.removeItem('token');
                api.defaults.headers.Authorization = undefined;
                return false;
            });

        // await api.get("v1/auth/val-token", headers)
        //     .then((response) => {
        //         //console.log(response.data);
        //         if (response.data==true) {
        //             return true;
        //         }
        //     }).catch((response) => {
        //         if (response.data==false) {
        //             setAuthenticated(false);
        //             localStorage.removeItem('token');
        //             api.defaults.headers .Authorization = undefined;
        //             return false;
        //         }
        //     })
    }

    async function signIn(sit) {
        setAuthenticated(true);
    }

    function handleLogout() {
        setAuthenticated(false);
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        api.defaults.headers.Authorization = undefined;
    }

    if (loading) {
        return <h1>Carregando...</h1>;
    }

    return (
        <Context.Provider value={{
            authenticated, signIn, handleLogout,
            sidebarIsOpen, setSidebarOpen,
            setAbaAtiva, abaAtiva,
            modalAddNovoAtleta, setModalAddNovoAtleta,
            modalCriarTreino, setModalCriarTreino,
        }}>
            {children}
        </Context.Provider>
    );
}

export { Context, AuthProvider };