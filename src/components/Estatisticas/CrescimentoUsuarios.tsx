import { TrendingUp, TrendingDown } from "lucide-react";
import { CartesianGrid, XAxis, Line, LineChart, LabelList } from "recharts";
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
import { analisarMudanca } from "./utils/analisaMudança";
import { getLastSixMonths } from "./utils/ultimosSeisMeses";

const userGrowthData = [
  { month: "Janeiro", users: 1000 },
  { month: "Fevereiro", users: 1200 },
  { month: "Março", users: 1500 },
  { month: "Abril", users: 1800 },
  { month: "Maio", users: 2200 },
  { month: "Junho", users: 2500 },
];

const chartConfig = {
  desktop: {
    label: "users",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export default function CrescimentoUsuarios() {
  const resultado_analise = analisarMudanca(
    userGrowthData,
    "users",
    "Crescimento",
    "Redução",
    "usuários"
  );

  const meses = getLastSixMonths();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Crescimento de usuários</CardTitle>
        <CardDescription>{`${meses[0]} - ${
          meses[5]
        } ${new Date().getFullYear()}`}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={userGrowthData}
            margin={{
              top: 20,
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Line
              dataKey="users"
              type="natural"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-desktop)",
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          {resultado_analise.mensagem}
          {resultado_analise.status === "aumento" ? (
            <TrendingUp className="h-4 w-4 text-green-500" />
          ) : (
            <TrendingDown className="h-4 w-4 text-red-500" />
          )}
        </div>
        <div className="leading-none text-muted-foreground">
          Mostrando a quantidade total de usuários nos últimos 6 meses
        </div>
      </CardFooter>
    </Card>
  );
}
