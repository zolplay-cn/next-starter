module.exports = {
  arrowParens: 'always',
  semi: false,
  trailingComma: 'es5',
  singleQuote: true,
  jsxSingleQuote: false,
  tabWidth: 2,
  useTabs: false,
  plugins: [require('prettier-plugin-sort-class-names')],
  sortClassNamesUnknownClassesSeparator: '/',
  sortClassNamesPrefixes:
    'xs:,sm:,md:,lg:,xl:,2xl:,dark:,motion-safe:,motion-reduce:,first:,last:,odd:,even:,visited:,checked:,group-hover:,group-focus:,focus-within:,hover:,focus:,focus-visible:,active:,disabled:',
  sortClassNamesSortFunctions: 'clsx,classNames,cx,clsxm',
}
