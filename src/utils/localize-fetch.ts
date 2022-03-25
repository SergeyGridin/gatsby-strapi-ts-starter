import { fetchAPI } from './api';

export async function getLocalizedPage(targetLocale: any, pageContext: any) {
  const localization = pageContext.localizations.find(
    (localization: any) => localization.locale === targetLocale
  );
  const localePage = await fetchAPI(`/pages/${localization.id}`);
  return localePage;
}
