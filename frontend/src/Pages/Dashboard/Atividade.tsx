import DashboardTitle from "@/components/Dashboard/DashboardTitle";
import { useEffect } from "react";

export default function Atividade() {
  useEffect(() => {
    document.title = "Atividade do Usuário - DSM";
  }, []);
  return <DashboardTitle title="Atividade do Usuário" />;
}
