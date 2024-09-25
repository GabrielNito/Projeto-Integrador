import { TrendingUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AtividadeForum from "@/components/Estatisticas/AtividadeForum";
import TotalVisitantes from "@/components/Estatisticas/TotalVisitantes";
import CrescimentoUsuarios from "@/components/Estatisticas/CrescimentoUsuarios";
import AdministracaoPosts from "@/components/Estatisticas/AdministracaoPosts";
import Sidebar from "@/components/Sidebar/Sidebar";
import Retencao from "@/components/Estatisticas/Retencao";
import { useEffect } from "react";

export default function Estatisticas() {
  useEffect(() => {
    document.title = "Estatísticas - DSM";
  }, []);
  return (
    <div className="flex">
      <Sidebar active="/dashboard/estatisticas" />
      <div className="w-full flex flex-col">
        <section className="max-md:px-4 max-md:py-6 px-12 py-10 flex flex-col w-full">
          <h1 className="text-3xl font-bold mb-6">Estatísticas do Site</h1>
          <div className="grid gap-6 lg:grid-cols-2">
            <TotalVisitantes />

            <CrescimentoUsuarios />

            <Retencao />
          </div>
        </section>
        <section className="max-md:px-4 max-md:py-6 px-12 py-10 flex flex-col w-full">
          <h1 className="text-3xl font-bold mb-6">Estatísticas do Fórum</h1>
          <div className="grid gap-6 lg:grid-cols-2">
            <AtividadeForum />

            <AdministracaoPosts />

            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Crescimento do Fórum</CardTitle>
                <CardDescription>Janeiro - Junho 2024</CardDescription>
              </CardHeader>
              <CardContent></CardContent>
              <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none">
                  Crescimento de 5.2% neste mês{" "}
                  <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                  Mostrando a quantidade total de usuários ativos nos últimos 6
                  meses
                </div>
              </CardFooter>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
