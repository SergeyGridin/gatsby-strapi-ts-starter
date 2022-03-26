/* eslint-disable max-len */
import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
  /* Test Soehne 200 normal */
  @font-face {
    font-family: 'Test Soehne';
    font-style: normal;
    font-weight: 200;
    src: local(''),

  }

  /* Test Soehne 300 normal */
  @font-face {
    font-family: 'Test Soehne';
    font-style: normal;
    font-weight: 300;
    src: local(''),

  }

  /* Test Soehne 400 normal */
  @font-face {
    font-family: 'Test Soehne';
    font-style: normal;
    font-weight: 400;
    src: local(''),

  }

  /* Test Soehne 500 normal */
  @font-face {
    font-family: 'Test Soehne';
    font-style: normal;
    font-weight: 500;
    src: local(''),

  }

  /* Test Soehne 600 normal */
  @font-face {
    font-family: 'Test Soehne';
    font-style: normal;
    font-weight: 600;
    src: local(''),

  }

  /* Test Soehne 700 normal */
  @font-face {
    font-family: 'Test Soehne';
    font-style: normal;
    font-weight: 700;
    src: local(''),

  }

  /* Test Soehne 800 normal */
  @font-face {
    font-family: 'Test Soehne';
    font-style: normal;
    font-weight: 800;
    src: local(''),

  }

  /* Test Soehne 900 normal */
  @font-face {
    font-family: 'Test Soehne';
    font-style: normal;
    font-weight: 900;
    src: local(''),

  }

  /* Test Soehne 200 italic */
  @font-face {
    font-family: 'Test Soehne';
    font-style: italic;
    font-weight: 200;
    src: local(''),

  }

  /* Test Soehne 300 italic */
  @font-face {
    font-family: 'Test Soehne';
    font-style: italic;
    font-weight: 300;
    src: local(''),

  }

  /* Test Soehne 400 italic */
  @font-face {
    font-family: 'Test Soehne';
    font-style: italic;
    font-weight: 400;
    src: local(''),

  }

  /* Test Soehne 500 italic */
  @font-face {
    font-family: 'Test Soehne';
    font-style: italic;
    font-weight: 500;
    src: local(''),

  }

  /* Test Soehne 600 italic */
  @font-face {
    font-family: 'Test Soehne';
    font-style: italic;
    font-weight: 600;
    src: local(''),

  }

  /* Test Soehne 700 italic */
  @font-face {
    font-family: 'Test Soehne';
    font-style: italic;
    font-weight: 700;
    src: local(''),

  }

  /* Test Soehne 800 italic */
  @font-face {
    font-family: 'Test Soehne';
    font-style: italic;
    font-weight: 800;
    src: local(''),

  }

  /* Test Soehne 900 italic */
  @font-face {
    font-family: 'Test Soehne';
    font-style: italic;
    font-weight: 900;
    src: local(''),

  }

  :root {
    /* FONT SIZE */
    --font-size-xs: 0.812rem;
    --font-size-sm: 0.875rem;
    --font-size-base: 1rem;
    --font-size-md: 1.125rem;
    --font-size-lg: 1.25rem;
    --font-size-xl: 1.438rem;
    --font-size-2xl: 1.625rem;
    --font-size-3xl: 1.812rem;
    --font-size-4xl: 2rem;
    --font-size-5xl: 2.25rem;
    --font-size-6xl: 2.562rem;
    --font-size-7xl: 2.876rem;
    --font-size-8xl: 3.25rem;
    --font-size-9xl: 3.625rem;

    /* FONT WEIGHT */
    --font-weight-normal: normal;
    --font-weight-bold: bold;
    --font-weight-100: 100;
    --font-weight-200: 200;
    --font-weight-300: 300;
    --font-weight-400: 400;
    --font-weight-500: 500;
    --font-weight-600: 600;
    --font-weight-700: 700;
    --font-weight-800: 800;
    --font-weight-900: 900;
  }


  /* easier to calculate font size*/
  html {
    font-size: 100%;
  }


  body {
    font-size: 1rem;
  }


`;

export default Typography;
