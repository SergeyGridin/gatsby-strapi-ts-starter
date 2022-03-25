import * as React from 'react';
import type { GatsbyBrowser } from 'gatsby';
import { CookiesProvider } from 'react-cookie';
import './src/styles/global.css';

import { PageContextProvider, IPageContext } from './src/context/pageContext';

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element, ...props }) => {
  console.log('WRAP ROOT ELEMENT:', element, props);
  return <CookiesProvider>{element}</CookiesProvider>;
};

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element, props }) => {
  return (
    <PageContextProvider pageContextProp={props.pageContext as IPageContext}>
      {element}
    </PageContextProvider>
  );
};
