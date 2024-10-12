# Contributing Guide to LibreLab

LibreLab is an open source repository designed for students to get themselves involved in Open Source and encourage participation in Hacktoberfest.

With markdown as the primary form of content, LibreLab aims on the making the progress of adding posts to this site via code easy and intuitive for beginners.i

---

### Prerequisites

- Github Account. [Create One](https://github.com/signup)
- Git Installed on System (cli) [Get Git](https://git-scm.com/downloads)
- Code editor (of preference) installed on system. [Get VS Code](https://code.visualstudio.com/)
- Preliminary Knowledge of Markdown. [Fiddle with Markdown](https://www.markdownguide.org/getting-started/)
- Desire to Contribute

---

## Regsitering For Hacktoberfest

- Before Proceeding, please register for [Hacktoberfest](https://hacktoberfest.com/)

---

## Step Wise Contribution Process

1. #### Get a Github Account

- if you don't have an account, you can head to [github.com](https://github.com/) and sign up

![Github SignUp Image](./assets/contributing-assets/sign%20up.JPG)

2. #### Fork this repository

- Proceed to the [Github Repository](https://github.com/sx3c/librelab) and click on the 'Fork' Option

![Fork Illustration](./assets/contributing-assets/fork.png)

3. #### Clone your forked repository on your machine.

- Proceed to Github Desktop and click on the option, "clone a repository from the internet", find your forked repository from the list of your repositories and click on clone.

- Note where your repository will be cloned. This is where you will be making changes/contributions.

![Github-desktop](./assets/contributing-assets/re-clone.png)

- After cloning the repository with Github Desktop, you will be presented with the following prompt, Selecting any of the two items shouldn't make much difference for our purpose. You can leave the first option selected if you want.

![Clone options](./assets/contributing-assets/clone-options.png)

4. **Make** the required changes (View the following title 'Making the Necessary Changes' for more)

5. #### Submit a Pull Request

- Go to your forked repository.
- You should be able to view the option 'Contribute', after you have made the required changes.
- Click on create pull request and go through the next process to create a Pull Request.

---

### Making the Necessary Changes

- Please view this video for clarification [Youtube Link](https://youtu.be/7hH8soFRw2w?feature=shared&t=212)

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

Your article should then appear on the home page
