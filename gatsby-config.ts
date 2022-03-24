import type { GatsbyConfig } from 'gatsby';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  //https://github.com/gatsbyjs/gatsby/discussions/29308
  flags: {
    DEV_SSR: false,
  },
  siteMetadata: {
    title: `Gatsby Strapi Starter`,
    siteUrl: `${process.env.GATSBY_STRAPI_URL || 'http://localhost:1337'}`,
    description: `Website starter for gatsby with strapi`,
    author: `Sergey Gridin`,
    languages: { defaultLocale: 'en', locales: ['en', 'fr'] },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // 'gatsby-plugin-root-import',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.resolve(`./src/images`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/favicon-32x32.png`, // This path is relative to the root of the site.
    //   },
    // },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: process.env.GATSBY_STRAPI_URL || 'http://localhost:1337',
        collectionTypes: [
          {
            name: 'page',
            api: {
              qs: {
                _publicationState: 'preview',
                _locale: 'all',
              },
            },
          },
        ],
        singleTypes: [
          {
            name: 'global',
            api: {
              qs: {
                _locale: 'en',
              },
            },
          },
          // {
          //   name: 'global',
          //   api: {
          //     qs: {
          //       _locale: 'fr',
          //     },
          //   },
          // },
        ],
        queryLimit: 1000,
      },
    },
  ],
};

export default config;
