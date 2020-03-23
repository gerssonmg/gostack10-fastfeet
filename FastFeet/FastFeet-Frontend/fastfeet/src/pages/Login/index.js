import React from 'react';
import { Link } from 'react-router-dom';

import { Form, Input } from '@rocketseat/unform';

import * as Yup from 'yup';
import logo from '../../assets/fastfeet_logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail valido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function Login() {
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema}>
        <p>SEU E-MAIL</p>
        <Input name="email" type="email" placeholder="exemplo@email.com" />

        <p>SUA SENHA</p>
        <Input name="password" type="password" placeholder="*************" />
        <Link to="/encomendas">
          <button type="submit">Entrar no sistema</button>
        </Link>
      </Form>
    </>
  );
}
