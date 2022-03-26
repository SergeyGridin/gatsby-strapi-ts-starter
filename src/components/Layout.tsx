import React, { useState } from 'react';
import styled from 'styled-components';
import { DynamicPageQuery, StrapiPageLocalizations } from '../../gatsby-graphql';
// import Footer from './molecules/Footer';
// import Navbar from './molecules/Navbar';
// import NotificationBanner from './molecules/NotificationBanner';

export interface PageContext {
  slug: string;
  id: string | number;
  locale: string;
  locales?: string[];
  localizedPaths?: { locale: string; href: string };
  localizations: (StrapiPageLocalizations | null)[] | null;
  defaultLocale: string;
}
interface ILayoutProps {
  children: React.ReactNode;
  global: DynamicPageQuery['strapiGlobal'];
  // pageContext: PageContext;
}

const Layout = ({ children, global }: ILayoutProps) => {
  if (!global) {
    throw new Error('no global data');
  }
  // const {  footer, notificationBanner } = global;
  // const [bannerIsShown, setBannerIsShown] = useState(true);

  return (
    <StyledLayout>
      {/* Aligned to the top */}
      <Main>
        {/* {notificationBanner && bannerIsShown && (
          <NotificationBanner data={notificationBanner} closeSelf={() => setBannerIsShown(false)} />
        )}
        <Navbar navbar={navbar} pageContext={pageContext} /> */}
        <div>{children}</div>
      </Main>
      {/* Aligned to the bottom */}
      <div>FOOTER</div>
      {/* <Footer footer={footer} /> */}
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1 1 0%;
`;

export default Layout;
