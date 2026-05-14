import "./index.css";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import ToolPage from "./pages/ToolPage";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/tool/:toolName",
        element: <ToolPage />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  
  <RouterProvider router={router} />
)
