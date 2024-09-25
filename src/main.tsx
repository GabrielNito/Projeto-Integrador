import "./index.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Forum from "./Pages/Forum/Forum";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Estatisticas from "./Pages/Dashboard/Estatisticas";
import { ThemeProvider } from "./components/theme-provider";
import Configuracoes from "./Pages/Dashboard/Configuracoes";
import Conta from "./Pages/Dashboard/Conta";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/forum",
    element: <Forum />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/dashboard/conta",
    element: <Conta />,
  },
  {
    path: "/dashboard/configuracoes",
    element: <Configuracoes />,
  },
  {
    path: "/dashboard/estatisticas",
    element: <Estatisticas />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
    <RouterProvider router={router} />
  </ThemeProvider>
);
