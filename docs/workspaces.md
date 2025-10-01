---
title: Overview
---

import { ProFeature, CenteredImage, FullScreenImage } from '@site/src/components/CommonBlocks';

# Workspaces

<ProFeature />
_Workspaces_ are a new way to organize your **locations** and **tag groups** in TagSpaces. They allow you to separate different contexts—such as work, personal projects, or hobbies—into their own dedicated spaces, making it easier to stay focused and organized.

---

## Why Use Workspaces?

- **Keep projects separate** – Switch between different areas of your life without mixing files or tags.
- **Better navigation** – Only see the locations and tags relevant to the active workspace.
- **Flexible organization** – Create as many workspaces as you need (e.g., Work, Personal, Research, Photography).
- **Focused search results** – If you are in the context of a given workspace the global search functionality will give you only results from the locations assigned to the current workspace.

---

## Managing Workspaces

### Creating a New workspace

1. Open the advanced settings tab and scroll down.
2. Click on **“Create workspace”** to add a new workspace.

<CenteredImage
    caption="Screenshot of add workspace dialog"
    src="/media/workspaces/create-workspace.avif"
    showCaption
    maxWidth="650px"
/>

3. In the opened dialog, you have to enter a short name for your workspace (e.g., WPG1, 🍭). The short name can be an abbreviation or an emoji and will be displayed after the name of the locations and tag group to which this workspace will be assigned.
4. Enter a full name for your workspace (e.g., “Work Projects 1”).
5. Click the Ok button to finish the creation.

---

### Switching Between Workspaces

- Use the **workspaces dropdown** in the sidebar to switch between available workspaces.
- When you switch, the UI updates to show only the locations and tag groups that belong to the selected workspace.

<CenteredImage
    caption="Screenshot of workspaces' dropdown menu"
    src="/media/workspaces/workspaces-changing.avif"
    showCaption
    maxWidth="300px"
/>

---

### Editing or Deleting a Workspace

- Open the **workspace settings dialog**.

<CenteredImage
    caption="Screenshot of the dialog where you can edit and delete workspaces"
    src="/media/workspaces/edit-delete-workspace.avif"
    showCaption
    maxWidth="650px"
/>

- From here, you can rename, reassign, or delete a workspace.

---

## Workspaces and Tag Groups

Each workspace can have its own **tag groups**, keeping your tags organized by context. For example:

- In a **Work** workspace: `clientA`, `invoice`, `meeting`.
- In a **Personal** workspace: `travel`, `recipes`, `health`.

Switching workspaces also switches which tag groups are visible. If there are no tag groups assigned to the current workspace, all tag group will be displayed.

You can assign a workspace to a tag group in the properties of a given tag group. In the **edit tag group** dialog, you will find a dropdown, with which you can assign the current tag group to a workspace. The **plus button** in this dropdown will the workspace creation dialog. The **minus button** will disconnect the workspace from the tag group.

<CenteredImage
    caption="Screenshot of the tag group properties dialog, where you can assign workspace to a tag group"
    src="/media/workspaces/assign-workspace-taggroup.avif"
    showCaption
    maxWidth="650px"
/>

---

## Workspaces and Locations

You can assign **locations** (folders or drives) to specific workspaces. This ensures you’ll only see the relevant locations when working in a given workspace.

In order to do this, you have to open the properties of a given location, from the location's context menu. In the **More properties** area, you will find a dropdown, with which you can assign the current location to a workspace. The **plus button** in this dropdown will the workspace creation dialog. The **minus button** will disconnect the workspace from the location.

<CenteredImage
    caption="Screenshot of the location properties dialog, where you can assign workspace to a location"
    src="/media/workspaces/assign-workspace-location.avif"
    showCaption
    maxWidth="650px"
/>

---

## Tips & Best Practices

- Use workspaces to **separate professional and personal content**.
- Create dedicated workspaces for **large projects** with their own tag structure.
- If you handle sensitive data, a separate workspace can help keep it isolated.

---

## Limitations

- Locations and tag groups can belong to only **one workspace at a time**.
- Workspaces are stored locally—if you use multiple devices, you’ll need to configure them individually.

---

## Related Topics

- [Managing Locations](/ui/locations.md)
- [Using Tag Groups](/ui/taglibrary.md)
- [Organizing Files with Tags](/tagging.md)
