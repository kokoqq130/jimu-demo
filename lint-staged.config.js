module.exports = {
  '*': ['prettier --ignore-unknown -w', 'eslint --fix', 'jest -b --findRelatedTests --passWithNoTests'],
  '**/*.ts?(x)': () => 'tsc --noEmit',
};
