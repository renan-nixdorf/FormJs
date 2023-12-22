import React from 'react';
import { Container, InputContent } from './style';

const Input = ({ label, idvalue, onplaceholder, type, $registerValue }) => {
  return (
    <Container>
      <label htmlFor={idvalue}>{label}</label>
      <InputContent
        id={idvalue}
        name={idvalue}
        placeholder={onplaceholder}
        type={type}
        {...$registerValue}
      />
    </Container>
  );
};

export default Input;
