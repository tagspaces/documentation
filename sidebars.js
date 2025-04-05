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
      label: "Download and Install",
      items: [
        "installation",
        {
          type: "link",
          label: "Install the Windows desktop app",
          href: "/installation#installation-on-windows",
        },
        {
          type: "link",
          label: "Install the macOS desktop app",
          href: "/installation#installation-on-macos",
        },
        {
          type: "link",
          label: "Install the Linux desktop app",
          href: "/installation#installation-on-linux",
        },
        {
          type: "link",
          label: "Running in portable mode",
          href: "/installation#running-in-portable-mode",
        },
        "tutorials/tagspaces-web-docker",
        "tutorials/tagspaces-web-cloudflare",
        "tutorials/setup-tagspaces-web",
        {
          type: "link",
          label: "Install the Firefox extension",
          href: "/installation#installing-the-firefox-browser-extension",
        },
        {
          type: "link",
          label: "Install the Chrome extension",
          href: "/installation#installing-the-chrome-browser-extension",
        },
        {
          type: "link",
          label: "Install the Android app",
          href: "/installation#installation-on-android",
        },
      ],
    },
    {
      type: "category",
      label: "Get Started",
      items: [
        "ui/userinterface",
        {
          type: "link",
          label: "Left Drawer",
          href: "/ui/userinterface/#left-drawer",
        },
        {
          type: "link",
          label: "Navigation and Search",
          href: "/ui/userinterface/#navigation-and-search",
        },
        {
          type: "link",
          label: "Preview Area",
          href: "/ui/userinterface/#preview-area",
        },
        // {
        //   type: "link",
        //   label: "File properties",
        //   href: "/files#file-properties",
        // },
        // {
        //   type: "link",
        //   label: "Folder properties",
        //   href: "/folders#folder-properties",
        // },
        {
          type: "link",
          label: "Dark Mode and Themes",
          href: "/ui/userinterface/#dark-mode-and-themes",
        },
        {
          type: "link",
          label: "Multiple Windows and Tabs",
          href: "/ui/userinterface/#multiple-windows-and-tabs",
        },
        {
          type: "link",
          label: "Scalable User Interface",
          href: "/ui/userinterface/#scalable-user-interface",
        },
        {
          type: "link",
          label: "Full Screen Mode",
          href: "/ui/userinterface/#full-screen-mode",
        },
        {
          type: "link",
          label: "Tray Menu",
          href: "/ui/userinterface/#tray-menu",
        },
      ],
    },
    {
      type: "category",
      label: "Locations",
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
      ],
    },
    {
      type: "category",
      label: "Search and Find",
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
          label: "Search History",
          href: "/search/#search-history",
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
      label: "Files and Folders",
      items: [
        "files",
        // {
        //   type: "link",
        //   label: "File Properties",
        //   href: "/files#file-description",
        // },
        {
          type: "link",
          label: "File Description",
          href: "/files#file-description",
        },
        {
          type: "link",
          label: "File Thumbnails",
          href: "/files#file-thumbnails",
        },
        "folders",
        {
          type: "link",
          label: "Folder Description",
          href: "/folders#folder-description",
        },
        {
          type: "link",
          label: "Folder Default Perspective",
          href: "/folders#default-folder-perspective",
        },
        {
          type: "link",
          label: "Folder Thumbnail",
          href: "/folders#folder-thumbnail",
        },
        {
          type: "link",
          label: "Folder Background",
          href: "/folders#folder-background",
        },
        {
          type: "link",
          label: "Folder Wallpaper",
          href: "/folders#folder-background-image",
        },
      ],
    },
    {
      type: "category",
      label: "Tag Library",
      items: [
        "ui/taglibrary",
        {
          type: "link",
          label: "Smart tags",
          href: "/ui/taglibrary/#smart-tags",
        },
        {
          type: "link",
          label: "Tagging with timestamps",
          href: "/ui/taglibrary/#custom-timestamp-tagging",
        },
        {
          type: "link",
          label: "Geo-tagging",
          href: "/ui/taglibrary/#geo-tagging",
        },
        {
          type: "link",
          label: "Location tags",
          href: "/ui/taglibrary/#location-tags",
        },
      ],
    },
    {
      type: "category",
      label: "Tag Files and Folders",
      items: [
        "tagging",
        {
          type: "link",
          label: "File tagging using filename",
          href: "/tagging#storing-tags-in-file-names",
        },
        {
          type: "link",
          label: "File tagging using sidecar file",
          href: "/tagging#storing-tags-in-sidecar-files",
        },
        {
          type: "link",
          label: "Folder tagging",
          href: "/tagging#folder-tagging",
        },
        {
          type: "link",
          label: "Tagging operation on many entries",
          href: "/tagging/#tag-operations-on-multiple-entries",
        },
        {
          type: "link",
          label: "Tagging with drag and drop",
          href: "/tagging/#tagging-with-drag-and-drop",
        },
      ],
    },
    {
      type: "category",
      label: "Browse Files and Folders",
      items: [
        "browsing-files",
        "perspectives/grid",
        "perspectives/list",
        "perspectives/gallery",
        "perspectives/mapique",
        "perspectives/kanban",
        "perspectives/folderviz",
      ],
    },
    {
      type: "category",
      label: "Preview Files",
      items: [
        "viewing-files",
        "supported-file-formats",
        "extensions/media-player",
        "extensions/ebook-viewer",
        "extensions/html-viewer",
        "extensions/3d-viewer",
        "extensions/image-viewer",
        "extensions/md-viewer",
        "extensions/mhtml-viewer",
        "extensions/mindmap-viewer",
        "extensions/msg-viewer",
        "extensions/pdf-viewer",
        "extensions/rtf-viewer",
        "extensions/document-viewer",
        "extensions/slides-viewer",
        "extensions/spreadsheet-viewer",
        "extensions/text-viewer",
        "extensions/url-viewer",
        "extensions/archive-viewer",
        "extensions/font-viewer",
      ],
    },
    {
      type: "category",
      label: "Create and Edit Files",
      items: [
        "creating-files",
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
      label: "Sharing and Linking",
      items: ["sharing", "linking"],
    },
    {
      type: "category",
      label: "Quick Access Area",
      items: [
        "quick-access",
        "bookmarks",
        {
          type: "link",
          label: "Stored Search Queries",
          href: "/search/#stored-search-queries",
        },
      ],
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
      ],
    },
    {
      type: "category",
      label: "Advanced Topics",
      items: [
        "ui/keybindings",
        "ui/i18n",
        "thumbnails",
        "ai",
        "dev/metafileformats",
        "dev/deployment",
        "dev/external-config",
        "dev/command-line-tools",
      ],
    },
    {
      type: "category",
      label: "Tutorials",
      items: [
        "web-clipper",
        "tutorials/file-syncing",
        "tutorials/sharing-tags",
        "tutorials/s3-bucket-locations",
        "tutorials/wasabi-locations",
        "tutorials/tagspaces-web-wasabi",
        "tutorials/folders-as-objectstorage-with-s3proxy",
        "tutorials/setup-minio-bucket-nas",
        // "dev/extension-development-guide",
        "tutorials/e2ee-with-tagspaces-and-cryptomator",
        "tutorials/map-tiler-tutorial",
        // "selfhosting",
        // "tutorials/sabre-dav-setup",
      ],
    },
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
