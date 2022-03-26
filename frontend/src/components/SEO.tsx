import React from 'react';
import { Helmet } from 'react-helmet';

// TODO: refactor to not include as much global
type StrapiImage = {
  localFile: {
    publicURL: string | null;
  } | null;
};
type SEOProps = {
  lang: string;
  seo: {
    metaDescription?: string | null;
    metaTitle?: string | null;
    shareImage?: StrapiImage | null;
  };
  // global: DynamicPageQuery['strapiGlobal'];
  favicon?: string | null;
};

const SEO = ({ lang, seo, favicon }: SEOProps) => {
  // Merge default and page-specific SEO values
  const fullSeo = {
    ...global,
    ...seo,
  };

  const getMetaTags = () => {
    const tags = [];

    if (fullSeo.metaTitle) {
      tags.push(
        {
          property: 'og:title',
          content: fullSeo.metaTitle,
        },
        {
          name: 'twitter:title',
          content: fullSeo.metaTitle,
        }
      );
    }
    if (fullSeo.metaDescription) {
      tags.push(
        {
          name: 'description',
          content: fullSeo.metaDescription,
        },
        {
          property: 'og:description',
          content: fullSeo.metaDescription,
        },
        {
          name: 'twitter:description',
          content: fullSeo.metaDescription,
        }
      );
    }
    if (fullSeo.shareImage) {
      const imageUrl = process.env.GATSBY_STRAPI_URL
        ? fullSeo.shareImage.localFile?.publicURL || ''
        : `http://localhost:8000${fullSeo.shareImage.localFile?.publicURL}`;

      tags.push(
        {
          name: 'image',
          content: imageUrl,
        },
        {
          property: 'og:image',
          content: imageUrl,
        },
        {
          name: 'twitter:image',
          content: imageUrl,
        }
      );
    }
    // TODO: add for article
    // if (fullSeo.article) {
    //   tags.push({
    //     property: 'og:type',
    //     content: 'article',
    //   });
    // }

    // TODO summary_large_image?
    tags.push({ name: 'twitter:card', content: 'summary_large_image' });

    return tags;
  };

  const metaTags = getMetaTags();
  // missing properties need to be null. change to have undefined
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={fullSeo.metaTitle || ''}
      // titleTemplate={`%s | ${fullSeo.metaTitleSuffix}`}
      meta={metaTags}
      link={[
        {
          rel: 'icon',
          // favicon
          href: favicon || '',
        },
      ]}
    />
  );
};

// SEO.propTypes = {
//   title: PropTypes.string,
//   image: PropTypes.string,
// };

SEO.defaultProps = {
  title: null,
  image: null,
};

export default SEO;
