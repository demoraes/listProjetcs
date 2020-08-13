import React from 'react';
import { FaPlus } from 'react-icons/fa';

import { Container, Owner, Form, SubmitButton, Header } from './styles';

function Main() {
  return (
    <Container>
      <Header>
        <Owner>
          <div>
            <img
              src="https://ogimg.infoglobo.com.br/cultura/24236924-ca1-ab2/FT1086A/652/86876180_Brazils-President-Jair-Bolsonaro-looks-on-during-a-ceremony-marking-his-400-days-in-of.jpg"
              alt=""
            />
            <span>name</span>
            <span>descrição</span>
          </div>
        </Owner>
        <Form>
          <input type="text" />
          <SubmitButton>
            <FaPlus color="#fff" size={14} />
          </SubmitButton>
        </Form>
      </Header>
    </Container>
  );
}

export default Main;
