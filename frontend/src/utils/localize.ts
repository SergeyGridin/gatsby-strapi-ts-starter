export type PageContext = {
  slug: string;
  id: number;
  locale: string;
  localizations: Array<{ id: number; locale: string }>;
  locales: Array<string>;
  localizedPaths?: {
    locale: string;
    href: string;
  }[];
  defaultLocale: string;
  isPreview: boolean;
};

export function localizePath(page: PageContext) {
  const { locale, defaultLocale, slug, isPreview } = page;
  if (isPreview && slug) {
    // The preview requires a prefix
    return `/${locale}/preview/${slug}`;
  }

  if (locale === defaultLocale) {
    // The default locale is not prefixed
    return `/${slug}`;
  }

  // The slug should have a localePrefix
  return `/${locale}/${slug}`;
}

export function getLocalizedPaths(pageContext: PageContext) {
  const paths = pageContext.locales.map(locale => {
    return {
      locale: locale,
      href: localizePath({ ...pageContext, locale }),
    };
  });

  return paths;
}

// Use module.exports to acccess these functions in gatsby-node.js
// module.exports = {
//   localizePath,
//   getLocalizedPaths,
// };
