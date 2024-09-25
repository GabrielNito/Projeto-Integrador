import { TrendingUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect } from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import TotalVisitantes from "@/components/Dashboard/Estatisticas/TotalVisitantes";
import CrescimentoUsuarios from "@/components/Dashboard/Estatisticas/CrescimentoUsuarios";
import Retencao from "@/components/Dashboard/Estatisticas/Retencao";
import AtividadeForum from "@/components/Dashboard/Estatisticas/AtividadeForum";
import AdministracaoPosts from "@/components/Dashboard/Estatisticas/AdministracaoPosts";
import DashboardTitle from "@/components/Dashboard/DashboardTitle";
import DashboardWrapper from "@/components/Dashboard/DashboardWrapper";

export default function Estatisticas() {
  useEffect(() => {
    document.title = "Estatísticas - DSM";
  }, []);
  return (
    <div className="flex">
      <Sidebar active="/dashboard/estatisticas" />
      <div className="w-full flex flex-col">
        <DashboardWrapper>
          <DashboardTitle title="Estatísticas do Site" />
          <div className="grid gap-6 lg:grid-cols-2">
            <TotalVisitantes />

            <CrescimentoUsuarios />

            <Retencao />
          </div>
        </DashboardWrapper>
        <DashboardWrapper>
          <DashboardTitle title="Estatísticas do Fórum" />
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
        </DashboardWrapper>
      </div>
    </div>
  );
}
