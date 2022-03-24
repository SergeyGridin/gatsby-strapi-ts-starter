import React, { useState } from 'react';
import { DynamicPageQuery, StrapiPageLocalizations } from 'graphqlTypes';
import Footer from './molecules/Footer';
// import Navbar from './molecules/Navbar';
// import NotificationBanner from './molecules/NotificationBanner';

export interface PageContext {
  slug: string;
  id: string;
  locale: string;
  locales: string[];
  localizedPaths: { locale: string; href: string };
  localizations: (StrapiPageLocalizations | null)[] | null;
  defaultLocale: string;
}
interface ILayoutProps {
  children: React.ReactNode;
  global: DynamicPageQuery['strapiGlobal'];
  pageContext: PageContext;
}

const Layout = ({ children, global, pageContext }: ILayoutProps) => {
  if (!global) {
    throw new Error('no global data');
  }
  // const { navbar, footer, notificationBanner } = global;
  // const [bannerIsShown, setBannerIsShown] = useState(true);

  return (
    <div className="flex flex-col justify-between min-h-screen">
      {/* Aligned to the top */}
      <div className="flex-1">
        {/* {notificationBanner && bannerIsShown && (
          <NotificationBanner data={notificationBanner} closeSelf={() => setBannerIsShown(false)} />
        )}
        <Navbar navbar={navbar} pageContext={pageContext} /> */}
        <div>{children}</div>
      </div>
      {/* Aligned to the bottom */}
      <div>FOOTER</div>
      {/* <Footer footer={footer} /> */}
    </div>
  );
};

export default Layout;
