import Sidebar from "@/components/Sidebar/Sidebar";
import { useEffect } from "react";
import InformacoesPessoais from "@/components/Dashboard/Conta/InformacoesPessoais";
import SegurancaDaConta from "@/components/Dashboard/Conta/SegurancaDaConta";
import PreferenciasDeNotificacao from "@/components/Dashboard/Conta/PreferenciasDeNotificacao";
import Privacidade from "@/components/Dashboard/Conta/Privacidade";

export default function Conta() {
  useEffect(() => {
    document.title = "Conta - DSM";
  }, []);

  return (
    <div className="flex">
      <Sidebar active="/dashboard/conta" />
      <section className="flex-1 overflow-y-auto max-md:px-4 max-md:py-6 px-40 py-10 flex flex-col">
        <h1 className="text-3xl font-bold">Configuração da Conta</h1>
        <div className="w-full max-w-7xl mx-auto mt-4 space-y-6">
          <div className="grid gap-4 md:grid-cols-4 md:grid-rows-2 max-md:grid-cols-1 grid-rows-6">
            <InformacoesPessoais avatar="" username="John Doe" />
            <SegurancaDaConta />
            <PreferenciasDeNotificacao />
            <Privacidade />
          </div>
        </div>
      </section>
    </div>
  );
}
