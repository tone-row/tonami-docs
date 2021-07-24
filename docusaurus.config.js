const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Tonami",
  tagline: "CSS in JS + CSS Custom Properties = ❤️",
  url: "https://tonami.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  themes: ["@docusaurus/theme-live-codeblock"],
  organizationName: "tone-row", // Usually your GitHub org/user name.
  projectName: "tonami", // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: false,
    navbar: {
      title: "Tonami",
      logo: {
        alt: "Tonami",
        src: "img/logo.svg",
      },
      items: [
        {
          href: "https://github.com/tone-row/tonami",
          label: "GitHub",
          position: "right",
        },
        // {
        //   type: "logo",
        //   src: "https://img.shields.io/github/stars/tone-row/tonami?style=social",
        // },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Overview",
              to: "/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/nbqTWkjM",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/tone-row",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/tone-row/tonami",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tone Row. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/tone-row/tonami-docs/edit/main/",
          routeBasePath: "/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
