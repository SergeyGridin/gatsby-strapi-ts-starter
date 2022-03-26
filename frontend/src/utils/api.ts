export function getStrapiURL(path: any) {
  return `${process.env.GATSBY_STRAPI_URL || 'http://localhost:1337'}${path}`;
}

// Helper to make GET requests to Strapi

export async function fetchAPI(path: string, options = {}) {
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const mergedOptions = {
    ...defaultOptions,
    ...options,
  };
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl, mergedOptions);

  if (!response.ok) {
    console.error(response.statusText);
    throw new Error(`An error occured please try again`);
  }
  const data = await response.json();
  return data;
}

// contentSections: [{…}]
// created_at: "2021-11-06T16:24:55.295Z"
// id: 2
// locale: "en"
// localizations: [{…}]
// metadata: {
//   id: 4,
//   metaTitle: 'Pricing',
//   metaDescription: 'The different plans',
//   twitterCardType: 'summary',
//   twitterUsername: null
// }
// shortName: "Pricing"
// slug: "pricing"
// status: "published"
// updated_at: "2021-11-06T16:24:55.295Z"
