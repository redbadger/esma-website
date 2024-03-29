require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const googleAnalyticsTrackingId = "UA-179380345-1";

module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `Employers Social Mobility Alliance`,
    description: `Social inequality is persistent and systematic. Often where you start in life is where you’ll end up. Together we can change this.`,
    author: ``,
    gaTrackingId: googleAnalyticsTrackingId,
    hostName: `esma.network`,
  },
  plugins: [
    `gatsby-transformer-ffmpeg`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: googleAnalyticsTrackingId,
        },
        environments: ["production"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `video`,
        path: `${__dirname}/src/video`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `svg`,
        path: `${__dirname}/src/svg`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/svg/logo/favicon.svg`,
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: [`Montserrat:300,400,500,600,700`],
        },
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
        endpoint: process.env.MAILCHIMP_ENDPOINT,
      },
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        useAutoGen: true,
        exclude: [`/404/`, `/404.html`],
        trailingSlashes: true,
        usePathPrefix: "/",
      },
    },
    {
      resolve: `gatsby-redirect-from`,
      options: {
        query: `allMdx`,
      },
    },
    `gatsby-plugin-meta-redirect`,
  ],
};
