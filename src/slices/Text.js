import { graphql } from "gatsby";
import { PrismicRichText } from "@prismicio/react";

const Text = ({ slice }) => {
  return (
    <section>
      <PrismicRichText field={slice.primary.text.richText} />
    </section>
  );
};

export default Text;

export const fragment = graphql`
  fragment PrismicPageDataBodyText on PrismicPageDataBodyText {
    primary {
      text {
        richText
      }
    }
  }
`;
