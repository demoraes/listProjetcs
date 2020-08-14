/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { FaPlus, FaStar } from 'react-icons/fa';

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
    repositories: [],
  };

  handleInputChange = (e) => {
    this.setState({ newRepo: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { newRepo, repositories } = this.state;

    const response = await api.get(`/repos/${newRepo}`);

    const data = {
      id: response.data.id,
      name: response.data.name,
      description: response.data.description,
      stargazers_count: response.data.stargazers_count,
      language: response.data.language,
      html_url: response.data.html_url,
    };

    this.setState({
      repositories: [...repositories, data],
      newRepo: '',
    });
  };

  render() {
    const { newRepo, repositories } = this.state;
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
          {repositories.map((repository) => (
            <List key={repository.id}>
              <h1>{repository.name}</h1>
              <p>{repository.description}</p>
              <span>{repository.language}</span>
              <span>{repository.stargazers_count}</span>
            </List>
          ))}
          <List>
            <h1>Name</h1>
            <p>descrição</p>
            <span>
              lanhuage <FaStar /> 3
            </span>
          </List>
        </Body>
      </Container>
    );
  }
}
