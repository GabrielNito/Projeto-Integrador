import DashboardTitle from "@/components/Dashboard/DashboardTitle";
import DashboardWrapper from "@/components/Dashboard/DashboardWrapper";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useEffect } from "react";

export default function ConteudoReportado() {
  useEffect(() => {
    document.title = "Conteúdo Reportado - DSM";
  }, []);
  return (
    <div className="flex">
      <Sidebar active="/dashboard/conteudo-reportado" />
      <DashboardWrapper>
        <DashboardTitle title="Conteúdo Reportado" />
      </DashboardWrapper>
    </div>
  );
}
