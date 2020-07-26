module.exports = {
  siteMetadata: {
    description: "Personal page of Ben Minifie",
    locale: "en",
    title: "Ben Minifie",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: false,
        theme: "bright-orange",
        icon: "content/images/design.svg",
      },
    },
  ],
};
