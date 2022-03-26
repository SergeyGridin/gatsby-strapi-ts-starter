import * as React from 'react';
import type { GatsbyBrowser } from 'gatsby';
import { CookiesProvider } from 'react-cookie';
import GlobalStyles from './src/styles/GlobalStyles';
import Typography from './src/styles/Typography';
import './src/styles/global.css';
import 'normalize.css/normalize.css';

import { PageContextProvider, IPageContext } from './src/context/pageContext';

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element }) => {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <CookiesProvider>{element}</CookiesProvider>
    </>
  );
};

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element, props }) => {
  return (
    <PageContextProvider pageContextProp={props.pageContext as IPageContext}>
      {element}
    </PageContextProvider>
  );
};
