import * as React from 'react';
import { CookiesProvider } from 'react-cookie';
import './src/styles/global.css';
import type { GatsbyBrowser } from 'gatsby';

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element }) => {
  return <CookiesProvider>{element}</CookiesProvider>;
};
