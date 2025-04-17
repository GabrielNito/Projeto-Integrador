import { motion } from "framer-motion";
import {
  Brain,
  Cloud,
  Code,
  Database,
  Layers,
  Palette,
  Smartphone,
} from "lucide-react";

export default function Specialization() {
  const specializations = [
    {
      title: "Front-end",
      description:
        "Aprenda a criar interfaces de usuário atraentes e funcionais para aplicativos e sites.",
      icon: Code,
      gradient: "from-red-400 to-pink-500",
      textColor: "text-red-500",
      hoverColor: "text-red-600",
    },
    {
      title: "Back-end",
      description:
        "Desenvolva habilidades para criar servidores, bancos de dados e lógica de negócios que impulsionam aplicativos.",
      icon: Database,
      gradient: "from-blue-400 to-indigo-500",
      textColor: "text-blue-500",
      hoverColor: "text-blue-600",
    },
    {
      title: "UX (Experiência do Usuário)",
      description:
        "Domine a arte de criar experiências digitais intuitivas e agradáveis para os usuários.",
      icon: Palette,
      gradient: "from-amber-400 to-orange-500",
      textColor: "text-amber-500",
      hoverColor: "text-amber-600",
    },
    {
      title: "Design Patterns",
      description:
        "Aprenda a aplicar padrões de design de software comprovados para criar código mais eficiente e sustentável.",
      icon: Layers,
      gradient: "from-emerald-400 to-teal-500",
      textColor: "text-emerald-500",
      hoverColor: "text-emerald-600",
    },
    {
      title: "Desenvolvedor de Dispositivos Móveis",
      description:
        "Explore o mundo da criação de aplicativos móveis para Android e iOS.",
      icon: Smartphone,
      gradient: "from-purple-400 to-violet-500",
      textColor: "text-purple-500",
      hoverColor: "text-purple-600",
    },
    {
      title: "Computação em Nuvem",
      description:
        "Domine os conceitos e práticas da computação em nuvem, uma das tecnologias mais demandadas no mercado.",
      icon: Cloud,
      gradient: "from-cyan-400 to-sky-500",
      textColor: "text-cyan-500",
      hoverColor: "text-cyan-600",
    },
    {
      title: "DevOps",
      description:
        "Descubra como otimizar o desenvolvimento e a entrega de software por meio da integração contínua e entrega contínua.",
      icon: Layers,
      gradient: "from-green-400 to-emerald-500",
      textColor: "text-green-500",
      hoverColor: "text-green-600",
    },
    {
      title: "Inteligência Artificial",
      description:
        "Aprofunde-se no campo da IA e aprenda a criar sistemas inteligentes e algoritmos de aprendizado de máquina.",
      icon: Brain,
      gradient: "from-fuchsia-400 to-pink-500",
      textColor: "text-fuchsia-500",
      hoverColor: "text-fuchsia-600",
    },
  ];

  return (
    <div className="px-4 md:px-20">
      <div className="max-w-3xl mx-auto space-y-4 text-center">
        <h2 className="pb-2 text-3xl font-semibold tracking-tight text-center scroll-m-20 first:mt-0">
          Áreas de Especialização
        </h2>
        <p className="text-lg leading-7 [&:not(:first-child)]:mt-6">
          Nosso curso oferece diversas áreas de especialização para que você
          possa se aprofundar nos temas que mais lhe interessam.
        </p>
      </div>

      <div className="grid gap-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {specializations.map((card, index) => {
          const Icon = card.icon;

          return (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.025 }}
              className="p-6 shadow-md select-none group rounded-xl bg-muted/50"
            >
              <div
                className={`flex items-center justify-center mb-4 text-white rounded-lg h-14 w-14 bg-gradient-to-br shadow-sm ${card.gradient}`}
              >
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{card.title}</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                {card.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
