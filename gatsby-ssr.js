/**
 * Implement Gatsby's Server Rendering APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

import * as React from "react";
import { Link as GatsbyLink } from "gatsby";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreviewProvider } from "gatsby-plugin-prismic-previews";

import { repositoryConfigs } from "./src/prismicPreviews";

/**
 * An adapter to support Gatsby's `<Link>` component when using `<PrismicLink>`.
 */
const GatsbyLinkShim = React.forwardRef(({ href, ...props }, ref) => {
  return <GatsbyLink to={href} ref={ref} {...props} />;
});
GatsbyLinkShim.displayName = "GatsbyLinkShim";

// Adds a shared React Context for Prismic components and preview sessions.
export const wrapRootElement = ({ element }) => (
  <PrismicProvider internalLinkComponent={GatsbyLinkShim}>
    <PrismicPreviewProvider repositoryConfigs={repositoryConfigs}>
      {element}
    </PrismicPreviewProvider>
  </PrismicProvider>
);
