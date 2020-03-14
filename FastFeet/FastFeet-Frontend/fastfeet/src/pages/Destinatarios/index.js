import React from 'react';

import { Container, PageHeader, PageOptions, ProductTable } from './styles';

import TitlePage from '../../components/TitlePage';
import InputPage from '../../components/InputPage';
import BottomPage from '../../components/BottomPage';

export default function Destinatarios() {
  return (
    <Container>
      <PageHeader>
        <TitlePage title="Gerenciando destinatários" />
        <PageOptions>
          <InputPage search="Buscar por destinatários" />
          <BottomPage />
        </PageOptions>
      </PageHeader>
      <ProductTable>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Endereço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#01</td>
            <td>Ludwing van Beethoven</td>
            <td>Rua Beethoven, 1729, Diadema - São Paulo</td>
            <td>:</td>
          </tr>

          <tr>
            <td>#01</td>
            <td>Ludwing van Beethoven</td>
            <td>Rua Beethoven, 1729, Diadema - São Paulo</td>
            <td>:</td>
          </tr>

          <tr>
            <td>#01</td>
            <td>Ludwing van Beethoven</td>
            <td>Rua Beethoven, 1729, Diadema - São Paulo</td>
            <td>:</td>
          </tr>

          <tr>
            <td>#01</td>
            <td>Ludwing van Beethoven</td>
            <td>Rua Beethoven, 1729, Diadema - São Paulo</td>
            <td>:</td>
          </tr>

          <tr>
            <td>#01</td>
            <td>Ludwing van Beethoven</td>
            <td>Rua Beethoven, 1729, Diadema - São Paulo</td>
            <td>:</td>
          </tr>
        </tbody>
      </ProductTable>
    </Container>
  );
}
