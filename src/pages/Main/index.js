/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';

import api from '../../services/api';

import {
  Container,
  Owner,
  Form,
  SubmitButton,
  Header,
  List,
  Body,
} from './styles';

export default class Main extends Component {
  state = {
    newRepo: '',
  };

  handleInputChange = (e) => {
    this.setState({ newRepo: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { newRepo } = this.state;

    const response = await api.get(`/repos/${newRepo}`);

    console.log(response);
  };

  render() {
    const { newRepo } = this.state;
    return (
      <Container>
        <Header>
          <Owner>
            <img
              src="https://ogimg.infoglobo.com.br/cultura/24236924-ca1-ab2/FT1086A/652/86876180_Brazils-President-Jair-Bolsonaro-looks-on-during-a-ceremony-marking-his-400-days-in-of.jpg"
              alt=""
            />
            <div>
              <span>Demoraes</span>
              <p>Descrição</p>
            </div>
          </Owner>
          <Form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Adicionar repositórios"
              value={newRepo}
              onChange={this.handleInputChange}
            />
            <SubmitButton>
              <FaPlus color="#fff" size={14} />
            </SubmitButton>
          </Form>
        </Header>
        <Body>
          <List>
            <h1>Name</h1>
            <span>Description</span>
          </List>
        </Body>
      </Container>
    );
  }
}
