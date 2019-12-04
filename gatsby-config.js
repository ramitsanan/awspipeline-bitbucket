module.exports = {
  siteMetadata: {
    title: `Prodigy Education`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Prodigy Education`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/mainLogoLight.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    // {
    //   resolve: "gatsby-source-graphql",
    //   options: {
    //     // Arbitrary name for the remote schema Query type
    //     typeName: "prodigyapi",
    //     // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
    //     fieldName: "prodigy",
    //     // Url to query from
    //     url:
    //       "https://u3bb0ieqjc.execute-api.us-east-1.amazonaws.com/dev/graphql",
    //     // refetch interval in seconds
    //     refetchInterval: 60,
    //   },
    // },
    {
      resolve: "gatsby-source-prismic-graphql",
      options: {
        repositoryName: "prodigy-education", // (REQUIRED, replace with your own)
        accessToken:
          "MC5YYnhpbHhFQUFDQUFrZllf.77-977-977-9Kwfvv73vv707du-_ve-_vS1hMUnvv71K77-9Xnnvv71577-9LkBlFxh4YE_vv70", // (optional API access token)
        path: "/preview", // (optional preview path. Default: /preview)
        previews: true, // (optional, activated Previews. Default: false)
        // pages: [
        //   // {
        //   //   // (optional, builds pages dynamically)
        //   //   type: "Article", // TypeName from prismic
        //   //   match: "/article/:uid", // Pages will be generated under this pattern
        //   //   path: "/article", // Placeholder page for unpublished documents
        //   //   component: require.resolve("./src/templates/article.js"),
        //   // },
        // ],
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Red Hat Display`,
            variants: [`400`, `700`, `900`],
          },
          {
            family: `Barlow`,
            variants: [`300`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
