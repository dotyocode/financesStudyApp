import React from 'react'
import { HighLightCard } from '../../components/HighLightCard'
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard'

import {
  Container,
  Header,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  UsarContainer,
  Icon,
  HighLightCards,
  Transactions,
  Title,
  TransactionList
} from './styled'

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {

  const data: DataListProps[] = [{
    id: '1',
    type: 'positive',
    title: 'Desenvolvimento de Site',
    amount: 'R$12.000,00',
    category: {
      name: 'Vendas',
      icon: 'dollar-sign'
    },
    date: '15/05/2022'
  },
  {
    id: '2',
    type: 'negative',
    title: 'Hamburgueria Manolex',
    amount: 'R$69,00',
    category: {
      name: 'Alimentação',
      icon: 'coffee'
    },
    date: '11/05/2022'
  },
  {
    id: '3',
    type: 'negative',
    title: 'Aluguel do Apartamento',
    amount: 'R$1.200,00',
    category: {
      name: 'Casa',
      icon: 'shopping-bag'
    },
    date: '23/03/2022'
  }];

  return (
    <Container>
      <Header>
        <UsarContainer>
          <UserInfo>
            <Photo
              source={{ uri: 'https://avatars.githubusercontent.com/u/79417801?v=4' }}
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Jhonathan</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UsarContainer>
      </Header>
      <HighLightCards >
        <HighLightCard
          type="up"
          title={'Entradas'}
          amount={'R$17.400.00'}
          lastTransition={'Última entrada dia 13 de abril'}
        />
        <HighLightCard
          type="down"
          title={'Saidas'}
          amount={'R$1.259.00'}
          lastTransition={'Última saida dia 22 de abril'}
        />
        <HighLightCard
          type="total"
          title={'Total'}
          amount={'R$16.141.00'}
          lastTransition={'01 a 15 abril'}
        />
      </HighLightCards>
      <Transactions>
        <Title>Listagem</Title>
        <TransactionList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  )
}
