# gatsby-starter-prismic

This [Gatsby](https://www.gatsbyjs.com/) starter gets you started with [Prismic](https://prismic.io/), the Headless Website Builder.

- Source content from Prismic using [`gatsby-source-prismic`](https://github.com/prismicio/prismic-gatsby/tree/main/packages/gatsby-source-prismic)
- Preview draft content using [`gatsby-plugin-prismic-previews`](https://github.com/prismicio/prismic-gatsby/tree/main/packages/gatsby-plugin-prismic-previews)
- Display content using [`@prismicio/react`](https://github.com/prismicio/prismic-react) with help from [`@prismicio/helpers`](https://github.com/prismicio/prismic-helpers)

This starter is intentionally minimal. Add other packages and Gatsby plugins dependning on your needs.

## 🚀 Quick Start

How you get started depends on where you are at in your project:

<details>
<summary>
  <strong>I don't have a Prismic repository and would like to create one.</strong>
</summary>

1. **Create a Gatsby site.**

   Use the Prismic CLI to create a new Prismic repository and Gatsby project in one command.

   ```sh
   npx prismic-cli@latest theme --theme-url https://github.com/prismicio-community/gatsby-starter-prismic
   ```

   This will create a new Prismic repository with a minimal Custom Type called Page.

2. **Configure the starter.**

   Create a `.env` file with your Prismic repository name, Custom Types API token, and Access Token (optional).

   See `.env.example` for an example file with instructions on how to create your tokens.

3. **Start developing.**

   In your project, start the Gatsby development server.

   ```sh
   npm run develop
   ```

You can delete the `custom_types` directory at the root of the project at this point.

Have fun developing!

</details>

<details>
<summary>
  <strong>I have a Prismic repository already.</strong>
</summary>

1. **Create a Gatsby site.**

   Use the Gatsby CLI to create a new Gatsby project. Replace `<directory-name>` with the name of the directory you would like the CLI to create.

   ```sh
   npx gatsby-cli@latest new <directory-name> prismicio-community/gatsby-starter-prismic
   ```

2. **Configure the starter.**

   Create a `.env` file with your Prismic repository name, Custom Types API token, and Access Token (optional).

   See `.env.example` for an example file with instructions on how to create your tokens.

3. **Start developing.**

   In your project, start the Gatsby development server.

   ```sh
   npm run develop
   ```

   **Note**: This starter queries for a Custom Type called Page in `src/pages/{PrismicPage.url}.js`. You can delete this file or modify it to fit your needs. You may see an error when starting Gatsby if you repository does not have a Page Custom Type.

You can delete the `custom_types` directory at the root of the project at this point.

</details>

Once you have your Gatsby project started, visit [Prismic's documentation](https://prismic.io/docs/technologies/gatsby) to learn how to query and display content.

Have fun!

## Documentation

- **Gatsby**<br/>Learn how to use Gatsby here: <https://www.gatsbyjs.com/docs>

- **Prismic**<br/>Learn how to use Prismic here: <https://prismic.io/docs>

- **Prismic with Gatsby**<br/>Learn how to use Prismic with Gatsby: <https://prismic.io/docs/technologies/gatsby>
