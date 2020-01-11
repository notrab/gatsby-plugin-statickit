try {
  require.resolve('@statickit/react');
} catch (err) {
  throw new Error(`
  '@statickit/react' is not installed. You must install this to use 'gatsby-plugin-statickit'`);
}
