import React from 'react';

// export type AuthUser = {
//   email: string | null;
//   emailVerified: boolean | null;
//   phoneNumber: string | null;
//   photoURL: string | null;
//   uid: string;
//   name: string;
// } | null;

// defaultLocale: "en"
// id: "Page_1"
// locale: "en"
// locales: (2) ['en', 'fr']
// localizedPaths: Array(2)
// 0: {locale: 'en', href: '/'}
// 1: {locale: 'fr', href: '/fr/'}
// slug: ""

export type IPageContext = {
  defaultLocale: string;
  id: string;
  locale: string;
  locales: string[];
  localizedPaths: string[];
  slug: string;
};

//TODO fix this type definition to match functions
export type PageContextType = {
  pageContext: IPageContext;
};

const PageContext = React.createContext<PageContextType>({} as PageContextType);

PageContext.displayName = 'PageContext';

interface AuthUserProviderProps {
  children: React.ReactNode;
  pageContextProp: IPageContext;
}

export function PageContextProvider({ children, pageContextProp }: AuthUserProviderProps) {
  const [pageContext, setPageContext] = React.useState<IPageContext>(pageContextProp);

  const ctx = {
    pageContext,
  };

  return <PageContext.Provider value={ctx}>{children}</PageContext.Provider>;
}
// custom hook to use the AuthContext and access authUser, loading and other funcs
export const usePageContext = () => React.useContext(PageContext);
