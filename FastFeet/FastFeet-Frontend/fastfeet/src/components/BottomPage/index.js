import React from 'react';

import { MdAdd, MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { Container } from './styles';

export default function BottomPage({ name }) {
  return (
    <Container>
      {name === 'VOLTAR' ? <MdChevronLeft /> : <MdAdd />}
      <p>{name || 'CADASTRAR'}</p>
    </Container>
  );
}
