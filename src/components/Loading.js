import React from 'react';
import styled from '@emotion/styled';

const Heart = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  transform: rotate(45deg);
  transform-origin: 40px 40px;

  div {
    top: 32px;
    left: 32px;
    position: absolute;
    width: 32px;
    height: 32px;
    background: #fff;
    animation: lds-heart 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
  }
`;

const Loading = () => {
  return (
    <Heart>
      <div />
      <div />
    </Heart>
  );
};

export default Loading;
