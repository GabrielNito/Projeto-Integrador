import DashboardTitle from "@/components/Dashboard/DashboardTitle";
import DashboardWrapper from "@/components/Dashboard/DashboardWrapper";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useEffect } from "react";

export default function GerenciamentoDeUsuarios() {
  useEffect(() => {
    document.title = "Gerenciamento de Usuários - DSM";
  }, []);
  return (
    <div className="flex">
      <Sidebar active="/dashboard/gerenciamento-de-usuarios" />
      <DashboardWrapper>
        <DashboardTitle title="Gerenciamento de Usuários" />
      </DashboardWrapper>
    </div>
  );
}
