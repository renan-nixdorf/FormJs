import styled from 'styled-components';

export const Section = styled.section`
  display: grid;
  height: 100vh;
  place-content: center;
`;

export const Content = styled.section`
  justify-content: center;
  width: 450px;
  padding: 0.6rem;
  border-radius: 0.6rem;
  background: #fff;
  @media (max-width: 768px) {
    width: 400px;
  }
  @media (max-width: 425px) {
    width: 260px;
  }
`;
