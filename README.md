# gatsby-strapi-ts-starter

This starter is designed for flexibility. Using it, you'll be able to manage your website content entirely in Strapi, and get a Gatsby app automatically generated. Marketing teams will be able to create pages and design their layout without help from developers.

This is a personal starter that I use in order to create projects for my clients.
to edit content entirely in Strapi, and get Gatsby app automatically generated.
Marketing teams will be able to create pages and desing their layout without the
need of developers.

## Plugins

### [gatsby-plugin-image](https://www.gatsbyjs.com/plugins/gatsby-plugin-image/#gatsby-plugin-image)

Ad responsive images to the website. Needs the following:

- gatsby-plugin-sharp
- gatsby-source-filesystem (for static images)
- gatsby-transformer-sharp (for dynamic images)

### [gatsby-plugin-manifest](https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/)

The web app manifest (part of the PWA specification) enabled by this plugin allows users to add your site to their home screen on most mobile browsers. The manifest provides configuration and icons to the phone.

### [gatsby-plugin-react-helmet](https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/)

Provides drop-in support for server rendering data added with React Helmet.

### [gatsby-plugin-styled-components](https://www.gatsbyjs.com/plugins/gatsby-plugin-styled-components/)

A Gatsby plugin for styled-components with built-in server-side rendering support.

### [gatsby-plugin-react-svg](https://www.gatsbyjs.com/plugins/gatsby-plugin-react-svg/)

Adds svg-react-loader to gatsby webpack config.

### [gatsby-plugin-offline](https://www.gatsbyjs.com/plugins/gatsby-plugin-offline)

Adds drop-in support for making a Gatsby site work offline and more resistant to bad network connections. It uses Workbox Build to create a service worker for the site and loads the service worker into the client.

If you’re using this plugin with gatsby-plugin-manifest (recommended) this plugin should be listed after that plugin so the manifest file can be included in the service worker.

## Optional dependencies

- Tailwind [here is how to install](https://tailwindcss.com/docs/guides/gatsby)
- GSAP

## TODO

- [ ] add google analytics
- [ ] add sitemap
- [ ] add tagmanager
- [ ] add cookie manager
- [ ] gatsby-plugin-preload-fonts to preload all fonts
- [ ] Modify Seo component
