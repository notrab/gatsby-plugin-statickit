import React from 'react';
import { StaticKitProvider } from '@statickit/react';

export const wrapRootElement = ({ element }, { siteId }) => {
  if (!siteId)
    throw new Error(
      `'siteId' must be provided when using  'gatsby-plugin-statickit' `
    );

  return <StaticKitProvider site={siteId}>{element}</StaticKitProvider>;
};
