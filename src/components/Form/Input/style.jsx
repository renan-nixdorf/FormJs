import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  padding: 10px;
  gap: 0.2rem;
  label {
    color: #828282;
  }
`;

export const InputContent = styled.input`
  padding: 0.75rem 1.75rem;
  color: #28136d;
  background: #f1f2f6;
  border-radius: 6px;
  outline: none;
  border: 2px solid #b6b6b6;
  &:focus,
  :hover {
    border: 2px solid #a487ff;
  }
  ::placeholder {
    color: #b6b6b6;
  }
  @media (max-width: 768px) {
    padding: 0.55rem 1.65rem;
  }
  @media (max-width: 425px) {
    padding: 0.5rem 1.6rem;
  }
`;
