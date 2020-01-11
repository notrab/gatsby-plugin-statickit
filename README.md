# gatsby-plugin-statickit

Automatically inject the [StaticKit](https://statickit.com/docs/react) provider into your Gatsby site.

## Installation

```bash
yarn add gatsby-plugin-statickit
```

Next inside `gatsby-config.js`, add `gatsby-plugin-statickit` as a plugin and set your `siteId`.

```js
// In your gatsby-config.js

plugins: [
  {
    resolve: `gatsby-plugin-statickit`,
    options: {
      siteId: '...',
    },
  },
];
```

### Options

| Option   | Default     | Required | Description            |
| -------- | ----------- | -------- | ---------------------- |
| `siteId` | `undefined` | **Yes**  | Your StaticKit site ID |
