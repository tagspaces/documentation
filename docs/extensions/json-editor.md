# JSON Editor

A TagSpaces extension allowing viewing and editing of JSON documents.

## Features

- Open and edit JSON documents graphically

![Screenshot of the editorJSON](/media/extensions/editor-json-lead.png)

## Used libraries

This extension thankfully relays on the following great libraries:

- [JSON editor](https://github.com/josdejong/jsoneditor)
- [Bootstrap](https://getbootstrap.com/)
- [i18next](https://www.i18next.com/)
- [Mark.js](https://markjs.io/)

## Installation

This extensions is packaged with any new version of TagSpaces

## User Manual

Editing `JSON` files will build upon the functionality you've already seen in the **JSON Preview mode**.

![](/media/json-editor.png)

The top row of the editor will offer a basic toolbar, with some common actions such as **Expand all fields** (**1**), **Collapse all fields** (**2**), **Undo** and **Redo** (**3**) and a search box (**4**)

![](/media/json-editor-toolbar.png)

Each field has some useful controls that can help manipulate and rearrange `JSON` files easily.

![](/media/json-editor-parts.png)

- On the left edge, there is a drag handle, allowing for easy movement of each row. (**1**)

- Next to the drag handle there is an **Action Menu Button** (**2**), which opens the **Action Menu** (**3**), offering useful actions on each field, such as:

  - You can choose or change the **Type** of the field, choosing from _Auto_, _Object_, _Array_, or _String_

  - You can **Insert** an _Array_, _Object_, or _String_ inside any field. (There is also an _Auto_ mode for insertion). Inserting will place the new field **before** the selected field.

  - When selecting the **Action menu** on the last member of an _Object_ or _Array_, you can also **Append** the same categories, which will place the new field **after** the last item.

  - _Objects_ and _Arrays_ will also allow for **Sorting**, as either *Ascending or *Descending\*

  - Finally you can **Duplicate** or **Remove** any field from the hierarchy, (apart from the root)

- To the right of the Action menu button, there is an **Open/Close chevron** (**4**), which can expand or collapse each field.

- Finally you have the field itself, with one (**5**) (for arrays and objects) or two editable sections (**6**) (for string type), and an optional, read only information field (**7**), that displays the number of sub-fields, in either curly brackets `{ }` (for objects), or square brackets `[ ]` () for arrays.

The **FAB Overflow Menu** will offer to either **Print** the file, or display a **JSON Help** menu, which gives a summary of the numerous key combinations that can be used to work on JSON files even faster.

## Source code

The source code of this extension is freely available on [GitHub](https://github.com/tagspaces/tagspaces-extensions/tree/main/json-editor)

## Development

If you want to extend this extensions, please follow our general [extension development guide](/dev/extension-development-guide)

## License

[MIT](https://github.com/tagspaces/tagspaces-extensions/blob/main/json-editor/LICENSE.txt)
