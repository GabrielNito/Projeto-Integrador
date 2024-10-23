import { ReactNode } from "react";
import CardInformacoesCurso from "./CardInformacoesCurso";
import DialogCollections from "./DialogCollections";

interface IChildrenProps{
  children: ReactNode
}

const Paragraph = ({ children } : IChildrenProps) => (
  <p style={{ textIndent: "2rem" }} className="my-2 font-mono">
    {children}
  </p>
);

export default function ContentHomePage() {
  return (
    <div className="w-full px-8">
      <h1 className="text-3xl font-semibold mb-4 text-center">
        Desenvolvimento de Software Multiplataforma (DSM)
      </h1>

      <section className="w-full p-4">
        <h2 className="text-2xl font-semibold mb-6 text-center">SOBRE O CURSO</h2>

        <div className="flex items-start gap-4 flex-wrap justify-center">
          <div className="w-full text-justify lg:w-[calc(100%-380px)]">
            <Paragraph>
              A Fatec Indaiatuba tem o prazer de anunciar o lançamento de um curso inovador que abrirá novos horizontes para os apaixonados por tecnologia. Apresentamos o curso "Desenvolvimento de Software Multiplataforma", uma oportunidade imperdível para quem busca se destacar no mundo da programação e desenvolvimento de software.
            </Paragraph>
            <Paragraph>
              Este curso pioneiro oferece uma abordagem abrangente para a construção de software que funciona em diversas plataformas, incluindo front-end e back-end, além de especializações em áreas essenciais da indústria de tecnologia. O programa oferece microcertificações nas seguintes áreas:
            </Paragraph>

            <DialogCollections />
          </div>

          <CardInformacoesCurso />

          <div className="w-full text-justify lg:w-full">
            <Paragraph>
              O tecnólogo em Desenvolvimento de Software Multiplataforma realiza a coleta e análise estatística de dados para apoiar clientes nas tomadas de decisão. Outra atribuição da área é a coordenação de projetos e equipes de desenvolvimento de software. O profissional pode projetar, desenvolver e testar softwares para múltiplas plataformas, aplicações em nuvem e internet das coisas. Entre outras habilidades, cabe ao especialista a apresentação de soluções tecnológicas a partir de conceitos, métodos e tecnologias de linguagens de programação, banco de dados, engenharia de software, segurança da informação e inteligência artificial.
            </Paragraph>
            <Paragraph>
              As inscrições para o vestibular deste novo curso já estão abertas&nbsp;
              <a
                className="text-red-500 hover:text-red-600"
                href="https://www.vestibularfatec.com.br/home/"
                target= "_blank"
                rel="noopener noreferrer"
              >
                (www.vestibularfatec.com.br)
              </a>
              . Esta é a sua oportunidade de ingressar nessa jornada de aprendizado tecnológico. Se você é um entusiasta da tecnologia, um desenvolvedor em ascensão ou alguém que deseja mudar de carreira e explorar o vasto mundo do desenvolvimento de software, este curso é a escolha certa.
            </Paragraph>
          </div>
        </div>
      </section>
    </div>
  );
}
