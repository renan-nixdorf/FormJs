import React from 'react';
import { Section, Content } from './style';

const Container = ({ children }) => {
  return (
    <Section>
      <Content>{children}</Content>
    </Section>
  );
};

export default Container;
