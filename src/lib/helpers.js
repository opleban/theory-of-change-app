export function getCurrentLocale(location, defaultLocale, availableLocales) {
  const localeMatch = location.pathname.match(
    RegExp('^\/(' + availableLocales.join('|') + ')(?=$|\/)')
  );
  return localeMatch ?
    localeMatch[1] :
    defaultLocale;
}
