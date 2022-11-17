/**
 * This file is used as the 404 page in your app. If users go to a URL that does
 * not exist within your app, they will be shown this page.
 *
 * This page is also used to support Prismic preview session when viewing
 * documents that have not been published.
 *
 * @see https://www.gatsbyjs.com/docs/how-to/adding-common-features/add-404-page/
 * @see https://prismic.io/docs/technical-reference/gatsby-plugin-prismic-previews#withprismicunpublishedpreview
 */

import { withPrismicUnpublishedPreview } from "gatsby-plugin-prismic-previews";

const NotFoundPage = () => (
  <main>
    <h1>Page not found</h1>
  </main>
);

/**
 * When a Prismic preview session is active and an editor lands on the 404 page,
 * it means the app does not contain a page for the previewed document's URL
 * determined using your app's Link Resolver.
 *
 * `withPrismicUnpublishedPreview` will detect when a preview session is active
 * and try to display the previewed document using the configuration provided.
 *
 * @see https://prismic.io/docs/technical-reference/gatsby-plugin-prismic-previews#withprismicunpublishedpreview
 */
export default withPrismicUnpublishedPreview(NotFoundPage);
