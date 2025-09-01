/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const globalStyles = css`
  body {
    margin: 0;
    padding: 0;
    font-family:
      -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
      Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', 'Noto Color Emoji';
    background-color: #f8f9fa;
  }

  #root {
    display: flex;
    justify-content: center;
    min-height: 100vh;
  }
`;

export default globalStyles;
