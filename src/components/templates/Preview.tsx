/**
 * You can preview pages with URLs like this:
 * http://localhost:8000/<locale>/preview/<slug>?secret=<preview-secret>
 * where <preview-secret> is the GATSBY_PREVIEW_SECRET variable defined in your .env config
 * and <slug> is the slug you entered in Strapi for your page
 */
import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { graphql, PageProps } from 'gatsby';
import { PreviewSiteQuery } from '../../../gatsby-graphql';
import { useLocation } from '@reach/router';
import { fetchAPI } from '@utils/api';
import { getLocalizedPaths, PageContext } from '@utils/localize';
import Layout from '../Layout';
// import { Sections, Layout, SEO } from '@components';
import SEO from '../SEO';
import Sections from '../Sections';

type PreviewPageContext = {
  locale: string;
  locales: string[];
  defaultLocale: string;
};

// locale and slug are inherited from `mathPath` in gatsby-node
interface PreviewPageProps extends PageProps<PreviewSiteQuery, PreviewPageContext> {
  locale: string;
  slug: string;
}

type SecretPage = {
  contentSections: Array<any>;
  created_at: string;
  id: number;
  locale: string;
  localizations: Array<{ id: number; locale: string }>;
  metadata: {
    id: number;
    metaTitle: string;
    metaDescription: string;
    twitterCardType: string;
    twitterUsername: string | null;
    shareImage: any;
  };
  shortName: string;
  slug: string;
  status: string;
  updated_at: string;
};

const PreviewPage = ({
  locale,
  slug,
  data,
  pageContext: { locales, defaultLocale },
}: PreviewPageProps) => {
  const [secretPage, setSecretPage] = useState<SecretPage | null>(null);
  const [pageContext, setPageContext] = useState<PageContext | null>(null);
  const [cookies, setCookie] = useCookies();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const secret = params.get('secret');

  const { site, strapiGlobal } = data;

  const languages = site?.siteMetadata?.languages;

  if (!languages) {
    throw new Error('Not able to get languages from the server to preview');
  }

  const metaData = secretPage && {
    ...secretPage.metadata,
    metaTitle: `Preview ${secretPage.metadata.metaTitle}`,
  };

  // The user is correctly trying to access the preview page
  if (
    cookies.strapiPreview !== process.env.GATSBY_PREVIEW_SECRET &&
    secret === process.env.GATSBY_PREVIEW_SECRET
  ) {
    setCookie('strapiPreview', process.env.GATSBY_PREVIEW_SECRET, {
      path: '/',
      secure: Boolean(process.env.NODE_ENV),
      sameSite: 'strict',
    });
  }

  useEffect(() => {
    const fetchData = async () => {
      const [data]: [SecretPage] = await fetchAPI(`/pages?_locale=${locale}&slug=${slug}`);
      setSecretPage(data);

      const context = {
        slug: data.slug,
        id: data.id,
        locale: data.locale,
        localizations: data.localizations,
        locales,
        defaultLocale,
        isPreview: true,
      };

      const localizedPaths = getLocalizedPaths(context);

      setPageContext({ ...context, localizedPaths });
    };

    fetchData();
  }, [slug, locales, defaultLocale, locale]);

  if (!pageContext || !strapiGlobal) {
    return <div>loading preview...</div>;
  }

  if (!cookies.strapiPreview) {
    return (
      <Layout global={strapiGlobal}>
        <div className="mt-4 text-center">You need to turn preview mode on to view this page</div>
      </Layout>
    );
  }

  if (!metaData) {
    throw new Error(`no metadata for the page ${slug}`);
  }

  return (
    <>
      <SEO lang={locale} seo={metaData} global={strapiGlobal} />
      <Layout global={strapiGlobal}>
        {secretPage && (
          <div>
            <Sections sections={secretPage.contentSections} />
          </div>
        )}
      </Layout>
    </>
  );
};

export default PreviewPage;

export const query = graphql`
  query PreviewSite($locale: String!) {
    site {
      siteMetadata {
        languages {
          locales
          defaultLocale
        }
      }
    }
    strapiGlobal(locale: { eq: $locale }) {
      ...GlobalData
    }
  }
`;
