import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { DynamicPageQuery } from 'graphqlTypes';
// import GlobalStyles from 'styles/GlobalStyles';
// import Typography from 'styles/Typography';
import Layout, { PageContext } from '../Layout';
import SEO from '../SEO';
import Sections from '../Sections';
import HomePage from './HomePage';

// Map Strapi templates to section components
const templateComponent = {
  'templates.home-page': HomePage,
};

// Display a section individually
const Template = ({
  templateData,
}: {
  templateData: {
    strapi_component: keyof typeof templateComponent;
    __component?: keyof typeof templateComponent;
  };
}) => {
  // Prepare the component
  const TemplateComponent =
    templateComponent[templateData.strapi_component || templateData.__component];

  if (!TemplateComponent) {
    // No matching component for this page section
    return null;
  }

  console.log(templateData);

  // Display the section
  return <TemplateComponent data={templateData} />;
};

const DynamicPage = ({ data, pageContext }: PageProps<DynamicPageQuery, PageContext>) => {
  console.log(data);
  if (!data.strapiPage) {
    throw new Error(`No page data for ${pageContext.slug}`);
  }
  const { contentSections, template: templateArr, metadata, localizations } = data.strapiPage;
  const global = data.strapiGlobal;
  if (!metadata) {
    throw new Error('no SEO metadata');
  }
  const template = templateArr[0];
  // check if there is a template defined. Prioritize it over sections.
  const shouldBeTemplate = template ? true : false;
  return (
    <>
      {/* <GlobalStyles /> */}
      {/* <Typography /> */}
      <SEO lang={pageContext.locale} seo={metadata} global={global} />
      <Layout global={global} pageContext={{ ...pageContext, localizations }}>
        {shouldBeTemplate ? (
          <Template templateData={template} />
        ) : (
          <Sections sections={contentSections} />
        )}
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
