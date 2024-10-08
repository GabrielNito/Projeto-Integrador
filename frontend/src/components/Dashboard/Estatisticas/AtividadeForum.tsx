import { TrendingUp, TrendingDown } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
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
import { getLastSixMonths } from "./utils/ultimosSeisMeses";
import { analisarMudanca } from "./utils/analisaMudança";

const forumActivityData = [
  { month: "Abril", posts: 186 },
  { month: "Maio", posts: 305 },
  { month: "Junho", posts: 237 },
  { month: "Julho", posts: 173 },
  { month: "Agosto", posts: 209 },
  { month: "Setembro", posts: 214 },
];

const forumActivityConfig = {
  posts: {
    label: "Posts",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export default function AtividadeForum() {
  const analysisResult = analisarMudanca(
    forumActivityData,
    "posts",
    "Aumento",
    "Diminuição",
    "posts"
  );
  const meses = getLastSixMonths();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Atividade do Fórum</CardTitle>
        <CardDescription>{`${meses[0]} - ${
          meses[5]
        } ${new Date().getFullYear()}`}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={forumActivityConfig}>
          <BarChart accessibilityLayer data={forumActivityData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="posts" fill="var(--color-posts)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          {analysisResult.mensagem}
          {analysisResult.status === "aumento" ? (
            <TrendingUp className="h-4 w-4 text-green-500" />
          ) : (
            <TrendingDown className="h-4 w-4 text-red-500" />
          )}
        </div>
        <div className="leading-none text-muted-foreground">
          Mostrando total de posts nos últimos 6 meses
        </div>
      </CardFooter>
    </Card>
  );
}
