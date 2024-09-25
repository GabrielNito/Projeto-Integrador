import DashboardTitle from "@/components/Dashboard/DashboardTitle";
import DashboardWrapper from "@/components/Dashboard/DashboardWrapper";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useEffect } from "react";

export default function Atividade() {
  useEffect(() => {
    document.title = "Atividade - DSM";
  }, []);
  return (
    <div className="flex">
      <Sidebar active="/dashboard/atividade" />
      <DashboardWrapper>
        <DashboardTitle title="Atividade" />
      </DashboardWrapper>
    </div>
  );
}
