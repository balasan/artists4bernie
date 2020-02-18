require(`dotenv`).config({
  path: `.env`
});

console.log("CLIENT_EMAIL", process.env.CLIENT_EMAIL);

module.exports = {
  siteMetadata: {
    siteTitle: `Artists4Bernie`,
    siteTitleAlt: `Artists4Bernie`,
    author: "DIS",
    siteImage: "/banner.jpg",
    siteHeadline: "Artists4Bernie",
    siteLanguage: "en",
    siteDescription:
      "Artists4Bernie is an artist-led campaign to endorse Bernie Sanders for President. Sign your name and join us to build a better future for our world.",
    siteUrl: "https://artists4bernie.org"
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          {
            title: `Letter of Support`,
            slug: `/letter`
          }
        ],
        externalLinks: [
          {
            name: "Contact",
            target: "_blank",
            url: "mailto:unitedartistsforbernie2020@gmail.com"
          },
          {
            name: `Volunteer`,
            target: "_blank",
            url: `https://berniesanders.com/volunteer/`
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID
      }
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Artists4Bernie`,
        short_name: `Artists4Bernie`,
        description: `Artists4Bernie is an artist-led campaign to endorse Bernie Sanders for President. Sign your name and join us to build a better future for our world.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`
      }
    },
    `gatsby-plugin-offline`,
    // `gatsby-plugin-netlify`,
    // Add and modify this plugin config to your `gatsby-config.js`:
    {
      resolve: "gatsby-source-google-spreadsheet",
      options: {
        spreadsheetId: "1i8GuzAQEm-rPHX57M20wStZA2CmgcpgQgXdBSsRdIP8",
        typePrefix: "GoogleSpreadsheet",
        credentials: {
          client_email: process.env.CLIENT_EMAIL,
          private_key: process.env.PRIVATE_KEY
        },
        filterNode: () => true,
        mapNode: node => node
      }
    }
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ]
};
