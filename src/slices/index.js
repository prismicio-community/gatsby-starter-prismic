import * as React from "react";

/**
 * An object of Slice components mapping a Slice API ID to a React component.
 * This object is passed to `<SliceZone>` to render a document's Slice Zone.
 *
 * `React.lazy()` is used to lazy-load the Slice components.
 */
export const components = {
  text: React.lazy(() => import("./Text")),
};
