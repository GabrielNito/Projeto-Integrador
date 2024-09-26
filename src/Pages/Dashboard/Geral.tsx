import DashboardTitle from "@/components/Dashboard/DashboardTitle";
import { useEffect } from "react";

export default function Dashboard() {
  useEffect(() => {
    document.title = "Dashboard - DSM";
  }, []);

  return <DashboardTitle title="Geral" />;
}
