module.exports = {
  someSidebar1: [
    {
      type: "doc",
      id: "intro",
    },
    {
      type: "category",
      label: "Download and Setup",
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
        {
          type: "link",
          label: "Install the Android app",
          href: "/installation#installation-on-android",
        },
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
        "tutorials/setup-tagspaces-web",
        "tutorials/tagspaces-web-cloudflare",
        "tutorials/tagspaces-web-docker",
        "dev/command-line-tools",
      ],
    },
    {
      type: "category",
      label: "Get Started",
      items: [
        "ui/userinterface",
        {
          type: "link",
          label: "File browsing area",
          href: "/ui/userinterface/#browsing-area",
        },
        {
          type: "link",
          label: "File preview area",
          href: "/ui/userinterface/#preview-area",
        },
        {
          type: "link",
          label: "File properties",
          href: "/ui/userinterface/#file-properties-area",
        },
        {
          type: "link",
          label: "Folder properties",
          href: "/ui/userinterface/#folder-properties-area",
        },
        {
          type: "link",
          label: "Other features",
          href: "/ui/userinterface/#dark-mode",
        },
        "ui/keybindings",
        "ui/i18n",
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
      label: "Tag Files and Folders",
      items: [
        "tagging",
        {
          type: "link",
          label: "File tagging using filename",
          href: "/tagging/#file-tagging-based-on-filenames",
        },
        {
          type: "link",
          label: "File tagging using sidecar file",
          href: "/tagging/#file-tagging-with-sidecar-file",
        },
        {
          type: "link",
          label: "Folder tagging",
          href: "/tagging/#folder-tagging-with-sidecar-file",
        },
        {
          type: "link",
          label: "Tagging operation on many entries",
          href: "/tagging/#tag-operations-on-many-entries",
        },
        {
          type: "link",
          label: "Tagging with drag and drop",
          href: "/tagging/#tagging-with-drag-and-drop",
        },
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
      label: "Search and Find",
      items: [
        "search",
        {
          type: "link",
          label: "Basic Search",
          href: "/search/#basic-search",
        },
        {
          type: "link",
          label: "Advanced Search",
          href: "/search/#advanced-search",
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
      label: "Browse Files in Perspectives",
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
        // {
        //   type: "link",
        //   label: "Supported File Formats",
        //   href: "/viewing-files/#supported-file-formats",
        // },
        // {
        //   type: "link",
        //   label: "Print files",
        //   href: "/viewing-files/#printing-files",
        // },
        "extensions/3d-viewer",
        "extensions/media-player",
        "extensions/ebook-viewer",
        "extensions/html-viewer",
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
      label: "Advanced Functionalities",
      items: [
        "annotations",
        {
          type: "link",
          label: "Custom Folder Color",
          href: "/annotations/#custom-folder-color",
        },
        "thumbnails",
        {
          type: "link",
          label: "Custom Thumbnail",
          href: "/thumbnails/#custom-thumbnail",
        },
        "dev/metafileformats",
        "dev/external-config",
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
        "tutorials/setup-minio-bucket-nas",
        "dev/extension-development-guide",
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
