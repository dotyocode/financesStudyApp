import React from 'react';

import { Container, Categorys, Icon } from './styles';

interface Props {
  title: string;
  onPress: () => void;
}

export function CategorySelectButton({ title, onPress }: Props) {
  return (
    <Container onPress={onPress}>
      <Categorys>{title}</Categorys>
      <Icon name="chevron-down" />
    </Container>
  )
}