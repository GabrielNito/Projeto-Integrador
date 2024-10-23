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
        details: [
            "Presencial Matutino",
            "6º semestre híbrido (aulas remotas)",
        ],
    },
    {
        title: "Horário do curso",
        details: "Das 7h40 às 11h10",
    },
];

const CourseInfoItem = ({ title, details }: ICursoInf) => (
    <>
        <h3 className="font-semibold text-2xl text-red-500 p-2">{title}</h3>
        {Array.isArray(details) ? (
            details.map((detail, index) => (
                <li key={index} className="pl-2 py-1">
                    {detail}
                </li>
            ))
        ) : (
            <li className="pl-2 py-1">{details}</li>
        )}
        <Separator className="dark:bg-white my-1" />
    </>
);

export default function CardInformacoesCurso() {
    return (
        <Card className="p-4 rounded-md dark:bg-gray-800 dark:text-white bg-white text-black w-[360px]">
            {courseInfoData.map((info) => (
                <CourseInfoItem key={info.title} title={info.title} details={info.details} />
            ))}
            <a
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-6 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition"
                href="https://www.vestibularfatec.com.br/home/"
            >
                Inscreva-se para o Vestibular
            </a>
        </Card>
    );
}