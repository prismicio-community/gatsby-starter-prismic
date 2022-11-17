require("dotenv").config();

/**
 * Prismic Route Resolver for `gatsby-source-prismic` and `gatsby-plugin-prismic-previews`.
 *
 * @type {import("gatsby-source-prismic").PluginOptions['routes']}
 */
const routes = [
  { type: "page", path: "/:uid/" },
  { type: "page", uid: "home", path: "/" },
];

/** @type {import("gatsby").GatsbyConfig} */
const config = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  jsxRuntime: "automatic",
  plugins: [
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-prismic",
      /** @type {import("gatsby-source-prismic").PluginOptions} */
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
        routes,
      },
    },
    {
      resolve: "gatsby-plugin-prismic-previews",
      /** @type {import("gatsby-plugin-prismic-previews").PluginOptions} */
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY_NAME,
        routes,
      },
    },
  ],
};

module.exports = config;
