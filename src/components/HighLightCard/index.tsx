import React from 'react';
import {
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Quantidade,
  LastTransition
} from './styles';

interface Props {
  type: 'up' | 'down' | 'total';
  title: String;
  amount: String;
  lastTransition: String;
}

const icon: any = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
  total: 'dollar-sign'
}

export function HighLightCard({
  type,
  title,
  amount,
  lastTransition,
}: Props) {
  return (
    <Container type={type}>
      <Header>
        <Title type={type}>{title}</Title>
        <Icon name={icon[type]} type={type} />
      </Header>
      <Footer>
        <Quantidade type={type}>{amount}</Quantidade>
        <LastTransition type={type}>{lastTransition}</LastTransition>
      </Footer>
    </Container>
  )
}