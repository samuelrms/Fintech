import { css } from '@emotion/react'

export const resetCss = css`
  *,
  body,
  div,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  img,
  footer,
  header,
  nav,
  section {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  body {
    overflow-x: hidden;
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  html {
    scroll-behavior: smooth;
  }

  a:focus,
  a:hover,
  a:active {
    text-decoration: none !important;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`
