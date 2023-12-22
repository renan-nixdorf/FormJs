import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './style';

const LinkRoute = ({ route, children }) => {
  return (
    <Container>
      <Link to={route}>{children}</Link>
    </Container>
  );
};

export default LinkRoute;
