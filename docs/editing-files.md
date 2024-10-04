import { ProFeature, CenteredImage, CenteredVideo } from '@site/src/components/CommonBlocks';

# Edit Files

Besides opening and viewing files, TagSpaces can also edit specific file formats. Just like [File Browser Perspectives](/browsing-files/#perspectives-overview), and [File Preview extensions](/viewing-file/), the different types of **File Editors** are also **modular extensions**, making TagSpaces' file editing capabilities extendable. Currently three editor extensions ship bundled with the application:

- [**HTML Editor**](/extensions/html-editor/) - `HTML` files serve a specific purpose in TagSpaces. They are treated as RichText documents, that can not only be previewed, but visually edited in a full-featured **WYSIWYG editor**.

- [**Markdown Editor**](/extensions/md-editor/) - This editor can open files in Markdown format `.md` and supports **WYSIWYG** editing.

- [**Text Editor**](/extensions/text-editor/) - This editor opens all other text-based file formats, and unknown file types alike. For `.txt` and miscellaneous files, it behaves as a simple editor, with added syntax highlighting capabilities for common programming languages.

- [**JSON Editor**](/extensions/json-editor/) - An interactive visual editor for editing and manipulating `JSON` files.

If the file format of the currently opened files is supported for editing the **EDIT button** will appear in the top right corner of the application. Clicking on this button will activate the edit mode for this file.

![Screenshot showing how start editing of a file](/media/start-file-editing.png)

Once in the edit mode the **edit button** will disappear and on its place two new buttons will be visible. Pressing on button (1) will save the current changes. This can be done in the most cases also with the **CTRL+S** key combination. Pressing the button (2) will activate the preview mode by leaving the edit mode. If the changes were not saved, the app will ask you to save them.

![Screenshot showing how start editing of a file](/media/save-preview-changes.png)

## File revisions

<ProFeature />

A key feature of document management systems is the ability to create revisions of the edited files. This feature can be enabled in the Advanced tab of the application's Settings dialog box. Once activated, a full copy of the current file (e.g. TXT, MD, HTML or JSON) is created with each save.

The revisions are stored in a subfolder of the `.ts` folder, which is located in the same folder as the file being currently edited. The name of the folder is a unique ID, which is the same as the ID of the document's sidecar file. The created file copies are listed in the Revisions tab of the file properties view, as seen in the screenshot.

![File revisions in file properties section](/media/file-revisions.png)

From here, you can preview and restore old revisions. It is also possible to delete all revisions, by clicking the button with the trash bin icon, located in the revision's table header.

## Auto-save changes

<ProFeature />

The auto-save feature can be enabled individually for each editable file. When it is enabled, the application will save any changes you
make automatically every 40 seconds. You can also save the file manually by clicking the save button or by pressing the CTRL+S
key combination.

![The switch for the auto-save functionality](/media/auto-save-switch.png)

## Increasing your workspace

All of the above editors, will initially open on the right pane of the main area. You can expand your workspace to be able to see and edit more of the document, in two ways:

- **Expand** the editor to fill the whole width of the TagSpaces UI, by pressing the **Expand button** (2) as shown in the next screenshot.
- Pressing the **Fullscreen button** (1) will open only the area of the editor in full screen mode. To exit fullscreen mode, press the (X) button located at the top right or just press the **ESC** key on your keyboard.

![Screenshot showing the distraction free edit mode](/media/distraction-free-editing.png)

## Distraction free editing

By using the fullscreen button you can edit documents in the so called **distraction free mode**. This will expand the editor area to fill the entire screen area, with no window decorations, or other UI elements, while any applicable **formatting toolbars** and the **Floating Action Button** will still be shown.
