import React from 'react';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { MdInsertPhoto } from 'react-icons/md';
import { Container, PageHeader, PageOptions, Content } from './styles';

// MdInsertPhoto
// react-icons/lib/md/insert-photo

import TitlePage from '../../components/TitlePage';
// import InputPage from '../../components/InputPage';
import BottomPage from '../../components/BottomPage';

import logo from '../../assets/fastfeet_logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail valido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});
export default function Problemas() {
  return (
    <Container>
      <PageHeader>
        <TitlePage title="Cadastro de entregadores" />
        <PageOptions>
          <BottomPage name="VOLTAR" />
          <BottomPage name="SALVAR" />
        </PageOptions>
      </PageHeader>
      <Content>
        <div>
          <nav>
            <MdInsertPhoto />
            <p>Adicionar foto</p>
          </nav>
        </div>

        <Form schema={schema}>
          <p>Nome</p>
          <Input name="text" type="text" placeholder="John Doe" />

          <p>Email</p>
          <Input name="email" type="email" placeholder="exemplo@email.com" />
        </Form>
      </Content>
    </Container>
  );
}
