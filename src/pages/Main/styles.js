import styled from 'styled-components';

export const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Container = styled.div`
  max-width: 80%;
  background: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 10, 0.1);
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
    color: #4a4a4a;
    font-weight: bold;
    display: flex;
    align-items: end;
  }

  p {
    display: flex;
    justify-items: start;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: end;
  align-items: end;

  input {
    border: 1px solid #eee;
    padding: 12.5px;
    transition: border 0.25s ease-out;
  }
`;

export const SubmitButton = styled.button`
  background: #11275f;
  width: 50px;
  border: 0;
  color: #fff;
  padding: 15px;
  cursor: pointer;
  margin-left: 15px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const List = styled.div``;
