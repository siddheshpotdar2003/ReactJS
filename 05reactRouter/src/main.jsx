import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  BrowserRouter,
  Routes,
  Route,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import {
  Home,
  About,
  Contact,
  Github,
  GithubInfoLoader,
  User,
} from "./components/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      {
        path: "github",
        element: <Github />,
        loader: GithubInfoLoader, // Data loader
      },
      { path: "user/:id", element: <User /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route loader={GithubInfoLoader} path="github" element={<Github />} />
        </Route>
      </Routes>
    </BrowserRouter> */}
    <RouterProvider router={router} />
  </StrictMode>
);
