import React from 'react';
import styled from '@emotion/styled';
import Logo from './Logo';
import Title from './Title';
import SwitchModeIcon from './SwitchIcon';

const Header = styled.header`
  display: flex;
  justify-content: flex-end;

  height: 80px;
  color: white;
  text-transform: uppercase;
  margin: 10px;
`;

const ChangeColorButton = styled.button`
  margin-top: 15px;
`;

function AppHeader({ ChangeColorButtonClick }) {
  return (
    <Header>
      <ChangeColorButton onClick={ChangeColorButtonClick}>
        <SwitchModeIcon />
      </ChangeColorButton>
      <Title>Your voting</Title>
      <Logo />
    </Header>
  );
}
export default AppHeader;
