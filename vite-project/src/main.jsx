import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./app/store.js";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/about.jsx";
import Skills from "./Components/Skills/skills.jsx";
import Education from "./Components/Education/education.jsx";
import Projects from "./Components/Projects/projects.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import SnackBar from "./Components/Snackbar/snackbar.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/skills",
    element: <Skills />,
  },
  {
    path: "/education",
    element: <Education />,
  },
  {
    path: "/work",
    element: <Projects />,
  },
  
  {
    path: "/contact",
    element: <Contact />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <SnackBar />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
