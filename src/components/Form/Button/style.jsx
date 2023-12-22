import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
`;

export const ButtonContent = styled.button`
  background: #5e2bff;
  border: 1px solid transparent;
  margin: 0.6rem;
  padding: 12px;
  border-radius: 6px;
  color: #fff;
  outline: none;
  cursor: pointer;
  &:focus,
  :hover {
    transition: 0.3s;
    background: #a487ff;
    color: #28136d;
  }
`;
