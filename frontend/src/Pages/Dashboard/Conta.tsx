import { useEffect, useState } from "react";
import InformacoesPessoais from "@/components/Dashboard/Conta/InformacoesPessoais";
import SegurancaDaConta from "@/components/Dashboard/Conta/SegurancaDaConta";
import PreferenciasDeNotificacao from "@/components/Dashboard/Conta/PreferenciasDeNotificacao";
import Privacidade from "@/components/Dashboard/Conta/Privacidade";
import { fetchUserToken, User } from "@/components/utils";

export default function Conta() {
  const [userData, setUserData] = useState<User>();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    document.title = "Configurações da Conta - DSM";

    async function fetchUser() {
      const response: User = await fetchUserToken();

      console.log(response);
      setUserData(response);
      setIsAdmin(response.dados.role === "ADMIN");
    }

    fetchUser();
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold">Configurações da Conta</h1>
      <div className="w-full mx-auto mt-4 space-y-6 max-w-7xl">
        <div className="grid grid-rows-6 gap-4 lg:grid-cols-4 lg:grid-rows-2 max-lg:grid-cols-1">
          <InformacoesPessoais userData={userData} />
          <SegurancaDaConta />
          <PreferenciasDeNotificacao />
          <Privacidade />
        </div>
      </div>
    </>
  );
}
