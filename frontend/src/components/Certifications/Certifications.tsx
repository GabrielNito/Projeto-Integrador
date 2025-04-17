import CertificationsCard from "./CertificationsCard";

const certifications = [
  {
    semester: 1,
    certifications: [
      {
        type: "Microcertificação",
        title: "Front-End Básico",
        subjects: [
          "Engenharia de Software I",
          "Design Digital",
          "Desenvolvimento Web I",
        ],
      },
    ],
  },
  {
    semester: 2,
    certifications: [
      {
        type: "Certificação Intermediária",
        title: "Desenvolvedor Front-End",
        subjects: [
          "Modelagem de Banco de Dados",
          "Banco de Dados Relacional",
          "Algoritmo e Lógica de Programação",
          "Engenharia de Software II",
          "Desenvolvimento Web II",
          "+ Microcertificação Front-End Básico",
        ],
      },
    ],
  },
  {
    semester: 3,
    certifications: [
      {
        type: "Microcertificação",
        title: "Design Patterns Básico",
        subjects: [
          "Técnica de Programação I",
          "Técnica de Programação II",
          "Estrutura de Dados",
        ],
      },
    ],
  },
  {
    semester: 4,
    certifications: [
      {
        type: "Certificação Intermediária",
        title: "Desenvolvedor Back-End",
        subjects: [
          "Banco de Dados não relacional",
          "Desenvolvimento web III",
          "Gestão Ágil de Projetos de Software",
          "Sistemas Operacionais e Redes de Computadores",
          "Integração e Entrega Contínua",
          "+ Certificação Intermediária Desenvolvedor Front-End.",
        ],
      },
    ],
  },
  {
    semester: 5,
    certifications: [
      {
        type: "Microcertificação",
        title: "UX Básico",
        subjects: ["Interação Humano Computador", "Experiência do Usuário"],
      },
      {
        type: "Certificação Intermediária",
        title: "Desenvolvedor para Dispositivos Móveis",
        subjects: [
          "Banco de Dados Relacional",
          "Banco de Dados não relacional",
          "Internet das Coisas e Aplicações",
          "Programação para Dispositivos Móveis I",
          "+Microcertificação Design Patterns Básico",
          "+ Certificação Intermediária Desenvolvedor Front-End.",
        ],
      },
    ],
  },
  {
    semester: 6,
    certifications: [
      {
        type: "Microcertificação",
        title: "DevOps Básico",
        subjects: [
          "Integração e Entrega Contínua",
          "Segurança no Desenvolvimento de Aplicações",
          "Qualidade e Testes de Software",
        ],
      },
      {
        type: "Microcertificação",
        title: "Computação em Nuvem Básico",
        subjects: ["Computação em Nuvem I", "Computação em Nuvem II"],
      },
      {
        type: "Microcertificação",
        title: "Inteligência Artificial Básico",
        subjects: [
          "Aprendizagem de Máquina",
          "Processamento de Linguagem Natural",
        ],
      },
    ],
  },
];

export default function Certifications() {
  return (
    <div className="px-4 mt-12 space-y-12 md:px-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="pb-2 text-3xl font-semibold tracking-tight text-center scroll-m-20">
          Certificações Intermediárias e Microcertificações
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
        {certifications.map((semesterData) => (
          <div key={semesterData.semester} className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-extrabold text-transparent bg-clip-text rounded-full bg-[linear-gradient(to_right,#253E8E,#04C6AE)]">
                {semesterData.semester}°
              </div>
              <h2 className="text-xl font-semibold">Semestre</h2>
            </div>
            <div className="flex flex-wrap gap-6">
              {semesterData.certifications.map((cert, index) => (
                <CertificationsCard
                  key={index}
                  type={cert.type}
                  title={cert.title}
                  subjects={cert.subjects}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
