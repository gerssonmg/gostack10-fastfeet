import React from 'react';

import { MdSearch } from 'react-icons/md';
import { Container } from './styles';

export default function InputPage({ search }) {
  return (
    <Container>
      <MdSearch />
      <input type="text" placeholder={search} />
    </Container>
  );
}
