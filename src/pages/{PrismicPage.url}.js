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

import { graphql } from "gatsby";
import { withPrismicPreview } from "gatsby-plugin-prismic-previews";
import { SliceZone } from "@prismicio/react";

import { components } from "../slices";

const PageTemplate = ({ data }) => {
  const page = data.prismicPage;

  return (
    <main>
      {page.data.title.text && <h1>{page.data.title.text}</h1>}
      <SliceZone slices={page.data.body} components={components} />
    </main>
  );
};

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
        body {
          ... on PrismicSlice {
            id
            slice_type
          }
          ...PrismicPageDataBodyText
        }
      }
    }
  }
`;
