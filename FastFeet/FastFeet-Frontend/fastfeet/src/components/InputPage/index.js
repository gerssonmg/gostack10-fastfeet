import React from 'react';

import { MdSearch } from 'react-icons/md';
import { Container } from './styles';

export default function InputPage() {
  return (
    <Container>
      <MdSearch />
      <input type="text" placeholder="Buscar por encomendas" />
    </Container>
  );
}
