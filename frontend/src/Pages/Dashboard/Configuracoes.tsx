import DashboardTitle from "@/components/Dashboard/DashboardTitle";
import { useEffect } from "react";

export default function Configuracoes() {
  useEffect(() => {
    document.title = "Configurações - DSM";
  }, []);
  return <DashboardTitle title="Configurações" />;
}
