import styled from 'styled-components';

export const Form = styled.form`
  padding: 40px;
  background: #11275f;

  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;

  h1 {
    display: flex;
    grid-column: 2;
    justify-content: center;
    align-items: end;

    margin-bottom: 5px;
    font-weight: lighter;
    color: #eee;
  }

  input {
    border: 2px solid #aaa;
    margin-top: 10px;
    padding: 8px 15px;

    display: flex;
    grid-column: 2;
    justify-content: center;
  }
`;
export const SubmitButton = styled.button`
  display: flex;
  grid-column: 2;
  justify-content: center;
  margin-top: 10px;

  padding: 13px 15px;
  border: 2px solid #eee;
  color: #fff;
  background: #11275f;
  cursor: pointer;

  &:hover {
    border: 2px solid #cfcfcf;
    transition: border 0.25s ease-out;
  }
`;
