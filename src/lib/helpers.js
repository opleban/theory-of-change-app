export function getCurrentLocale(location, defaultLocale, availableLocales) {
  const localeMatch = location.pathname.match(
    RegExp('\/(' + availableLocales.join('|') + ')')
  );
  return localeMatch ?
    localeMatch[1] :
    defaultLocale;
}

export function getCurrentPath(location) {
  const PATHS = ['san-fermin', 'participatory-budget'];
  const path = location.pathname.match(RegExp("[^/]+(?=/$|$)"));
  if (path) {
    if (PATHS.includes(path[0])) {
      return path[0]
    }
  }
  return '/';
}
