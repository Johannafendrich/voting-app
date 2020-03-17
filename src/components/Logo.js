import React from 'react';
import styled from '@emotion/styled';
import logoVote from './Logo.png';

const Img = styled.img`
width: 40px;
height: 40px;
margin 15px;
`;

function Logo(props) {
  return <Img src={logoVote} alt="Logo" {...props} />;
}

export default Logo;
