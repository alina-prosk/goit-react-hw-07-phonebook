import styled from 'styled-components';

export const StyledForm = styled.form`
  background-color: #c7bea2;
  display: flex;
  gap: 20px;
  align-items: flex-end;
  flex-basis: 33%;
  justify-content: space-between;
  flex-wrap: wrap;
  border: 2px solid grey;
  margin-bottom: 20px;
  border-radius: 5px;
  padding: 20px;
  /* border: 2px solid grey;
  margin-bottom: 20px;
  border-radius: 5px;
  padding: 15px; */
  label {
    display: block;
    margin-bottom: 10px;
  }
  input {
    display: block;
    height: 25px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #c7bea2;
    outline: none;
    &:focus {
      border: 1px solid #9a9483;
    }
  }
  button {
    display: block;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #9a9483;
    background-color: #9a9483;
    color: #e5dcc3;
    cursor: pointer;
    transition: ease-in 200ms;
    :hover {
      border: 1px solid #e5dcc3;
      background-color: #e5dcc3;
      color: #9a9483;
    }
  }
`;
