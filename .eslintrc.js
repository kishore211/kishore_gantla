module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    // Allow unescaped entities like apostrophes in JSX
    'react/no-unescaped-entities': 'off',
    // Add any other custom rules here
  },
}
