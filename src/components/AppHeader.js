import React from 'react';
import styled from '@emotion/styled';
import Logo from './Logo';
import Title from './Title';

const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  height: 80px;
  color: white;
  padding: 10px 20px;
  text-transform: uppercase;
`;

function AppHeader() {
  return (
    <Header>
      <Title>Your voting</Title>
      <Logo />
    </Header>
  );
}
export default AppHeader;
