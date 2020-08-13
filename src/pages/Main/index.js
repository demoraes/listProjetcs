import React from 'react';
import { FaPlus } from 'react-icons/fa';

import { Container, Owner, Form, SubmitButton, Header, List } from './styles';

function Main() {
  return (
    <Container>
      <Header>
        <Owner>
          <img
            src="https://ogimg.infoglobo.com.br/cultura/24236924-ca1-ab2/FT1086A/652/86876180_Brazils-President-Jair-Bolsonaro-looks-on-during-a-ceremony-marking-his-400-days-in-of.jpg"
            alt=""
          />
          <span>Demoraes</span>
          <p>Descrição</p>
        </Owner>
        <Form>
          <input type="text" />
          <SubmitButton>
            <FaPlus color="#fff" size={14} />
          </SubmitButton>
        </Form>
      </Header>

      <List>
        <h2>Ola</h2>
      </List>
    </Container>
  );
}

export default Main;
