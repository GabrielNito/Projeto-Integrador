import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function About() {
  return (
    <section id="about">
      <div className="container px-4 mx-auto max-w-7xl">
        <h2 className="pb-6 text-3xl font-semibold tracking-tight text-center scroll-m-20">
          Sobre o Curso
        </h2>

        <div className="max-w-4xl px-4 mx-auto space-y-8">
          <div>
            <p className="text-lg leading-7 [&:not(:first-child)]:mt-6">
              A <span className="font-semibold">Fatec Indaiatuba</span> tem o
              prazer de anunciar o lançamento de um curso inovador que abrirá
              novos horizontes para os apaixonados por tecnologia. Apresentamos
              o curso{" "}
              <span className="font-semibold text-blue-700 dark:text-blue-400">
                Desenvolvimento de Software Multiplataforma
              </span>
              , uma oportunidade imperdível para quem busca se destacar no mundo
              da programação e desenvolvimento de software.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold tracking-tight scroll-m-20">
              Visão Geral
            </h3>
            <p className="text-lg leading-7 [&:not(:first-child)]:mt-6">
              Este curso pioneiro oferece uma abordagem abrangente para a
              construção de software que funciona em diversas plataformas,
              incluindo front-end e back-end, além de especializações em áreas
              essenciais da indústria de tecnologia.
            </p>
            <p className="text-lg leading-7 [&:not(:first-child)]:mt-6">
              O tecnólogo em Desenvolvimento de Software Multiplataforma realiza
              a coleta e análise estatística de dados para apoiar clientes nas
              tomadas de decisão. Outra atribuição da área é a coordenação de
              projetos e equipes de desenvolvimento de software.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold tracking-tight scroll-m-20">
              Habilidades Profissionais
            </h3>
            <p className="text-lg leading-7 [&:not(:first-child)]:mt-6">
              O profissional pode projetar, desenvolver e testar softwares para
              múltiplas plataformas, aplicações em nuvem e internet das coisas.
              Entre outras habilidades, cabe ao especialista a apresentação de
              soluções tecnológicas a partir de conceitos, métodos e tecnologias
              de linguagens de programação, banco de dados, engenharia de
              software, segurança da informação e inteligência artificial.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold tracking-tight scroll-m-20">
              Inscrições Abertas
            </h3>
            <p className="text-lg leading-7 [&:not(:first-child)]:mt-6">
              As inscrições para o vestibular deste novo curso já estão abertas.
              Esta é a sua oportunidade de ingressar nessa jornada de
              aprendizado tecnológico.
            </p>
            <p className="text-lg leading-7 [&:not(:first-child)]:mt-6">
              Se você é um entusiasta da tecnologia, um desenvolvedor em
              ascensão ou alguém que deseja mudar de carreira e explorar o vasto
              mundo do desenvolvimento de software, este curso é a escolha
              certa.
            </p>
            <div className="grid w-full md:gap-4 md:grid-cols-2">
              <Button
                className="flex items-center justify-center w-full gap-2 mt-4 text-lg sm:w-auto"
                asChild
              >
                <Link
                  to="https://www.vestibularfatec.com.br/home/"
                  target="_blank"
                >
                  Inscreva-se no Vestibular
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </Button>

              <Button
                className="flex items-center justify-center w-full gap-2 mt-4 text-lg sm:w-auto"
                asChild
              >
                <a href="/certificacoes">
                  Explorar certificações do curso
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
  <Card className="overflow-hidden transition-all border-none shadow-md group bg-gradient-to-br from-slate-50 to-white hover:shadow-lg">
    <CardHeader className="pb-4">
      <div className="flex items-center justify-center w-12 h-12 mb-4 text-teal-600 bg-teal-100 rounded-full">
        <GraduationCap className="w-6 h-6" />
      </div>
      <CardTitle>Formação Completa</CardTitle>
      <CardDescription>
        Currículo abrangente e atualizado com as tecnologias mais recentes
      </CardDescription>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2 text-sm text-gray-600">
        <li className="flex items-center gap-2">
          <ChevronRight className="w-4 h-4 text-teal-500" />
          <span>Desenvolvimento web, mobile e desktop</span>
        </li>
        <li className="flex items-center gap-2">
          <ChevronRight className="w-4 h-4 text-teal-500" />
          <span>Banco de dados e infraestrutura</span>
        </li>
        <li className="flex items-center gap-2">
          <ChevronRight className="w-4 h-4 text-teal-500" />
          <span>Metodologias ágeis e DevOps</span>
        </li>
      </ul>
    </CardContent>
    <CardFooter>
      <Button variant="ghost" className="group-hover:text-teal-600">
        Saiba mais{" "}
        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
      </Button>
    </CardFooter>
  </Card>
  <Card className="overflow-hidden transition-all border-none shadow-md group bg-gradient-to-br from-slate-50 to-white hover:shadow-lg">
    <CardHeader className="pb-4">
      <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-emerald-100 text-emerald-600">
        <Users className="w-6 h-6" />
      </div>
      <CardTitle>Mercado de Trabalho</CardTitle>
      <CardDescription>
        Alta demanda por profissionais qualificados
      </CardDescription>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2 text-sm text-gray-600">
        <li className="flex items-center gap-2">
          <ChevronRight className="w-4 h-4 text-emerald-500" />
          <span>Salários competitivos</span>
        </li>
        <li className="flex items-center gap-2">
          <ChevronRight className="w-4 h-4 text-emerald-500" />
          <span>Oportunidades em empresas de tecnologia</span>
        </li>
        <li className="flex items-center gap-2">
          <ChevronRight className="w-4 h-4 text-emerald-500" />
          <span>Possibilidade de trabalho remoto</span>
        </li>
      </ul>
    </CardContent>
    <CardFooter>
      <Button variant="ghost" className="group-hover:text-emerald-600">
        Saiba mais{" "}
        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
      </Button>
    </CardFooter>
  </Card>
  <Card className="overflow-hidden transition-all border-none shadow-md group bg-gradient-to-br from-slate-50 to-white hover:shadow-lg">
    <CardHeader className="pb-4">
      <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-cyan-100 text-cyan-600">
        <Calendar className="w-6 h-6" />
      </div>
      <CardTitle>Modalidades</CardTitle>
      <CardDescription>
        Flexibilidade para seu aprendizado
      </CardDescription>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2 text-sm text-gray-600">
        <li className="flex items-center gap-2">
          <ChevronRight className="w-4 h-4 text-cyan-500" />
          <span>Presencial Matutino</span>
        </li>
        <li className="flex items-center gap-2">
          <ChevronRight className="w-4 h-4 text-cyan-500" />
          <span>6º semestre híbrido (aulas remotas)</span>
        </li>
        <li className="flex items-center gap-2">
          <ChevronRight className="w-4 h-4 text-cyan-500" />
          <span>Laboratórios modernos e equipados</span>
        </li>
      </ul>
    </CardContent>
    <CardFooter>
      <Button variant="ghost" className="group-hover:text-cyan-600">
        Saiba mais{" "}
        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
      </Button>
    </CardFooter>
  </Card>
</div> */
}
