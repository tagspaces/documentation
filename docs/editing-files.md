import { ProFeature, CenteredImage, CenteredVideo } from '@site/src/components/CommonBlocks';

# Edit Files

Besides opening and viewing files, TagSpaces can also edit specific file formats. Just like [File Browser Perspectives](/browsing-files/#perspectives-overview), and [File Preview extensions](/viewing-files/), the different types of **File Editors** are also **modular extensions**, making TagSpaces' file editing capabilities extendable. Currently three editor extensions ship bundled with the application:

- [**HTML Editor**](/extensions/html-editor/) - `HTML` files serve a specific purpose in TagSpaces. They are treated as RichText documents, that can not only be previewed, but visually edited in a full-featured **WYSIWYG editor**.

- [**Markdown Editor**](/extensions/md-editor/) - This editor can open files in Markdown format `.md` and supports **WYSIWYG** editing.

- [**Text Editor**](/extensions/text-editor/) - This editor opens all other text-based file formats, and unknown file types alike. For `.txt` and miscellaneous files, it behaves as a simple editor, with added syntax highlighting capabilities for common programming languages.

- [**JSON Editor**](/extensions/json-editor/) - An interactive visual editor for editing and manipulating `JSON` files.

If the file format of the currently opened files is supported for editing the **EDIT button** will appear in the top right corner of the application. Clicking on this button will activate the edit mode for this file.

<CenteredImage
    caption="Open file for editing"
    src="/media/editcreate/enter-edit-mode.avif"
    showCaption
    maxWidth={600}
  />

Once in edit mode the `Edit` button will disappear and on its place two new buttons will be appear. Pressing the `Cancel` button will revert the changes and exit the edit mode. Pressing the `Save` button will respectively save the changes, which can be done also with the `CMD/CTRL+S` key combination. After saving the changes the file will remain in edit mode and you can continue its editing. If the file is changed you will see a black dot in front of the file extension, visible in the upper left corner of the next screenshot. Saving the changes will make the dot to disappear. The `Cancel` and `Save` button will be exchanged with an`Exit editing` button, which will open the file back with file viewer extension for this file type.

<CenteredImage
    caption="Save changes"
    src="/media/editcreate/file-edited.avif"
    showCaption
    maxWidth={600}
  />

## File revisions

<ProFeature />

A key feature of document management systems is the ability to create revisions of the edited files. This feature can be enabled in the [Advanced tab](/ui/settings/#advanced) of the application's Settings dialog box. Once activated, a full copy of the current file (e.g. TXT, MD, HTML or JSON) is created with each save.

The revisions are stored in a subfolder of the `.ts` folder, which is located in the same folder as the file being currently edited. The name of the folder is a unique ID, which is the same as the ID of the document's sidecar file. The created file copies are listed in the Revisions tab of the file properties view, as seen in the screenshot.

<CenteredImage
    caption="File revisions in file properties section"
    src="/media/editcreate/file-revisions.avif"
    showCaption
    maxWidth={600}
  />

From here, you can preview and restore old revisions. It is also possible to delete all revisions, by clicking the button with the trash bin icon, located in the revision's table header.

## Auto-save changes

<ProFeature />

The auto-save feature can be enabled individually for each editable file. When it is enabled, the application will save any changes you
make automatically every 40 seconds. In the most editor extensions you can also save the file anytime manually by clicking the save button or by pressing the `CMD/CTRL+S` key combination.

<CenteredImage
    caption="A switch for activation of the auto-save functionality for the current file"
    src="/media/editcreate/auto-save-switch.avif"
    showCaption
    maxWidth={650}
  />

## Increasing your workspace

All of the above editors, will initially open on the right pane of the main area. You can expand your workspace to be able to see and edit more of the document, in two ways:

- **Expand** the editor to fill the whole width of the TagSpaces user interface, by clicking on the **Toggle full width** menu entry, shown in the next screenshot.
- Click on the **Switch to fullscreen** menu entry will open only the area of the editor in full screen mode. To exit fullscreen mode, press the (X) button located at the top right of the screen or just press the **ESC** key on your keyboard.

<CenteredImage
    caption="Distraction free editing"
    src="/media/editcreate/distraction-free-editing.avif"
    showCaption
    maxWidth={650}
  />

:::tip
By using the fullscreen feature you are editing the documents in the so called **distraction free mode**. This will expand the editor area to fill the entire screen area, with no window decorations, or other user interface elements, while any applicable **formatting toolbars** and the **Floating Action Button** will still be shown.
:::
