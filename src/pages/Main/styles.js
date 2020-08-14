import styled from 'styled-components';

export const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Container = styled.div`
  max-width: 80%;
  background: #eee;
  box-shadow: 0 0 20px rgba(0, 0, 10, 0.5);
  padding: 30px;
  margin: 80px auto;
`;

export const Owner = styled.div`
  display: flex;
  justify-content: start;
  align-items: end;

  img {
    width: 100px;
    height: 100px;
    border-radius: 5px;
  }

  span {
    font-size: 25px;
    color: #000;
    font-weight: bold;
    margin-left: 10px;
  }

  p {
    margin-left: 10px;
    color: #000;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: end;
  align-items: end;

  input {
    border: 1px solid #eee;
    padding: 13px;
    transition: border 0.25s ease-out;
  }
`;

export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  background: #11275f;
  border: 0;
  color: #fff;
  padding: 15px;
  cursor: pointer;
  margin-left: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const List = styled.div``;
