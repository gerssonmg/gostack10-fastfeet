import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/fastfeet_logo.svg';
import { Content, Profile } from './styles';

export default function Header({ pagina }) {
  return (
    <Content>
      <nav>
        <img src={logo} alt="GoBarber" />
        <Link to="/encomendas">Encomendas</Link>....
        <Link to="/entregadores">Entregadores</Link>....
        <Link to="/destinatarios">Destinatarios</Link>....
        <Link to="/problemas">Problemas</Link>....
      </nav>

      <aside>
        <Profile>
          <div>
            <strong>Admin FastFeet</strong>
            <Link to="/">sair do sistema</Link>
          </div>
          <img
            src="https://api.adorable.io/avatars/50/abott@adorable.png"
            alt="Diego Fernandes"
          />
        </Profile>
      </aside>
    </Content>
  );
}
