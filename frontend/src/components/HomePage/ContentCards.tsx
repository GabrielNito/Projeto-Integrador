import { useState } from "react";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { Separator } from "../ui/separator";

const dialogsData = [
  {
    title: "Front-end",
    description:
      "Aprenda a criar interfaces de usuário atraentes e funcionais para aplicativos e sites.",
  },
  {
    title: "Back-end",
    description:
      "Desenvolva habilidades para criar servidores, bancos de dados e lógica de negócios que impulsionam aplicativos.",
  },
  {
    title: "UX (Experiência do Usuário)",
    description:
      "Domine a arte de criar experiências digitais intuitivas e agradáveis para os usuários.",
  },
  {
    title: "Design Patterns",
    description:
      "Aprenda a aplicar padrões de design de software comprovados para criar código mais eficiente e sustentável.",
  },
  {
    title: "Desenvolvedor de Dispositivos Móveis",
    description:
      "Explore o mundo da criação de aplicativos móveis para Android e iOS.",
  },
  {
    title: "DevOps",
    description:
      "Descubra como otimizar o desenvolvimento e a entrega de software por meio da integração contínua e entrega contínua.",
  },
  {
    title: "Computação em Nuvem",
    description:
      "Domine os conceitos e práticas da computação em nuvem, uma das tecnologias mais demandadas no mercado.",
  },
  {
    title: "Inteligência Artificial",
    description:
      "Aprofunde-se no campo da IA e aprenda a criar sistemas inteligentes e algoritmos de aprendizado de máquina.",
  },
];

const MotionCard = motion(Card);

export default function ContentCards() {
  const [description, setDescription] = useState<string | null>(null);

  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold">Detalhes sobre o curso</h1>
      <div className="flex flex-col gap-8">
        <AnimatePresence mode="wait">
          {description && (
            <motion.div
              key={description}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="px-8 pt-4 text-xl"
            >
              {description}
            </motion.div>
          )}
        </AnimatePresence>

        <Separator orientation="horizontal" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {dialogsData.map((card) => (
            <MotionCard
              key={card.title}
              className="aspect-square flex justify-center items-center p-6 cursor-pointer"
              onClick={() => setDescription(card.description)}
              whileHover={{
                scale: 1.025,
                borderColor: "rgba(255,255,255,.5)",
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 1 }}
            >
              <p className="text-center text-wrap">{card.title}</p>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
}
