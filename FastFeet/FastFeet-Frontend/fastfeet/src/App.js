import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

// import './config/ReactotronConfig';

// import Login from './pages/Login';
// import Encomendas from './pages/Encomendas';
// import Entregadores from './pages/Entregadores';
// import Destinatarios from './pages/Destinatarios';
// import Problemas from './pages/Problemas';

import RouterCustom from './routes';

import GlobalStyle from './styles/global';

function App() {
  // console.tron.log('APP');
  return (
    <BrowserRouter>
      {/*
      <Switch>
        <Route path="/encomendas" exact component={Encomendas} />
        <Route path="/entregadores" exact component={Entregadores} />
        <Route path="/destinatarios" exact component={Destinatarios} />
        <Route path="/problemas" exact component={Problemas} />
        <Route path="/sair" exact component={Login} />
        <Route path="/sair" exact component={Login} />
        <Route path="/" component={Login} />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </Switch>
   */}
      <RouterCustom />
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </BrowserRouter>
  );
}

export default App;
