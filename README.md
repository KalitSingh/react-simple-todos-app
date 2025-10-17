# React + Vite Project

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).



In this project, Build a **Simple Todos** app by applying the React concepts I have learned till now.

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/simple-todos-output.gif" alt="simple todos output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Designed Responsive Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/simple-todos-sm-output-v2.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/simple-todos-lg-output-v2.png)

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm run dev`
</details>

### Functionalities Instructions

<details>
<summary>Functionality added</summary>
<br/>

The app have the following functionalities

- Initially, the list of given todos should be displayed with a delete button for each todo
- The `SimpleTodos` will consist of the `initialTodosList`. It consists of a list of todo objects with the following properties in each todo object

  |  Key  | Data Type |
  | :---: | :-------: |
  |  id   |  Number   |
  | title |  String   |

</details>

### Features 
<details>
<summary>Click to View</summary>

- Delete Todo,
</details>

<details>
<summary>Implementation Files</summary>
<br/>

Used files to for the implementation:

- `src/components/SimpleTodo/index.js`
- `src/components/SimpleTodo/index.css`
- `src/components/TodoItem/index.js`
- `src/components/TodoItem/index.css`
</details>


### Resources

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #ffc2a0; width: 150px; padding: 10px; color: black">Hex: #ffc2a0</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #ff8542; width: 150px; padding: 10px; color: white">Hex: #ff8542</div>
<div style="background-color: #000000; width: 150px; padding: 10px; color: white">Hex: #000000</div>
<div style="background-color: #ff0b37; width: 150px; padding: 10px; color: white">Hex: #ff0b37</div>

</details>

<details>
<summary>Font-families</summary>

- Roboto
</details>

### Live Project
<details>
<a href="https://reactsimptodos.ccbp.tech/">Click to View Live Project</a>
</details>
