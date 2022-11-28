import styled from 'styled-components';

export const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  padding: 20px;
  background-color: #c7bea2;
  border-radius: 5px;
  transition: ease-in 100ms;
  &:hover {
    background-color: #e5dcc3;
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
      border: 1px solid #000;
      background-color: #e5dcc3;
      color: #9a9483;
    }
  }
`;
