import "./index.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Forum from "./Pages/Forum/Forum";
import Geral from "./Pages/Dashboard/Geral";
import Estatisticas from "./Pages/Dashboard/Admin/Estatisticas";
import { ThemeProvider } from "./components/theme-provider";
import Configuracoes from "./Pages/Dashboard/Configuracoes";
import Conta from "./Pages/Dashboard/Conta";
import Atividade from "./Pages/Dashboard/Atividade";
import GerenciamentoDeUsuarios from "./Pages/Dashboard/Admin/GerenciamentoDeUsuarios";
import MensagensAprovadas from "./Pages/Dashboard/Admin/MensagensAprovadas";
import ConteudoReportado from "./Pages/Dashboard/Admin/ConteudoReportado";
import General from "./components/Dashboard/General";
import Login from "./Pages/Login/Login";
import SignIn from "./Pages/Login/SignIn";
import RecuperacaoSenha from "./Pages/Login/RecuperacaoSenha";

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
        path: "/dashboard/geral",
        element: <Geral />,
      },
      {
        path: "/dashboard/atividade",
        element: <Atividade />,
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
      {
        path: "/dashboard/gerenciamento-de-usuarios",
        element: <GerenciamentoDeUsuarios />,
      },
      {
        path: "/dashboard/mensagens-aprovadas",
        element: <MensagensAprovadas />,
      },
      {
        path: "/dashboard/conteudo-reportado",
        element: <ConteudoReportado />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
    <RouterProvider router={router} />
  </ThemeProvider>
);
