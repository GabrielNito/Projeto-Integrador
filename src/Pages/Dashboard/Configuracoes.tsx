import DashboardTitle from "@/components/Dashboard/DashboardTitle";
import DashboardWrapper from "@/components/Dashboard/DashboardWrapper";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useEffect } from "react";

export default function Configuracoes() {
  useEffect(() => {
    document.title = "Configurações - DSM";
  }, []);
  return (
    <div className="flex">
      <Sidebar active="/dashboard/configuracoes" />
      <DashboardWrapper>
        <DashboardTitle title="Configurações" />
      </DashboardWrapper>
    </div>
  );
}
