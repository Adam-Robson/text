# EasyEdit

This project uses a template provided by Vite which includes a minimal setup to get React working with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding ESLint

This project includes an updated configuration that enables type aware lint rules:

- The top-level `parserOptions` property was added based on the recommendation from Vite:

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

- Replaced `plugin:@typescript-eslint/recommended` with `plugin:@typescript-eslint/strict-type-checked` and `plugin:@typescript-eslint/stylistic-type-checked`
- Installed [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and added `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
# text
# text
# text
