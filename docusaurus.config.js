const path = require("path");
const baseUrl = process.env.BASE_URL || "/";

module.exports = {
  title: "TagSpaces Docs",
  tagline: "Documentation for TagSpaces",
  url: "https://tagspaces.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "tagspaces", // Usually your GitHub org/user name.
  projectName: "tagspaces", // Usually your repo name.
  themes: ["@docusaurus/theme-live-codeblock"],
  plugins: [
    require.resolve("docusaurus-lunr-search"),
    [
      "@docusaurus/plugin-client-redirects",
      {
        fromExtensions: ["html"],
        redirects: [
          {
            from: ["/docs/support", "/docs/next/support"],
            to: "/",
          },
        ],
      },
    ],
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
      },
    ],
    // [
    //   "@docusaurus/plugin-pwa",
    //   {
    //     debug: false,
    //     offlineModeActivationStrategies: ["appInstalled", "queryString"],
    //     // swRegister: false,
    //     swCustom: path.resolve(__dirname, "src/sw.js"),
    //     pwaHead: [
    //       {
    //         tagName: "link",
    //         rel: "icon",
    //         href: "img/docusaurus.png",
    //       },
    //       {
    //         tagName: "link",
    //         rel: "manifest",
    //         href: `${baseUrl}manifest.json`,
    //       },
    //       {
    //         tagName: "meta",
    //         name: "theme-color",
    //         content: "rgb(37, 194, 160)",
    //       },
    //       {
    //         tagName: "meta",
    //         name: "apple-mobile-web-app-capable",
    //         content: "yes",
    //       },
    //       {
    //         tagName: "meta",
    //         name: "apple-mobile-web-app-status-bar-style",
    //         content: "#000",
    //       },
    //       {
    //         tagName: "link",
    //         rel: "apple-touch-icon",
    //         href: "img/docusaurus.png",
    //       },
    //       {
    //         tagName: "link",
    //         rel: "mask-icon",
    //         href: "img/docusaurus.svg",
    //         color: "rgb(62, 204, 94)",
    //       },
    //       {
    //         tagName: "meta",
    //         name: "msapplication-TileImage",
    //         content: "img/docusaurus.png",
    //       },
    //       {
    //         tagName: "meta",
    //         name: "msapplication-TileColor",
    //         content: "#000",
    //       },
    //     ],
    //   },
    // ],
  ],
  themeConfig: {
    navbar: {
      // title: "TagSpaces Docs",
      hideOnScroll: true,
      logo: {
        alt: "TagSpaces Logo",
        src: "img/tagspaces-docs-logo.svg",
      },
      items: [
        // {
        //   to: "docs/",
        //   activeBasePath: "docs",
        //   label: "Docs",
        //   position: "left",
        // },
        {
          href: "https://www.tagspaces.org/demo",
          label: "Live Demo",
          position: "right",
        },
        {
          href: "https://github.com/tagspaces/documentation",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    announcementBar: {
      id: "supportus",
      content:
        '⭐️ If you like TagSpaces, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/tagspaces/tagspaces">GitHub</a>! ⭐️',
    },
    prism: {
      defaultLanguage: "javascript",
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
    },
    footer: {
      style: "dark",
      links: [
        // {
        //   title: "Docs",
        //   items: [
        //     {
        //       label: "Style Guide",
        //       to: "docs/",
        //     },
        //   ],
        // },
        {
          title: "Products",
          items: [
            {
              label: "Overview",
              href: "https://www.tagspaces.org/products",
            },
            {
              label: "Community",
              href: "https://www.tagspaces.org/products/community",
            },
            {
              label: "Pro",
              href: "https://www.tagspaces.org/products/pro",
            },
            {
              label: "Enterprise",
              href: "https://www.tagspaces.org/products/enterprise",
            },
            {
              label: "Demo",
              href: "https://www.tagspaces.org/demo",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "https://www.tagspaces.org/about",
            },
            {
              label: "Press and Media",
              href: "https://www.tagspaces.org/press",
            },
            {
              label: "Imprint",
              href: "https://www.tagspaces.org/about/imprint",
            },
            {
              label: "Privacy Policy",
              href: "https://www.tagspaces.org/about/privacy",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Report Issue",
              href: "https://github.com/tagspaces/tagspaces/issues",
            },
            {
              label: "Source Code",
              href: "https://github.com/tagspaces/tagspaces",
            },
            {
              label: "Contribute",
              href: "https://www.tagspaces.org/contribute/",
            },
            {
              label: "Help with translation",
              href: "https://www.transifex.com/tagspaces/tagspaces/",
            },
          ],
        },
        {
          title: "Stay Connected",
          items: [
            {
              label: "Blog",
              href: "https://www.tagspaces.org/blog",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/tagspacesapp",
            },
            {
              label: "Instagram",
              href: "https://instagram.com/tagspaces/",
            },
            {
              label: "Facebook",
              href: "https://www.facebook.com/tagspacesapp",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TagSpaces UG (haftungsbeschraenkt). Built with Docusaurus.`,
    },
  },
  scripts: [
    {
      src: "https://plausible.io/js/plausible.js",
      // dataDomain: "tagspaces.org",
      async: true,
      defer: true,
    },
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          // homePageId: "intro",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/tagspaces/documentation/edit/master/",
        },
        // blog: {
        //   showReadingTime: true,
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
