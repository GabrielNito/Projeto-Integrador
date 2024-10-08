import { Bar, BarChart, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { TrendingDown, TrendingUp } from "lucide-react";

interface ChartDataItem {
  date: string;
  aprovados: number;
  reprovados: number;
}

interface AnalysisResult {
  status: "aumento" | "diminuição";
  percentual: number;
  mensagem: string;
}

function analisarUltimoMes(
  chartData: ChartDataItem[]
): AnalysisResult | { mensagem: string } {
  if (chartData.length < 2) {
    return { mensagem: "Dados insuficientes para comparação" };
  }

  const ultimoMes = chartData[chartData.length - 1];
  const mesAnterior = chartData[chartData.length - 2];

  const diferencaReprovacoes = ultimoMes.reprovados - mesAnterior.reprovados;
  const percentualMudanca = Number(
    ((diferencaReprovacoes / mesAnterior.reprovados) * 100).toFixed(1)
  );

  const aumento = diferencaReprovacoes > 0;
  const status = aumento ? "Aumento" : "Diminuição";

  return {
    status: status.toLowerCase() as "aumento" | "diminuição",
    percentual: Math.abs(percentualMudanca),
    mensagem: `${status} de reprovações em ${Math.abs(
      percentualMudanca
    )}% este mês`,
  };
}

const chartData: ChartDataItem[] = [
  { date: "Abril", aprovados: 186, reprovados: 83 },
  { date: "Maio", aprovados: 305, reprovados: 46 },
  { date: "Junho", aprovados: 237, reprovados: 34 },
  { date: "Julho", aprovados: 173, reprovados: 18 },
  { date: "Agosto", aprovados: 209, reprovados: 59 },
  { date: "Setembro", aprovados: 214, reprovados: 28 },
];

const chartConfig = {
  aprovados: {
    label: "Aprovados",
    color: "hsl(var(--chart-1))",
  },
  reprovados: {
    label: "Reprovados",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export default function AdministracaoPosts() {
  const analysisResult = analisarUltimoMes(chartData);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Posts Aprovados/Reprovados</CardTitle>
        <CardDescription>Relação de aprovação/reprovação</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <Bar
              dataKey="aprovados"
              stackId="a"
              fill="hsl(var(--chart-1))"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="reprovados"
              stackId="a"
              fill="hsl(var(--chart-2))"
              radius={[4, 4, 0, 0]}
            />
            <ChartTooltip
              content={<ChartTooltipContent indicator="line" />}
              cursor={false}
              defaultIndex={1}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          {"status" in analysisResult ? (
            <>
              {analysisResult.mensagem}
              {analysisResult.status === "aumento" ? (
                <TrendingUp className="h-4 w-4 text-red-500" />
              ) : (
                <TrendingDown className="h-4 w-4 text-green-500" />
              )}
            </>
          ) : (
            analysisResult.mensagem
          )}
        </div>
        <div className="leading-none text-muted-foreground">
          Mostrando total de posts nos últimos 6 meses
        </div>
      </CardFooter>
    </Card>
  );
}
