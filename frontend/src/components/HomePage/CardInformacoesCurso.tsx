import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Separator } from "../ui/separator";

interface ICursoInf {
  title: string;
  details: string | string[];
}

const courseInfoData: ICursoInf[] = [
  {
    title: "Duração do Curso",
    details: "3 Anos – 6 semestres",
  },
  {
    title: "Tipo de Formação",
    details: "Tecnólogo",
  },
  {
    title: "Vagas",
    details: "40 vagas por semestre",
  },
  {
    title: "Modalidades",
    details: ["Presencial Matutino", "6º semestre híbrido (aulas remotas)"],
  },
  {
    title: "Horário do curso",
    details: "Das 7h40 às 11h10",
  },
];

const CourseInfoItem = ({ title, details }: ICursoInf) => (
  <>
    <h3 className="bg-gradient-to-r bg-clip-text text-transparent font-bold text-2xl p-2">
      {title}
    </h3>
    {Array.isArray(details) ? (
      details.map((detail, index) => (
        <li key={index} className="ml-4 pl-2 py-1 list-none">
          {detail}
        </li>
      ))
    ) : (
      <li className="ml-2 pl-2 py-1 list-none">{details}</li>
    )}
    <Separator className="my-1" />
  </>
);

export default function CardInformacoesCurso() {
  return (
    <Card className="p-4 rounded-md lg:w-[360px] h-fit">
      {courseInfoData.map((info) => (
        <CourseInfoItem
          key={info.title}
          title={info.title}
          details={info.details}
        />
      ))}
      <Button className="mt-4 w-full bg-gradient-to-r text-white" asChild>
        <Link to="https://vestibularfatec.com.br/" target="_blank">
          Inscreva-se para o Vestibular
        </Link>
      </Button>
    </Card>
  );
}
