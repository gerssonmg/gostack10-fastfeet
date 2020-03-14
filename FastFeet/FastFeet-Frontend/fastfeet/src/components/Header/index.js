import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/fastfeet_logo.svg';
import { Content, Profile } from './styles';

export default function Header({ pagina }) {
  return (
    <Content>
      <nav>
        <Link to="/encomendas">
          <img src={logo} alt="GoBarber" />
        </Link>
        <Link to="/encomendas">ENCOMENDAS</Link>
        <Link to="/entregadores">ENTREGADORES</Link>
        <Link to="/destinatarios">DESTINATARIOS</Link>
        <Link to="/problemas">PROBLEMAS</Link>
      </nav>

      <aside>
        <Profile>
          <div>
            <strong>Admin FastFeet</strong>
            <Link to="/">sair do sistema</Link>
          </div>
        </Profile>
      </aside>
    </Content>
  );
}
