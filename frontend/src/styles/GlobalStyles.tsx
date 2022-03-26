import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /** Colors **/
  body[data-theme='main'] {
    /* Primary */
    --clr-primary-100: #D0D9F6;
    --clr-primary-200: #A1B3ED;
    --clr-primary-300: #738EE3;
    --clr-primary-400: #4468DA;
    --clr-primary-500: #1542D1;
    --clr-primary-600: #1135A7;
    --clr-primary-700: #0D287D;
    --clr-primary-800: #081A54;
    --clr-primary-900: #040D2A;

    /* Grayscale */
    --clr-gray-50: #F9FAFB;
    --clr-gray-100: #F3F4F6;
    --clr-gray-200: #E5E7EB;
    --clr-gray-300: #D1D5DB;
    --clr-gray-400: #9CA3AF;
    --clr-gray-500: #6B7280;
    --clr-gray-600: #4B5563;
    --clr-gray-700: #374151;
    --clr-gray-800: #1F2937;
    --clr-gray-900: #111827;

    /* Utility */
    --clr-danger: #F63939;
  }

  * {
    box-sizing: border-box;
  }

  h1,h2,h3,h4,h5,p{
    margin: 0
  }

  p {
    padding: 0;
    margin: 0
  }

  body {
    padding: 0;
    margin: 0;
  }

  ul {
    padding: 0;
  }

  a {
    text-decoration: none
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

`;

export default GlobalStyles;
