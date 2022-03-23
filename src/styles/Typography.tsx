/* eslint-disable max-len */
import { createGlobalStyle } from 'styled-components';
import TestSoehne400Italic from 'assets/fonts/test-soehne-buch-kursiv.woff2';
import TestSoehne400 from 'assets/fonts/test-soehne-buch.woff2';
import TestSoehne700Italic from 'assets/fonts/test-soehne-dreiviertelfett-kursiv.woff2';
import TestSoehne700 from 'assets/fonts/test-soehne-dreiviertelfett.woff2';
import TestSoehne900Italic from 'assets/fonts/test-soehne-extrafett-kursiv.woff2';
import TestSoehne900 from 'assets/fonts/test-soehne-extrafett.woff2';
import TestSoehne200Italic from 'assets/fonts/test-soehne-extraleicht-kursiv.woff2';
import TestSoehne200 from 'assets/fonts/test-soehne-extraleicht.woff2';
import TestSoehne800Italic from 'assets/fonts/test-soehne-fett-kursiv.woff2';
import TestSoehne800 from 'assets/fonts/test-soehne-fett.woff2';
import TestSoehne600Italic from 'assets/fonts/test-soehne-halbfett-kursiv.woff2';
import TestSoehne600 from 'assets/fonts/test-soehne-halbfett.woff2';
import TestSoehne500Italic from 'assets/fonts/test-soehne-kraftig-kursiv.woff2';
import TestSoehne500 from 'assets/fonts/test-soehne-kraftig.woff2';
import TestSoehne300Italic from 'assets/fonts/test-soehne-leicht-kursiv.woff2';
import TestSoehne300 from 'assets/fonts/test-soehne-leicht.woff2';

const Typography = createGlobalStyle`
  /* Test Soehne 200 normal */
  @font-face {
    font-family: 'Test Soehne';
    font-style: normal;
    font-weight: 200;
    src: local(''),
        url(${TestSoehne200}) format('woff2'),
  }

  /* Test Soehne 300 normal */
  @font-face {
    font-family: 'Test Soehne';
    font-style: normal;
    font-weight: 300;
    src: local(''),
        url(${TestSoehne300}) format('woff2'),
  }

  /* Test Soehne 400 normal */
  @font-face {
    font-family: 'Test Soehne';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url(${TestSoehne400}) format('woff2'),
  }

  /* Test Soehne 500 normal */
  @font-face {
    font-family: 'Test Soehne';
    font-style: normal;
    font-weight: 500;
    src: local(''),
        url(${TestSoehne500}) format('woff2'),
  }

  /* Test Soehne 600 normal */
  @font-face {
    font-family: 'Test Soehne';
    font-style: normal;
    font-weight: 600;
    src: local(''),
        url(${TestSoehne600}) format('woff2'),
  }

  /* Test Soehne 700 normal */
  @font-face {
    font-family: 'Test Soehne';
    font-style: normal;
    font-weight: 700;
    src: local(''),
        url(${TestSoehne700}) format('woff2'),
  }

  /* Test Soehne 800 normal */
  @font-face {
    font-family: 'Test Soehne';
    font-style: normal;
    font-weight: 800;
    src: local(''),
        url(${TestSoehne800}) format('woff2'),
  }

  /* Test Soehne 900 normal */
  @font-face {
    font-family: 'Test Soehne';
    font-style: normal;
    font-weight: 900;
    src: local(''),
        url(${TestSoehne900}) format('woff2'),
  }

  /* Test Soehne 200 italic */
  @font-face {
    font-family: 'Test Soehne';
    font-style: italic;
    font-weight: 200;
    src: local(''),
        url(${TestSoehne200Italic}) format('woff2'),
  }

  /* Test Soehne 300 italic */
  @font-face {
    font-family: 'Test Soehne';
    font-style: italic;
    font-weight: 300;
    src: local(''),
        url(${TestSoehne300Italic}) format('woff2'),
  }

  /* Test Soehne 400 italic */
  @font-face {
    font-family: 'Test Soehne';
    font-style: italic;
    font-weight: 400;
    src: local(''),
        url(${TestSoehne400Italic}) format('woff2'),
  }

  /* Test Soehne 500 italic */
  @font-face {
    font-family: 'Test Soehne';
    font-style: italic;
    font-weight: 500;
    src: local(''),
        url(${TestSoehne500Italic}) format('woff2'),
  }

  /* Test Soehne 600 italic */
  @font-face {
    font-family: 'Test Soehne';
    font-style: italic;
    font-weight: 600;
    src: local(''),
        url(${TestSoehne600Italic}) format('woff2'),
  }

  /* Test Soehne 700 italic */
  @font-face {
    font-family: 'Test Soehne';
    font-style: italic;
    font-weight: 700;
    src: local(''),
        url(${TestSoehne700Italic}) format('woff2'),
  }

  /* Test Soehne 800 italic */
  @font-face {
    font-family: 'Test Soehne';
    font-style: italic;
    font-weight: 800;
    src: local(''),
        url(${TestSoehne800Italic}) format('woff2'),
  }

  /* Test Soehne 900 italic */
  @font-face {
    font-family: 'Test Soehne';
    font-style: italic;
    font-weight: 900;
    src: local(''),
        url(${TestSoehne900Italic}) format('woff2'),
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
    font-size: 16px;
  }


  body {
    font-size: 1rem;
  }


`;

export default Typography;
