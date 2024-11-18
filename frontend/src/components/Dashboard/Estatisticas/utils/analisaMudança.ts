type DataItem = {
  [key: string]: string | number;
};

type AnalysisResult = {
  status: "aumento" | "diminuição";
  percentual: number;
  mensagem: string;
};

export function analisarMudanca<T extends DataItem>(
  data: T[],
  valueKey: keyof T,
  labelPositive: string = "Aumento",
  labelNegative: string = "Diminuição",
  label: string = "itens"
): AnalysisResult {
  if (data.length < 2) {
    return {
      status: "aumento",
      percentual: 0,
      mensagem: "Dados insuficientes para comparação",
    };
  }

  const ultimoMes = data[data.length - 1];
  const mesAnterior = data[data.length - 2];

  const valorAtual = Number(ultimoMes[valueKey]);
  const valorAnterior = Number(mesAnterior[valueKey]);

  if (isNaN(valorAtual) || isNaN(valorAnterior)) {
    throw new Error(`Invalid data for key: ${String(valueKey)}`);
  }

  const diferenca = valorAtual - valorAnterior;
  const percentualMudanca = Number(
    ((diferenca / valorAnterior) * 100).toFixed(1)
  );

  const aumento = diferenca > 0;
  const status = aumento ? labelPositive : labelNegative;

  return {
    status: aumento ? "aumento" : "diminuição",
    percentual: Math.abs(percentualMudanca),
    mensagem: `${status} de ${Math.abs(
      percentualMudanca
    )}% em ${label} este mês`,
  };
}
