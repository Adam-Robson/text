# Edit Text in React

## Description

[![Netlify Status](https://api.netlify.com/api/v1/badges/8f74ff49-eb7d-40f6-a84d-e6516fea3d6b/deploy-status)](https://app.netlify.com/sites/edittextinreact/deploys)
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://adamrobson.vercel.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/adamrayrobson)

This is a text editing web application built with [React](https://react.dev/) and [Webpack](https://webpack.js.org/).

---

Live demo on Netlify [here](htttps://edittextinreact.netlify.app).

---

## Table of Contents

- [Edit Text in React](#edit-text-in-react)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Summary](#summary)
  - [Technologies Used](#technologies-used)
  - [Objectives](#objectives)
  - [Authors](#authors)
  - [Run Locally](#run-locally)
  - [Acknowledgements](#acknowledgements)
  - [Contact](#contact)

## Summary

This project was built in my free time. It was started when I was in the July 2022 cohort at Alchemy Code Lab in Portland, Oregon.

The Text Editor is a React web application originally developed as an exercise in state management and configuration. It was originally built from scratch using Webpack. As time progressed, I integrated a Markdown editor and toggle button for changing the views. As elements in the editing panel are updated, their values are reflected in the preview panel. Users can download the resulting document in a `.txt` file.

## Technologies Used

- React
- React-Markdown
- JSX
- JavaScript
- Node
- HTML
- CSS
- Webpack
- Babel
- ESLint
- Prettier
- GitHub Actions
- Netlify


> ESLint configuration:

> This project includes an updated configuration that enables type aware lint rules:
> Replaced `plugin:@typescript-eslint/recommended` with `plugin:@typescript-eslint/strict-type-checked` and `plugin:@typescript-eslint/stylistic-type-checked`
> Installed [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and added `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
> The top-level `parserOptions` property was added based on the recommendation from Vite:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

## Objectives

To gain a deep understanding of state management concepts, with a focus on React's state management mechanisms and patterns. Development of custom UI components within a React application to enhance knowledge of component-based architecture. Implementing rich text editing features to practice DOM manipulation and event handling in a React context. Master the use of Webpack for project setup, asset management, and dependency bundling, particularly in conjunction with React.

## Authors

> [@Adam-Robson](https://www.github.com/Adam-Robson)

## Run Locally

To run the app in *development* mode, follow these steps:

1. Clone the project: `$ git clone https://the-project`
2. Go to the project directory: `$ cd the-project`
3. Install dependencies: `npm install`
4. Start the server: `npm run dev`
5. Open `http://localhost:5173` to view it in the browser. The page will reload if you make edits, and any lint errors will appear in the console.

## Acknowledgements

Thanks to Alchemy Code Lab and instructor [Julie Nisbet](https://www.github.com/julienisbet), who created the template for the project and was crucial in debugging along the way!

## Contact

Feel free to reach out! I can be messaged through LinkedIn by clicking on the badge above or by emailing me at adamray312@gmail.com.
