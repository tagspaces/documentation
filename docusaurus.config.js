module.exports = {
  title: "TagSpaces Docs",
  tagline: "Documentation for TagSpaces",
  url: "https://tagspaces.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "tagspaces", // Usually your GitHub org/user name.
  projectName: "tagspaces", // Usually your repo name.
  plugins: [require.resolve("docusaurus-lunr-search")],
  themeConfig: {
    navbar: {
      title: "TagSpaces Docs",
      logo: {
        alt: "TagSpaces Logo",
        src: "img/logo.svg",
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
