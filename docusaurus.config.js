const path = require("path");
const baseUrl = process.env.BASE_URL || "/";

module.exports = {
  title: "TagSpaces Docs",
  tagline: "Documentation for TagSpaces",
  url: "https://docs.tagspaces.org",
  baseUrl: "/",
  onBrokenLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "tagspaces", // Usually your GitHub org/user name.
  projectName: "tagspaces", // Usually your repo name.
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: [
    require.resolve("docusaurus-lunr-search"),
    [
      "@docusaurus/plugin-client-redirects",
      {
        // fromExtensions: ["html"],
        redirects: [
          {
            from: ["/tutorials/web-edition-setup"],
            to: "/tutorials/setup-tagspaces-web",
          },
        ],
      },
    ],
    // [
    //   "@docusaurus/plugin-ideal-image",
    //   {
    //     quality: 70,
    //     max: 1030, // max resized image's size.
    //     min: 640, // min resized image's size. if original is lower, use that size.
    //     steps: 2, // the max number of images generated between min and max (inclusive)
    //   },
    // ],
  ],
  themeConfig: {
    navbar: {
      // title: "TagSpaces Docs",
      hideOnScroll: false,
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
          href: "https://www.tagspaces.org/products/",
          label: "Our Products",
          position: "right",
        },
        {
          href: "https://www.tagspaces.org/demo/",
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
      backgroundColor: "#525252",
      textColor: "white",
      content:
        '⭐️ If you like TagSpaces, upvote it on <a target="_blank" href="https://www.producthunt.com/posts/tagspaces-2">Product Hunt</a> or recommend it on <a target="_blank" rel="noopener noreferrer" href="https://alternativeto.net/software/tagspaces/about/">AlternativeTo</a>!! ⭐️',
    },
    // announcementBar: {
    //   id: "blackweek2022",
    //   backgroundColor: "#525252",
    //   textColor: "white",
    //   content:
    //     'Black Week 2022 - 10% off for <a href="https://www.tagspaces.org/products/">TagSpaces Pro</a>!',
    // },
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
              href: "https://www.tagspaces.org/products/",
            },
            {
              label: "Lite",
              href: "https://www.tagspaces.org/products/lite/",
            },
            {
              label: "Pro",
              href: "https://www.tagspaces.org/products/pro/",
            },
            {
              label: "Enterprise",
              href: "https://www.tagspaces.org/products/enterprise/",
            },
            {
              label: "Demo",
              href: "https://demo.tagspaces.com/",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "https://www.tagspaces.org/about/",
            },
            {
              label: "Press and Media",
              href: "https://www.tagspaces.org/press/",
            },
            {
              label: "Imprint",
              href: "https://www.tagspaces.org/about/imprint/",
            },
            {
              label: "Privacy Policy",
              href: "https://www.tagspaces.org/about/privacy/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Forums",
              href: "https://tagspaces.discourse.group",
            },
            {
              label: "Suggest Feature",
              href: "https://tagspaces.discourse.group/c/feature-requests/6",
            },
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
          title: "Spread the word",
          items: [
            {
              label: "Like us on AlternativeTo",
              href: "https://alternativeto.net/software/tagspaces/",
            },
            {
              label: "Featured on Product Hunt",
              href: "https://www.producthunt.com/products/tagspaces",
            },
            {
              label: "Like us on Slant",
              href: "https://www.slant.co/options/17524/~tagspaces-review",
            },
            // {
            //   label: "Email",
            //   href: customFields.emailUsUrl,
            // },
            {
              html: `
                  <br>
                  <a href="https://www.youtube.com/@tagspaces" target="_blank" rel="noreferrer noopener"><svg class="footerIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"></path></svg></a>&nbsp;
                  <a href="https://twitter.com/tagspaces" target="_blank" rel="noreferrer noopener"><svg class="footerIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path></svg></a>&nbsp;       
                  <a href="https://instagram.com/tagspaces/" target="_blank" rel="noreferrer noopener"><svg class="footerIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg></a>&nbsp;           
                  <a href="https://www.tagspaces.org/blog/rss.xml" target="_blank" rel="noreferrer noopener"><svg class="footerIcon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="6.18" cy="17.82" r="2.18"></circle><path d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z"></path></svg></a>&nbsp;
                  <a href="https://github.com/tagspaces/tagspaces" target="_blank" rel="noreferrer noopener"><svg class="footerIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"></path></svg></a>                                               
                  <br><br>
                  <iframe height=40 src="https://ghbtns.com/github-btn.html?user=tagspaces&amp;repo=tagspaces&amp;type=watch&amp;count=true"></iframe>
                  <a href="https://www.producthunt.com/posts/tagspaces-2?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-tagspaces&#0045;2" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=371129&theme=light" alt="TagSpaces - A&#0032;file&#0032;manager&#0032;with&#0032;tagging&#0032;and&#0032;note&#0045;taking&#0032;capabilities&#0046; | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>                  
                  `,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TagSpaces GmbH. Built with Docusaurus.`,
    },
  },
  scripts: [
    {
      src: "https://consent.cookiebot.com/uc.js",
      "data-cbid": "ce1b9450-89a1-425c-861d-2c4b50a53c53",
      "data-blockingmode": "auto",
    },
    {
      src: "https://plausible.io/js/plausible.js",
      "data-domain": "docs.tagspaces.org",
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
          showLastUpdateTime: true,
          editUrl: "https://github.com/tagspaces/documentation/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          // trailingSlash: true,
        },
      },
    ],
  ],
};
