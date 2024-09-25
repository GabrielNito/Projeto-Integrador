import Sidebar from "@/components/Sidebar/Sidebar";
import { useEffect } from "react";

export default function Configuracoes() {
  useEffect(() => {
    document.title = "Configurações - DSM";
  }, []);
  return (
    <div className="flex">
      <Sidebar active="/dashboard/configuracoes" />
      <div className="w-full flex flex-col">
        <h1>Configurações</h1>
      </div>
    </div>
  );
}
