import React from 'react';
import { Global, css } from '@emotion/core';

function GlobalStyles() {
  return (
    <Global
      styles={css`
        body {
          mmargin: 0;
          height: 100vh;
          background-image: linear-gradient(to bottom right, #1cfafa, #050505);
          font-family: 'Roboto', sans-serif;
        }
      `}
    />
  );
}
export default GlobalStyles;
