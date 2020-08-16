/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

// import api from '../../services/api';

import { FaArrowRight } from 'react-icons/fa';
import Container from '../../components/Container';
import { Body, SubmitButton, Form } from './styles';

export default class Login extends Component {
  handleSubmit = async (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <Container>
        <Body>
          <h1>Login</h1>
          <Form onSubmit={this.handleSubmit}>
            <input type="text" />
            <input type="password" />
            <SubmitButton>
              Entrar
              <FaArrowRight style={{ marginLeft: '5px' }} />
            </SubmitButton>
          </Form>
        </Body>
      </Container>
    );
  }
}
