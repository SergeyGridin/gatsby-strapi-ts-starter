import path from 'path';

import type { GatsbyNode } from 'gatsby';

function getLocalizedPaths(page) {
  const paths = page.locales.map(locale => {
    return {
      locale: locale,
      href: localizePath({ ...page, locale }),
    };
  });

  return paths;
}

function localizePath(page) {
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

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        // '@components': path.resolve(__dirname, 'src/components'),
        '@atoms': path.resolve(__dirname, 'src/components/atoms'),
        '@molecules': path.resolve(__dirname, 'src/components/molecules'),
        '@organisms': path.resolve(__dirname, 'src/components/organisms'),
        '@icons': path.resolve(__dirname, 'src/components/icons'),
      },
    },
  });
};

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
  const { createPage } = actions;
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info

  // query all locales so we can use it later to get pages for all locales.
  const {
    data: {
      site: {
        siteMetadata: {
          languages: { locales, defaultLocale },
        },
      },
    },
  } = await graphql(`
    query {
      site {
        siteMetadata {
          languages {
            locales
            defaultLocale
          }
        }
      }
    }
  `);

  console.log(locales);

  // get all strapi pages for each locale with a published status
  const localePages = locales.map(async locale => {
    const { data } = (await graphql(
      `
        query pagesQuery($locale: String!) {
          allStrapiPage(filter: { locale: { eq: $locale }, status: { eq: "published" } }) {
            nodes {
              slug
              id
              locale
            }
          }
        }
      `,
      { locale: locale }
    )) as any;

    console.log(data);

    return data.allStrapiPage.nodes;
  });

  const pages = await (await Promise.all(localePages)).flat();

  console.log('PAGES: ', pages);

  const PageTemplate = path.resolve('./src/components/templates/Page.tsx');

  // Create all non-root pages based on Strapi data
  pages.forEach(page => {
    const slug = page.slug ? page.slug : '';
    // The default locale has no prefix
    // The root of all other locales should be the locale code (i.e. /fr)
    const localePrefix =
      page.locale === defaultLocale || locales.includes(page.slug) ? '' : page.locale;

    const context = {
      slug: page.slug,
      id: page.id,
      locale: page.locale,
      locales,
      defaultLocale,
    };

    const localizedPaths = getLocalizedPaths(context);

    createPage({
      path: `${localePrefix}/${slug}`,
      component: PageTemplate,
      context: {
        ...context,
        localizedPaths,
      },
    });
  });

  // Build preview pages
  const PreviewPage = path.resolve('./src/components/templates/Preview.tsx');

  // locales.forEach(locale => {
  //   const params = {
  //     path: `${locale}/preview/`,
  //     component: PreviewPage,
  //     context: {
  //       locale,
  //       locales,
  //       defaultLocale,
  //     },
  //   };

  //   createPage(params);
  //   // Assures onCreatePage is called since it's currently not for programmatically created pages in
  //   // gatsby-node.js. It only works for plugin created pages and pages in the `/pages` folder.
  //   // NOTE: If Gatsby issue #5255 is ever fixed we'll want to remove this code else onCreatePages will be called twice.
  //   // Workaround proposed here: https://github.com/gatsbyjs/gatsby/issues/5255#issuecomment-721330474
  //   onCreatePage({
  //     page: params,
  //     actions: { createPage },
  //   });
  // });
};

const onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;
  if (page.path.includes('preview')) {
    // page.matchPath is a special key that's used for matching pages
    // with corresponding routes only on the client.
    // https://www.gatsbyjs.com/docs/gatsby-internals-terminology/#matchpath
    page.matchPath = '/:locale/preview/:slug';
    // Update the page.
    createPage(page);
  }
};
