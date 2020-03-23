import React from 'react';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { MdInsertPhoto } from 'react-icons/md';
import { Container, PageHeader, PageOptions, Content } from './styles';

// MdInsertPhoto
// react-icons/lib/md/insert-photo

import TitlePage from '../../components/TitlePage';
// import InputPage from '../../components/InputPage';
import BottomPage from '../../components/BottomPage';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail valido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});
export default function EditarEncomenda() {
  return (
    <Container>
      <PageHeader>
        <TitlePage title="Editar Encomenda" />
        <PageOptions>
          <BottomPage name="VOLTAR" />
          <BottomPage name="SALVAR" />
        </PageOptions>
      </PageHeader>
      <Content>
        <Form schema={schema}>
          <ul>
            <li>
              <div>
                <p>Destinatario</p>
                <Input
                  name="destinatario"
                  type="text"
                  placeholder="Ludwing van Beethoven"
                />
              </div>
              <div>
                <p>Entregador</p>
                <Input name="entregador" type="text" placeholder="John Doe" />
              </div>
            </li>
            <li>
              <div>
                <p>Nome do produto</p>
                <Input name="produto" type="text" placeholder="Yamaha SX7" />
              </div>
            </li>
          </ul>
        </Form>
      </Content>
    </Container>
  );
}
