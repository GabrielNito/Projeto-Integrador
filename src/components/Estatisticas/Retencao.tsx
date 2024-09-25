import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getLastSixMonths } from "./utils/ultimosSeisMeses";

export default function Retencao() {
  const meses = getLastSixMonths();

  return (
    <Card className="lg:col-span-2">
      <CardHeader>
        <CardTitle>Retenção de Usuários</CardTitle>
        <CardDescription>{`${meses[0]} - ${
          meses[5]
        } ${new Date().getFullYear()}`}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mt-4 grid grid-cols-3 max-md:grid-cols-1 gap-4">
          <div>
            <h4 className="text-sm font-medium">Crescimento</h4>
            <p className="text-2xl font-bold">5.2%</p>
            <p className="text-xs text-muted-foreground">neste mês</p>
          </div>
          <div>
            <h4 className="text-sm font-medium">Tempo médio de sessão</h4>
            <p className="text-2xl font-bold">4m 32s</p>
            <p className="text-xs text-muted-foreground">
              +12% em relação ao mês anterior
            </p>
          </div>
          <div>
            <h4 className="text-sm font-medium">Taxa de retenção</h4>
            <p className="text-2xl font-bold">68%</p>
            <p className="text-xs text-muted-foreground">
              -3% em relação ao mês anterior
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
