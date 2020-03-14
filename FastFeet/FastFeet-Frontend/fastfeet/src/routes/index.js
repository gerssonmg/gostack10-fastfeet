import React from 'react';
import { Switch } from 'react-router-dom';

import RouteCustomComponent from './Route';

import Login from '../pages/Login';
import Encomendas from '../pages/Encomendas';
import Entregadores from '../pages/Entregadores';
import Destinatarios from '../pages/Destinatarios';
import Problemas from '../pages/Problemas';

export default function Routes() {
  console.tron.log('ROUTES');
  return (
    <Switch>
      <RouteCustomComponent
        path="/encomendas"
        exact
        component={Encomendas}
        login={false}
      />
      <RouteCustomComponent
        path="/entregadores"
        exact
        component={Entregadores}
        login={false}
      />
      <RouteCustomComponent
        path="/destinatarios"
        exact
        component={Destinatarios}
        login={false}
      />
      <RouteCustomComponent
        path="/problemas"
        exact
        component={Problemas}
        login={false}
      />
      <RouteCustomComponent path="/sair" exact component={Login} login />
      <RouteCustomComponent path="/" component={Login} login />
    </Switch>
  );
}
