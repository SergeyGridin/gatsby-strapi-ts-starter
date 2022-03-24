import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { navigate } from 'gatsby-link';
// import {
//   BottomActions,
//   FeatureColumnsGroup,
//   FeatureRowsGroup,
//   Hero,
//   LargeVideo,
//   LeadForm,
//   Pricing,
//   RichText,
//   TestimonialsGroup,
// } from '@organisms';
import { useLocation } from '@reach/router';

// Map Strapi sections to section components
const sectionComponents = {
  // 'sections.hero': Hero,
  // 'sections.large-video': LargeVideo,
  // 'sections.feature-columns-group': FeatureColumnsGroup,
  // 'sections.feature-rows-group': FeatureRowsGroup,
  // 'sections.bottom-actions': BottomActions,
  // 'sections.testimonials-group': TestimonialsGroup,
  // 'sections.rich-text': RichText,
  // 'sections.pricing': Pricing,
  // 'sections.lead-form': LeadForm,
};

const PreviewModeBanner = ({ location }: any) => {
  return (
    <div className="py-4 bg-red-600 text-red-100 font-semibold uppercase tracking-wide">
      <div className="container">
        Preview mode is on.{' '}
        <button
          className="underline"
          onClick={() => {
            // The cookie will be deleted by a useEffect in the Section component
            navigate('/', { state: { prevPath: location.pathname } });
          }}
        >
          Turn off
        </button>
      </div>
    </div>
  );
};

// Display a section individually
const Section = ({
  sectionData,
}: {
  sectionData: {
    strapi_component: keyof typeof sectionComponents;
    __component?: keyof typeof sectionComponents;
  };
}) => {
  // Prepare the component
  const SectionComponent =
    sectionComponents[sectionData.strapi_component || sectionData.__component];

  if (!SectionComponent) {
    // No matching component for this page section
    return null;
  }

  // Display the section
  return <SectionComponent data={sectionData} />;
};

type LocationState = {
  prevPath: string;
};
// Display the list of sections
const Sections = ({ sections }: { sections: any[] }) => {
  // https://github.com/reach/router/issues/414#issuecomment-859406190
  const location = useLocation();
  const locationState = location.state as LocationState; // Type Casting, then you can get the params passed via router
  // Ignore unused destructured variable
  // eslint-disable-next-line
  const [cookies, _, removeCookie] = useCookies(['strapiPreview']);

  useEffect(() => {
    // The preview cookie is deleted when state.prevPath exists on location

    if (locationState && locationState.prevPath) {
      removeCookie('strapiPreview', {
        path: '/',
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
      });
    }
  }, [location, removeCookie]);

  const previewModeIsEnabled =
    process.env.GATSBY_PREVIEW_SECRET &&
    cookies.strapiPreview === process.env.GATSBY_PREVIEW_SECRET;
  console.log(sections);
  return (
    <div className="flex flex-col">
      {previewModeIsEnabled && <PreviewModeBanner location={location} />}
      {sections.map((section, i) => (
        <Section sectionData={section} key={`${section.strapi_component}${(section.id, i)}`} />
      ))}
    </div>
  );
};

export default Sections;
