import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'tofu-gatsby-boilerplate',
    description: 'Example project for the Gatsby Head API',
    siteUrl: 'https://www.yourdomain.tld',
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sitemap',
  ],
};

export default config;
