/**
 * This file is used as the Prismic preview resolver page. The preview resolver
 * page routes editors from the Prismic writing room to a previewed document
 * within your app. For example, if an editor clicks the preview button for a
 * blog post in the writing room, they will land on the preview resolver page
 * within your app, which then redirects them to the blog post with previewed
 * content.
 *
 * @see https://prismic.io/docs/technical-reference/gatsby-plugin-prismic-previews#withprismicpreviewresolver
 */

import * as React from "react";
import { navigate } from "gatsby";
import { withPrismicPreviewResolver } from "gatsby-plugin-prismic-previews";

const PreviewPage = ({ isPrismicPreview }) => {
  React.useEffect(() => {
    // If a visitor lands on this page and they did not come from the Prismic
    // Writing Room, redirect to the homepage.
    //
    // isPrismicPreview can be one of the following values:
    // - `null`: The preview system is determining if a preview is active. The default value.
    // - `false`: A preview session is not active. It is safe to manually redirect or display a message.
    // - `true`: A preview session is active. The page will automatically redirect.
    if (isPrismicPreview === false) {
      navigate("/");
    }
  }, [isPrismicPreview]);

  return null;
};

/**
 * `withPrismicPreviewResolver` will automatically redirect editors coming from
 * the Prismic writing room to the document they are previewing.
 *
 * @see https://prismic.io/docs/technical-reference/gatsby-plugin-prismic-previews#withprismicpreviewresolver
 */
export default withPrismicPreviewResolver(PreviewPage);
