import React from 'react';

import { Link } from 'react-router-dom';
import { Container, PageHeader, PageOptions, ProductTable } from './styles';

import TitlePage from '../../components/TitlePage';
import InputPage from '../../components/InputPage';
import BottomPage from '../../components/BottomPage';

export default function Entregadores() {
  return (
    <Container>
      <PageHeader>
        <TitlePage title="Gerenciando entregadores" />
        <PageOptions>
          <InputPage search="Buscar por entregadores" />
          <Link to="/cadastro/entregadores">
            <BottomPage />
          </Link>
        </PageOptions>
      </PageHeader>
      <ProductTable>
        <thead>
          <tr>
            <th>ID</th>
            <th>Foto</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#01</td>
            <td>JD</td>
            <td>John Doe</td>
            <td>example@rocketseat.com</td>
            <td>:</td>
          </tr>

          <tr>
            <td>#01</td>
            <td>JD</td>
            <td>John Doe</td>
            <td>example@rocketseat.com</td>
            <td>:</td>
          </tr>

          <tr>
            <td>#01</td>
            <td>JD</td>
            <td>John Doe</td>
            <td>example@rocketseat.com</td>
            <td>:</td>
          </tr>

          <tr>
            <td>#01</td>
            <td>JD</td>
            <td>John Doe</td>
            <td>example@rocketseat.com</td>
            <td>:</td>
          </tr>

          <tr>
            <td>#01</td>
            <td>JD</td>
            <td>John Doe</td>
            <td>example@rocketseat.com</td>
            <td>:</td>
          </tr>
        </tbody>
      </ProductTable>
    </Container>
  );
}
