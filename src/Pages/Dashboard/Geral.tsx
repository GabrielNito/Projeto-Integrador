import DashboardTitle from "@/components/Dashboard/DashboardTitle";
import DashboardWrapper from "@/components/Dashboard/DashboardWrapper";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useEffect } from "react";

export default function Dashboard() {
  useEffect(() => {
    document.title = "Dashboard - DSM";
  }, []);

  return (
    <div className="flex">
      <Sidebar active="/dashboard" />
      <DashboardWrapper>
        <DashboardTitle title="Geral" />
      </DashboardWrapper>
    </div>
  );
}
