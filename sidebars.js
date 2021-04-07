module.exports = {
  someSidebar1: {
    Introduction: [
      "intro",
      // {
      //   type: "link",
      //   label: "About TagSpaces",
      //   href: "/#about-tagspaces",
      // },
      "aboutdocs",
      // "writehelp",
    ],
    "Download and Setup": [
      "installation",
      {
        type: "link",
        label: "Windows",
        href: "/installation#installation-on-windows",
      },
      {
        type: "link",
        label: "macOS",
        href: "/installation#installation-on-macos",
      },
      {
        type: "link",
        label: "Linux",
        href: "/installation#installation-on-linux",
      },
      {
        type: "link",
        label: "Android",
        href: "/installation#installation-on-android",
      },
      {
        type: "link",
        label: "Firefox Browser Extension",
        href: "/installation#installing-the-firefox-browser-extension",
      },
      {
        type: "link",
        label: "Chrome Browser Extension",
        href: "/installation#installing-the-chrome-browser-extension",
      },
      {
        type: "link",
        label: "TagSpaces Pro",
        href: "/installation#installing-tagspaces-pro",
      },
      {
        type: "link",
        label: "Running in portable mode",
        href: "/installation#running-in-portable-mode",
      },
      "tutorials/web-edition-setup",
    ],
    "Get Started": [
      "ui/userinterface",
      "ui/locations",
      {
        type: "link",
        label: "Cloud Locations",
        href: "/ui/locations#cloud-locations",
      },
      "ui/taglibrary",
      // "ui/userinterface#browsing-area)
      // "ui/userinterface#preview-area)
      // "ui/userinterface#file-properties-area)
      // "ui/userinterface#folder-properties-area)
      // "ui/userinterface#dark-mode)
      // "ui/userinterface#zoomable-user-interface)
      // "ui/userinterface#full-screen-mode)
      "ui/keybindings",
      "ui/settings",
      "ui/i18n",
    ],
    "Browse Files": [
      "browsing-files",
      "perspectives/grid",
      "perspectives/gallery",
      "perspectives/mapique",
      "perspectives/kanban",
      "perspectives/folderviz",
      // "perspectives/treeviz",
    ],
    "Tag Files and Folders": [
      "tagging",
      {
        type: "link",
        label: "File tagging based on filename",
        href: "/tagging#file-tagging-based-on-filenames",
      },
      {
        type: "link",
        label: "File tagging with sidecar file",
        href: "/tagging#file-tagging-with-sidecar-file",
      },
      {
        type: "link",
        label: "Folder tagging with sidecar file",
        href: "/tagging#folder-tagging-with-sidecar-file",
      },
      {
        type: "link",
        label: "Tagging using context menus ⚒",
        href: "/tagging#tagging-using-context-menus",
      },
      {
        type: "link",
        label: "Tagging with drag and drop ⚒",
        href: "/tagging#tagging-with-drag-and-drop",
      },
      {
        type: "link",
        label: "Smart tags ⚒",
        href: "/tagging#smart-tags",
      },
      {
        type: "link",
        label: "Custom timestamp tagging ⚒",
        href: "/tagging#custom-timestamp-tagging",
      },
      {
        type: "link",
        label: "Geo-tagging ⚒",
        href: "/tagging#geo-tagging",
      },
    ],
    "Search Functionality": [
      "search",
      {
        type: "link",
        label: "Basic Search",
        href: "/search#basic-search",
      },
      {
        type: "link",
        label: "Advanced Search",
        href: "/search#advanced-search",
      },
      {
        type: "link",
        label: "Full-Text Search",
        href: "/search#full-text-search",
      },
      {
        type: "link",
        label: "Global Search",
        href: "/search#global-search",
      },
    ],
    "View and Print Files": [
      "viewing-files",
      {
        type: "link",
        label: "Supported File Formats",
        href: "/viewing-files#supported-file-formats",
      },
      {
        type: "link",
        label: "File Printing",
        href: "/viewing-files#printing-files",
      },
      {
        "Viewer Extensions": [
          "extensions/viewerAudioVideo",
          "extensions/viewerBrowser",
          "extensions/viewerEPUB",
          "extensions/viewerHTML",
          "extensions/viewerImage",
          "extensions/viewerMD",
          "extensions/viewerMHTML",
          "extensions/viewerPDF",
          "extensions/viewerRTF",
          "extensions/viewerText",
          "extensions/viewerURL",
          "extensions/viewerZIP",
        ],
      },
    ],
    "Create and Edit Files": [
      "creating-files",
      {
        type: "link",
        label: "Importing Files",
        href: "/creating-files#importing-files",
      },
      "editing-files",
      {
        "Editor Extensions": [
          "extensions/editorHTML",
          "extensions/editorText",
          "extensions/editorJSON",
        ],
      },
    ],
    // "Annotating Files & Folders": [
    //   "annotations#",
    // ],
    "Advanced Functionalities": [
      "annotations",
      // {
      //   type: "link",
      //   label: "File & Folder Descriptions",
      //   href: "/annotations",
      // },
      {
        type: "link",
        label: "Custom Folder Colors",
        href: "/annotations#customFolderColor",
      },
      "thumbnails",
      {
        type: "link",
        label: "Custom Thumbnails",
        href: "/thumbnails#customThumbnails",
      },
      "dev/metafileformats",
      "dev/external-config",
    ],
    Tutorials: [
      "web-clipper",
      "tutorials/file-syncing",
      "tutorials/sharing-tags",
      "tutorials/s3-bucket-locations",
      "tutorials/setup-minio-bucket-nas",
      "dev/extension-development-guide",
      "selfhosting",
      "tutorials/sabre-dav-setup",
    ],
  },
};
