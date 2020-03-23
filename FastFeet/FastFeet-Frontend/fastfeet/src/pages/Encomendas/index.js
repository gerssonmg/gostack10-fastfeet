import React from 'react';

import { Link } from 'react-router-dom';
import { Container, PageHeader, PageOptions, ProductTable } from './styles';

import TitlePage from '../../components/TitlePage';
import InputPage from '../../components/InputPage';
import BottomPage from '../../components/BottomPage';
import Notification from '../../components/Notifications';

export default function Encomendas() {
  return (
    <Container>
      <PageHeader>
        <TitlePage title="Gerenciando encomendas" />
        <PageOptions>
          <InputPage search="Buscar por encomenda" />
          <Link to="/editar/encomenda">
            <BottomPage />
          </Link>
        </PageOptions>
      </PageHeader>
      <ProductTable>
        <thead>
          <tr>
            <th>ID</th>
            <th>Destinatário</th>
            <th>Entregador</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#01</td>
            <td>Ludwing van Beethoven</td>
            <td>JD John Doe</td>
            <td>Rio do Sul</td>
            <td>Santa Catarina</td>
            <td>* Entregue</td>
            <td>
              <Notification />
            </td>
          </tr>

          <tr>
            <td>#01</td>
            <td>Ludwing van Beethoven</td>
            <td>JD John Doe</td>
            <td>Rio do Sul</td>
            <td>Santa Catarina</td>
            <td>* Entregue</td>
            <td>
              <Notification />
            </td>
          </tr>

          <tr>
            <td>#01</td>
            <td>Ludwing van Beethoven</td>
            <td>JD John Doe</td>
            <td>Rio do Sul</td>
            <td>Santa Catarina</td>
            <td>* Entregue</td>
            <td>
              <Notification />
            </td>
          </tr>

          <tr>
            <td>#01</td>
            <td>Ludwing van Beethoven</td>
            <td>JD John Doe</td>
            <td>Rio do Sul</td>
            <td>Santa Catarina</td>
            <td>* Entregue</td>
            <td>
              <Notification />
            </td>
          </tr>

          <tr>
            <td>#01</td>
            <td>Ludwing van Beethoven</td>
            <td>JD John Doe</td>
            <td>Rio do Sul</td>
            <td>Santa Catarina</td>
            <td>* Entregue</td>
            <td>
              <Notification />
            </td>
          </tr>
        </tbody>
      </ProductTable>
    </Container>
  );
}
