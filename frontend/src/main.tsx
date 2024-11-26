import "./index.css";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Estatisticas from "./Pages/Dashboard/Admin/Estatisticas";
import { ThemeProvider } from "./components/theme-provider";
import Atividade from "./Pages/Dashboard/Atividade";
import GerenciamentoDeUsuarios from "./Pages/Dashboard/Admin/GerenciamentoDeUsuarios";
import General from "./components/Dashboard/General";
import Login from "./Pages/Login/Login";
import SignIn from "./Pages/Login/SignIn";
import RecuperacaoSenha from "./Pages/Login/RecuperacaoSenha";
import Thread from "./Pages/Threads/Thread";
import Forum from "./Pages/Threads/Threads";
import Conta from "./Pages/Dashboard/Conta";
import CreateThread from "./Pages/Threads/CreateThread";
import CommentThread from "./Pages/Threads/CommentThread";
import GerenciamentoDeThreads from "./Pages/Dashboard/Admin/GerenciamentoDeThreads";

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
    path: "/forum/create-thread",
    element: <CreateThread />,
  },
  {
    path: "/forum/:threadId/answer",
    element: <CommentThread />,
  },
  {
    path: "/forum/:id",
    element: <Thread />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cadastro",
    element: <SignIn />,
  },
  {
    path: "/recuperacao-senha",
    element: <RecuperacaoSenha />,
  },
  {
    path: "/dashboard",
    element: <General />,
    children: [
      {
        path: "",
        element: <Navigate to="/dashboard/atividade" replace />,
      },
      {
        path: "/dashboard/atividade",
        element: <Atividade />,
      },
      {
        path: "/dashboard/configuracoes",
        element: <Conta />,
      },
      {
        path: "/dashboard/estatisticas",
        element: <Estatisticas />,
      },
      {
        path: "/dashboard/gerenciamento-de-usuarios",
        element: <GerenciamentoDeUsuarios />,
      },
      {
        path: "/dashboard/gerenciamento-de-threads",
        element: <GerenciamentoDeThreads />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
    <RouterProvider router={router} />
  </ThemeProvider>
);
