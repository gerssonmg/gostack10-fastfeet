import React from 'react';

import { Container, PageHeader, PageOptions, ProductTable } from './styles';

import TitlePage from '../../components/TitlePage';
import InputPage from '../../components/InputPage';
import BottomPage from '../../components/BottomPage';

export default function Problemas() {
  return (
    <Container>
      <PageHeader>
        <TitlePage title="Problemas na entrega" />
      </PageHeader>
      <ProductTable>
        <thead>
          <tr>
            <th>Encomenda</th>
            <th>Problema</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#01</td>
            <td>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, Donec in
              mauris et felis eleifedn elementum vel quis lectus..
            </td>
            <td>...</td>
          </tr>

          <tr>
            <td>#01</td>
            <td>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, Donec in
              mauris et felis eleifedn elementum vel quis lectus..
            </td>
            <td>...</td>
          </tr>

          <tr>
            <td>#01</td>
            <td>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, Donec in
              mauris et felis eleifedn elementum vel quis lectus..
            </td>
            <td>...</td>
          </tr>

          <tr>
            <td>#01</td>
            <td>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, Donec in
              mauris et felis eleifedn elementum vel quis lectus..
            </td>
            <td>...</td>
          </tr>

          <tr>
            <td>#01</td>
            <td>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, Donec in
              mauris et felis eleifedn elementum vel quis lectus..
            </td>
            <td>...</td>
          </tr>
        </tbody>
      </ProductTable>
    </Container>
  );
}
