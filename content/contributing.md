# Contributing Guide to LibreLab

LibreLab is an open source repository designed for students to get themselves involved in Open Source and encourage participation in Hacktoberfest.

With markdown as the primary form of content, LibreLab aims on the making the progress of adding posts to this site via code easy and intuitive for beginners.

---

### Prerequisites

- Github Account
- Git Installed on System (cli)
- Code editor (of preference) installed on system.
- Desire to Contribute

---

## Step Wise Contribution Process

- Fork this repository
  - Proceed to the [Github Repository](https://github.com/sx3c/xwiki) and click on the 'Fork' Option
- Clone your forked repository on your machine.
- **Make** (View the following title 'Making the Necessary Changes' for more) the required changes.
- Submit a Pull Request (Go to your forked Repository and goto Pull Requests and create one that points to the base Repository)

---

### Making the Necessary Changes

- add a markdown file with the content of your choice to ./content folder
- after adding the content, goto scripts/contentmap.js and add the following lines of code.

```javascript
const contentFiles = {
    "<...Existing Content>",
  "<slug-for-your-content>": {
    title: "<for-title>",
    file: "<name-of-yourmarkdown-file>.md",
    image: "./assets/<add suitable image to ./assets and link>",
  },
};
```

### Example:

```javascript
const contentFiles = {
  "contributing-guide": {
    title: "Contributing to LibreLab",
    file: "contributing.md",
    image: "./assets/contributing illustration.png",
  },
};
```
