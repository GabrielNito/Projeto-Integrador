import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import Spline from "@splinetool/react-spline";

import {
  ArrowRight,
  BookOpenCheck,
  Calendar,
  CircleUserRound,
  Clock,
  GraduationCap,
  Users,
} from "lucide-react";

export default function HeroSection() {
  const course_data = [
    {
      icon: Calendar,
      title: "Duração",
      content: "3 Anos (6 semestres)",
    },
    {
      icon: GraduationCap,
      title: "Formação",
      content: "Tecnólogo",
    },
    {
      icon: Users,
      title: "Vagas",
      content: "40 por semestre",
    },
    {
      icon: BookOpenCheck,
      title: "Modalidades",
      content: "Presencial Manhã - 6º semestre híbrido (aulas remotas)",
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Das 7h40 às 11h10",
    },
    {
      icon: CircleUserRound,
      title: "Coordenador",
      content: "Prof. Wellington Roque",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="container px-4 py-16 mx-auto sm:py-24">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Desenvolvimento de Software Multiplataforma
            </h1>
            <p className="text-lg">
              Uma jornada completa para se tornar um desenvolvedor versátil no
              mundo da tecnologia
            </p>
            <div className="flex flex-wrap gap-4 max-md:justify-center">
              <Button size="lg" asChild>
                <Link
                  to="https://www.vestibularfatec.com.br/home/"
                  target="_blank"
                >
                  Inscreva-se no Vestibular
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="items-center justify-center hidden md:flex">
            <Spline
              className="h-80 w-80"
              scene="https://prod.spline.design/QqrJoV9d86hcaW9U/scene.splinecode"
            />
          </div>
        </div>
      </div>

      <div className="container grid grid-cols-1 gap-4 px-4 py-4 mx-auto sm:grid-cols-2 md:grid-cols-3">
        {course_data.map((course, index: number) => {
          return (
            <div
              className="flex items-center gap-4 px-4 py-2 border shadow-md select-none group rounded-xl bg-muted/25 dark:bg-muted/50"
              key={index}
            >
              <course.icon size={20} className="text-teal-300 drop-shadow-md" />

              <div>
                <p className="text-sm text-muted-foreground">{course.title}</p>
                <p className="font-medium">{course.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
