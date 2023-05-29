// import styled from '@emotion/styled';
import { Global, css } from '@emotion/react';

export const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        body {
          font-family: 'Arial', sans-serif;
          color: white;
          background-color: #141414;
        }
      `}
    />
  );
};
