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
    <>
      <h1 className="text-3xl font-bold">Configuração da Conta</h1>
      <div className="w-full max-w-7xl mx-auto mt-4 space-y-6">
        <div className="grid gap-4 md:grid-cols-4 md:grid-rows-2 max-md:grid-cols-1 grid-rows-6">
          <InformacoesPessoais avatar="" username="John Doe" />
          <SegurancaDaConta />
          <PreferenciasDeNotificacao />
          <Privacidade />
        </div>
      </div>
    </>
  );
}
