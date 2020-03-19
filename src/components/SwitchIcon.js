import React from 'react';
import styled from '@emotion/styled';
import SwitchIcon from '../components/SwitchButtonIcon.png';

const Img = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 200px;
`;

function SwitchModeIcon() {
  return <Img src={SwitchIcon} alt="SwitchColorModeIcon" />;
}

export default SwitchModeIcon;
