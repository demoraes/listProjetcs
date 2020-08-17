/* eslint-disable no-throw-literal */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaPlus, FaStar, FaCircle, FaSpinner } from 'react-icons/fa';

import api from '../../services/api';

import Container from '../../components/Container';
import { Owner, Form, SubmitButton, Header, List, Body } from './styles';

export default class Main extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        user: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    newRepo: '',
    repositories: [],
    user: '',
    loading: false,
    error: null,
  };

  componentDidMount = async () => {
    const { match } = this.props;
    const { user } = match.params;

    const response = await api.get(`/users/${user}`);
    // pegar name e bio

    const data = {
      name: response.data.name,
      bio: response.data.bio,
      avatar_url: response.data.avatar_url,
    };

    this.setState({
      user: data,
    });

    const repositories = localStorage.getItem('repositories');

    if (repositories) {
      this.setState({ repositories: JSON.parse(repositories) });
    }
  };

  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;

    if (prevState.repositories !== repositories) {
      localStorage.setItem('repositories', JSON.stringify(repositories));
    }
  }

  handleInputChange = (e) => {
    this.setState({ newRepo: e.target.value, error: null });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    this.setState({ loading: true, error: false });

    try {
      const { newRepo, repositories } = this.state;

      if (newRepo === '') throw 'Precisa indicar um repositorio';

      const hasRepo = repositories.find((r) => r.full_name === newRepo);

      if (hasRepo) throw 'Repositório duplicado';

      const response = await api.get(`/repos/${newRepo}`);

      const data = {
        id: response.data.id,
        name: response.data.name,
        full_name: response.data.full_name,
        description: response.data.description,
        stargazers_count: response.data.stargazers_count,
        language: response.data.language,
        html_url: response.data.html_url,
      };

      this.setState({
        repositories: [...repositories, data],
        newRepo: '',
      });
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { newRepo, repositories, loading, user, error } = this.state;
    console.log(user);
    return (
      <Container>
        <Header>
          <Owner>
            <img src={user.avatar_url} alt={user.avatar_url} />
            <div>
              <span>{user.name}</span>
              <p>{user.bio}</p>
            </div>
          </Owner>
          <Form onSubmit={this.handleSubmit} error={error}>
            <input
              type="text"
              placeholder="Adicionar repositórios"
              value={newRepo}
              onChange={this.handleInputChange}
            />

            <SubmitButton loading={loading}>
              {loading ? (
                <FaSpinner color="#fff" size={14} />
              ) : (
                <FaPlus color="#fff" size={14} />
              )}
            </SubmitButton>
          </Form>
        </Header>
        <Body>
          {repositories.map((repository) => (
            <List key={repository.id}>
              <a href={repository.html_url}>
                <h1>{repository.name}</h1>
              </a>
              <p>{repository.description}</p>
              <div>
                <FaCircle
                  size={12}
                  color="#aaa"
                  style={{ marginRight: '0.3rem' }}
                />
                <span>{repository.language}</span>
                <FaStar
                  size={13}
                  color="#aaa"
                  style={{ marginLeft: '0.8rem', marginRight: '0.3rem' }}
                />
                <span>{repository.stargazers_count}</span>
              </div>
            </List>
          ))}
        </Body>
      </Container>
    );
  }
}
