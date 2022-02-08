/**
 * This file contains a template for all Page documents in your Prismic
 * repository. It uses Gatsby's File System Route API to automatically generate
 * a page for each document using its `url` field. The `url` field is computed
 * using your app's Link Resolver.
 *
 * This template supports Prismic previews using the `withPrismicPreview` higher
 * order component.
 *
 * @see https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/
 */

import * as React from "react";
import { graphql } from "gatsby";
import { withPrismicPreview } from "gatsby-plugin-prismic-previews";
import { PrismicRichText } from "@prismicio/react";
import { isFilled } from "@prismicio/helpers";

const PageTemplate = ({ data }) => (
  <main>
    {data.prismicPage.data.title.text && (
      <h1>{data.prismicPage.data.title.text}</h1>
    )}
    {isFilled.richText(data.prismicPage.data.content) && (
      <article>
        <PrismicRichText field={data.prismicPage.data.content} />
      </article>
    )}
  </main>
);

/**
 * When a Prismic preview session is active, `withPrismicPreview` will
 * automatically provide your template with updated preview content. As editors
 * edit and save content in the Prismic writing room, the page will
 * automatically refresh to display the edited content.
 *
 * @see https://prismic.io/docs/technical-reference/gatsby-plugin-prismic-previews#withprismicpreview
 */
export default withPrismicPreview(PageTemplate);

export const query = graphql`
  query PageTemplate($id: String!) {
    prismicPage(id: { eq: $id }) {
      # The _previewable field enables previews for this document.
      _previewable
      data {
        title {
          text
        }
        content {
          richText
        }
      }
    }
  }
`;
