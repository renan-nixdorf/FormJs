import React from 'react';
import { ButtonContent, Container } from './style';

const Button = ({ children }) => {
  return (
    <Container>
      <ButtonContent>{children}</ButtonContent>
    </Container>
  );
};

export default Button;
