import DashboardTitle from "@/components/Dashboard/DashboardTitle";
import DashboardWrapper from "@/components/Dashboard/DashboardWrapper";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useEffect } from "react";

export default function MensagensAprovadas() {
  useEffect(() => {
    document.title = "Mensagens Aprovadas - DSM";
  }, []);
  return (
    <div className="flex">
      <Sidebar active="/dashboard/mensagens-aprovadas" />
      <DashboardWrapper>
        <DashboardTitle title="Mensagens Aprovadas" />
      </DashboardWrapper>
    </div>
  );
}
