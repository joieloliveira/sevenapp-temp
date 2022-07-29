import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Context } from '../Context/AuthContext';

import { Home } from '../pages/Home';
import PageUsers from '../pages/PageUsers';
import PageExcluidos from '../pages/PageExcluidos';

function CustomRoute({ isPrivate, ...rest }) {
    const { authenticated } = useContext(Context);

    if (isPrivate && !authenticated) {
        return <Redirect to="/" />
    }
    return <Route { ...rest} />
}

export default function RoutesAdm() {
    return (
        <Switch>
            <CustomRoute exact path="/" component={Home} />
            <CustomRoute exact path="/users" component={PageUsers} />
            <CustomRoute exact path="/excluidos" component={PageExcluidos} />
            
        </Switch>
    );
};
//<CustomRoute isPrivate path="/perfil-curriculo" component={Perfil_curriculo} />