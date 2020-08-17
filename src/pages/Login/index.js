import React, { useState } from 'react';

import { FaArrowRight } from 'react-icons/fa';

import api from '../../services/api';

import Container from '../../components/Container';
import { SubmitButton, Form } from './styles';

export default function Login({ history }) {
  const [login, setLogin] = useState('');

  async function handleInputChangeLogin(e) {
    setLogin(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.get(`/users/${login}`);

    history.push(`/main/${login}`);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Login</h1>

        <input
          type="text"
          placeholder="Seu usuário do github"
          value={login}
          onChange={handleInputChangeLogin}
        />

        <SubmitButton>
          Entrar
          <FaArrowRight style={{ marginLeft: '5px' }} />
        </SubmitButton>
      </Form>
    </Container>
  );
}
