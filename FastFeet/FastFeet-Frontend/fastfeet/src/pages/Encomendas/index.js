import React from 'react';

import { Container, PageHeader, PageOptions, ProductTable } from './styles';

import TitlePage from '../../components/TitlePage';
import InputPage from '../../components/InputPage';
import BottomPage from '../../components/BottomPage';

export default function Encomendas() {
  return (
    <Container>
      <PageHeader>
        <TitlePage />
        <PageOptions>
          <InputPage />
          <BottomPage />
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
            <td>...</td>
          </tr>

          <tr>
            <td>#01</td>
            <td>Ludwing van Beethoven</td>
            <td>JD John Doe</td>
            <td>Rio do Sul</td>
            <td>Santa Catarina</td>
            <td>* Entregue</td>
            <td>...</td>
          </tr>

          <tr>
            <td>#01</td>
            <td>Ludwing van Beethoven</td>
            <td>JD John Doe</td>
            <td>Rio do Sul</td>
            <td>Santa Catarina</td>
            <td>* Entregue</td>
            <td>...</td>
          </tr>

          <tr>
            <td>#01</td>
            <td>Ludwing van Beethoven</td>
            <td>JD John Doe</td>
            <td>Rio do Sul</td>
            <td>Santa Catarina</td>
            <td>* Entregue</td>
            <td>...</td>
          </tr>

          <tr>
            <td>#01</td>
            <td>Ludwing van Beethoven</td>
            <td>JD John Doe</td>
            <td>Rio do Sul</td>
            <td>Santa Catarina</td>
            <td>* Entregue</td>
            <td>...</td>
          </tr>
        </tbody>
      </ProductTable>
    </Container>
  );
}
