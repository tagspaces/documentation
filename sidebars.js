// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: "doc",
      id: "intro",
    },
    {
      type: "category",
      label: "Getting Started",
      items: [
        "installation",
        "tutorials/how-to-start",
        "ui/userinterface",
        {
          type: "link",
          label: "Upgrading TagSpaces Pro",
          href: "/installation/#tagspaces-pro",
        },
      ],
    },
    {
      type: "category",
      label: "Locations & Workspaces",
      items: [
        "ui/locations",
        {
          type: "link",
          label: "Local Locations",
          href: "/ui/locations/#local-locations",
        },
        {
          type: "link",
          label: "Object Storage Locations (S3)",
          href: "/ui/locations/#object-storage-locations",
        },
        {
          type: "link",
          label: "Advanced Features",
          href: "/ui/locations/#advanced-features",
        },
        "workspaces",
      ],
    },
    {
      type: "category",
      label: "Files & Folders",
      items: ["files", "folders", "thumbnails", "supported-file-formats"],
    },
    {
      type: "category",
      label: "Tagging",
      items: [
        "tagging",
        {
          type: "link",
          label: "Tagging Using Filename",
          href: "/tagging#storing-tags-in-file-names",
        },
        {
          type: "link",
          label: "Tagging Using Sidecar File",
          href: "/tagging#storing-tags-in-sidecar-files",
        },
        {
          type: "link",
          label: "Folder Tagging",
          href: "/tagging#folder-tagging",
        },
        {
          type: "link",
          label: "Tagging Multiple Entries",
          href: "/tagging/#tag-operations-on-multiple-entries",
        },
        "ui/taglibrary",
        {
          type: "link",
          label: "Smart Tags",
          href: "/ui/taglibrary/#smart-tags",
        },
        {
          type: "link",
          label: "Tagging with Timestamps",
          href: "/ui/taglibrary/#custom-timestamp-tagging",
        },
        {
          type: "link",
          label: "Geo-tagging",
          href: "/ui/taglibrary/#geo-tagging",
        },
        {
          type: "link",
          label: "Location Tags",
          href: "/ui/taglibrary/#location-tags",
        },
      ],
    },
    {
      type: "category",
      label: "Search & Find",
      items: [
        "search",
        {
          type: "link",
          label: "Search Query",
          href: "/search/#search-query",
        },
        {
          type: "link",
          label: "Search Filters",
          href: "/search/#search-filters",
        },
        {
          type: "link",
          label: "Indexing",
          href: "/search/#indexing",
        },
        {
          type: "link",
          label: "Full-Text Search",
          href: "/search/#full-text-search",
        },
        {
          type: "link",
          label: "Global Search",
          href: "/search/#global-search",
        },
        {
          type: "link",
          label: "Stored Search Queries",
          href: "/search/#stored-search-queries",
        },
      ],
    },
    {
      type: "category",
      label: "Browsing",
      items: [
        "browsing-files",
        "perspectives/grid",
        "perspectives/list",
        "perspectives/gallery",
        "perspectives/mapique",
        "perspectives/kanban",
        "perspectives/folderviz",
        "perspectives/calendar",
      ],
    },
    {
      type: "category",
      label: "Viewing Files",
      items: [
        "viewing-files",
        {
          type: "category",
          label: "Media",
          items: [
            "extensions/image-viewer",
            "extensions/media-player",
            "extensions/3d-viewer",
            "extensions/ebook-viewer",
          ],
        },
        {
          type: "category",
          label: "Documents",
          items: [
            "extensions/pdf-viewer",
            "extensions/html-viewer",
            // "extensions/md-viewer",
            "extensions/mhtml-viewer",
            "extensions/msg-viewer",
            "extensions/spreadsheet-viewer",
            "extensions/document-viewer",
            "extensions/rtf-viewer",
            "extensions/slides-viewer",
            "extensions/marp-viewer",
          ],
        },
        {
          type: "category",
          label: "Archives & Other",
          items: [
            "extensions/archive-viewer",
            "extensions/canvas-viewer",
            "extensions/mindmap-viewer",
            "extensions/contact-viewer",
            "extensions/font-viewer",
            "extensions/url-viewer",
            "extensions/text-viewer",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Creating & Editing Files",
      items: [
        "creating-files",
        {
          type: "link",
          label: "Using Templates",
          href: "/creating-files/#new-from-template",
        },
        {
          type: "link",
          label: "Import Files",
          href: "/creating-files/#importing-files",
        },
        "editing-files",
        "extensions/md-editor",
        "extensions/html-editor",
        "extensions/text-editor",
        "extensions/json-editor",
      ],
    },
    {
      type: "category",
      label: "AI Chat & LLM Integration",
      items: [
        "ai",
        {
          type: "link",
          label: "Configuration",
          href: "/ai/#prerequisites",
        },
        {
          type: "link",
          label: "Folder AI Chat",
          href: "/ai/#folder-ai-chat",
        },
        {
          type: "link",
          label: "AI Features for Files",
          href: "/ai/#ai-features-for-files",
        },
        {
          type: "link",
          label: "Advanced Features",
          href: "/ai/#advanced-features",
        },
      ],
    },
    {
      type: "category",
      label: "Linking & Sharing",
      items: ["linking", "sharing"],
    },
    {
      type: "category",
      label: "Quick Access & Bookmarks",
      items: ["quick-access", "bookmarks"],
    },
    {
      type: "category",
      label: "Settings",
      items: [
        "ui/settings",
        {
          type: "link",
          label: "General",
          href: "/ui/settings/#general",
        },
        {
          type: "link",
          label: "File Types",
          href: "/ui/settings/#file-types",
        },
        {
          type: "link",
          label: "File Templates",
          href: "/ui/settings/#file-templates",
        },
        {
          type: "link",
          label: "Key Bindings",
          href: "/ui/settings/#key-bindings",
        },
        {
          type: "link",
          label: "Extensions",
          href: "/ui/settings/#extensions",
        },
        {
          type: "link",
          label: "Advanced",
          href: "/ui/settings/#advanced",
        },
        {
          type: "link",
          label: "AI",
          href: "/ui/settings/#ai-settings",
        },
        "ui/keybindings",
        "ui/i18n",
      ],
    },
    {
      type: "category",
      label: "Tutorials & Guides",
      items: [
        "tutorials/overview",
        {
          type: "category",
          label: "Collaborative Use",
          items: [
            "tutorials/using-tagspaces-collaboratively",
            "tutorials/sharing-tags",
            "tutorials/file-syncing",
          ],
        },
        {
          type: "category",
          label: "Cloud Storage",
          items: [
            "tutorials/s3-bucket-locations",
            "tutorials/wasabi-locations",
            "tutorials/contabo-storage",
            "tutorials/cloudflare-r2-storage",
            "tutorials/garage-storage",
            "tutorials/setup-minio-bucket-nas",
            "tutorials/folders-as-objectstorage-with-s3proxy",
          ],
        },
        {
          type: "category",
          label: "Web Deployment",
          items: [
            "tutorials/setup-tagspaces-web",
            "tutorials/tagspaces-web-docker",
            "tutorials/tagspaces-web-cloudflare",
            "tutorials/tagspaces-web-wasabi",
          ],
        },
        {
          type: "category",
          label: "Advanced",
          items: [
            "tutorials/e2ee-with-tagspaces-and-cryptomator",
            "tutorials/map-tiler-tutorial",
            // "tutorials/folder-customizations",
            // "tutorials/ai-chat-management",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Developer Documentation",
      items: [
        "dev/external-config",
        "dev/command-line-tools",
        "dev/extension-development-guide",
        "dev/metafileformats",
        "dev/deployment",
      ],
    },
    "web-clipper",
    {
      type: "category",
      label: "About",
      items: [
        "aboutdocs",
        {
          type: "link",
          label: "Documentation tags",
          href: "/tags",
        },
      ],
    },
  ],
};

export default sidebars;
