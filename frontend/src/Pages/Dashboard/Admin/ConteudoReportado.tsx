import DashboardTitle from "@/components/Dashboard/DashboardTitle";
import { useEffect } from "react";

export default function ConteudoReportado() {
  useEffect(() => {
    document.title = "Conteúdo Reportado - DSM";
  }, []);
  return <DashboardTitle title="Conteúdo Reportado" />;
}
