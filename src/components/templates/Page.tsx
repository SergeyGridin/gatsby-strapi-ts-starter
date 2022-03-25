import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { DynamicPageQuery } from '../../../gatsby-graphql';
// import GlobalStyles from 'styles/GlobalStyles';
// import Typography from 'styles/Typography';
import Layout from '../Layout';
import SEO from '../SEO';
// import Sections from '../Sections';
import HomePage from './HomePage';
import { usePageContext } from 'context/pageContext';

// Map Strapi templates to section components
const templateComponent = {
  'templates.home-page': HomePage,
};

interface ITemplateProps {
  data: {
    strapi_component: keyof typeof templateComponent;
    __component?: keyof typeof templateComponent;
  };
}

// Display a section individually
const Template = ({ data }: ITemplateProps) => {
  // Prepare the component
  const TemplateComponent = templateComponent[data.strapi_component || data.__component];

  if (!TemplateComponent) {
    // No matching component for this page section
    return null;
  }

  // Display the section
  // TODO: see if any can be fixed
  return <TemplateComponent {...(data as any)} />;
};

const DynamicPage = ({ data }: PageProps<DynamicPageQuery>) => {
  const { pageContext } = usePageContext();

  if (!data.strapiPage) {
    throw new Error(`No page data for ${pageContext.slug}`);
  }

  // TODO: template and contentSections only available when pages use them,
  // otherwse it will fail to fetch. needs refactoring. contentSection temporarily removed

  const { template: templateArr, metadata } = data.strapiPage;
  const global = data.strapiGlobal;

  if (!metadata) {
    throw new Error('no SEO metadata');
  }
  // template is an array. Might be fixed if used selection in Strapi
  const template = templateArr[0];
  // check if there is a template defined. Prioritize it over sections.
  const shouldBeTemplate = template ? true : false;
  return (
    <>
      {/* <GlobalStyles /> */}
      {/* <Typography /> */}
      <SEO
        lang={pageContext.locale}
        seo={metadata}
        favicon={global?.favicon?.localFile?.publicURL}
      />
      <Layout global={global}>
        {shouldBeTemplate ? (
          <Template data={template} />
        ) : // we dont use content sections, thus we dont need it right now.
        // comment back in when sections are being used as per note above
        // <Sections sections={contentSections} />
        null}
      </Layout>
    </>
  );
};

export default DynamicPage;

export const query = graphql`
  fragment GlobalData on StrapiGlobal {
    favicon {
      localFile {
        publicURL
      }
    }
    footer {
      id

      id

      smallText
    }
    id
    notificationBanner {
      id
      text
      type
    }
  }

  query DynamicPage($id: String!, $locale: String!) {
    strapiGlobal(locale: { eq: $locale }) {
      ...GlobalData
    }
    strapiPage(id: { eq: $id }) {
      slug
      shortName
      metadata {
        metaTitle
        metaDescription
      }
      localizations {
        id
        locale
      }
      # contentSections #turn this on when you have pages with sections. Otherwise graphql wont see it
      template
    }
  }
`;
