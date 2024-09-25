import ThreadPost from "./ThreadPost";

const dataArray = {
  threadId: 1,
  title: "Explorando a Arquitetura de Dados no Novo Curso DSM",
  posts: [
    {
      id: 1,
      avatar:
        "https://i.pinimg.com/736x/b1/5a/34/b15a34ae7890d75945ba1df15ca9da5f.jpg",
      username: "dsm_professor",
      badges: ["Professor"],
      description:
        "O novo curso de DSM (Desenvolvimento de Sistemas Multiplataforma) na Fatec Indaiatuba promete uma abordagem inovadora para a arquitetura de dados. Quais são as suas expectativas sobre como isso influenciará o desenvolvimento de sistemas na prática?",
      likes: {
        amount: 12,
        isLikedByUser: true,
      },
      date: "2024-09-01 08:15:23.000000+00",
    },
    {
      id: 2,
      avatar:
        "https://i.pinimg.com/736x/8d/c8/26/8dc8269d8c6b8e950abbfdb74af7e664.jpg",
      username: "dsm_aluno_3",
      badges: ["Aluno", "3° semestre"],
      description:
        "A integração de novas tecnologias e frameworks no DSM é fascinante. Estou ansioso para ver como a aprendizagem de ferramentas modernas vai impactar nosso entendimento e desenvolvimento de sistemas complexos.",
      likes: {
        amount: 22,
        isLikedByUser: false,
      },
      date: "2024-09-02 14:30:45.000000+00",
    },
    {
      id: 3,
      avatar:
        "https://i.pinimg.com/736x/69/15/10/6915107d274de9e92c6a7c05d141d059.jpg",
      username: "dsm_coordenador",
      badges: ["Coordenador"],
      description:
        "O curso DSM está se destacando na integração de novas metodologias de desenvolvimento. O impacto que isso terá na forma como abordamos o design e a implementação de sistemas é significativo. Vamos discutir como essas mudanças podem melhorar nossos projetos futuros.",
      likes: {
        amount: 34,
        isLikedByUser: false,
      },
      date: "2024-09-04 11:45:12.000000+00",
    },
    {
      id: 4,
      avatar: "",
      username: "anônimo",
      badges: [],
      description:
        "Com o DSM, estamos vendo um foco renovado na ciência dos dados e sua aplicação prática. A capacidade de simular e analisar dados complexos tem um potencial enorme para a inovação. O que vocês acham das novas oportunidades que o curso pode trazer para a área de dados?",
      likes: {
        amount: 18,
        isLikedByUser: true,
      },
      date: "2024-09-11 09:20:34.000000+00",
    },
    {
      id: 5,
      avatar:
        "https://i.pinimg.com/736x/21/c0/f6/21c0f6e1dc75604fce91d9076e7b9083.jpg",
      username: "dsm_aluno_6",
      badges: ["Aluno", "6° semestre"],
      description:
        "Ainda estou processando todas as novas abordagens e ferramentas que o curso DSM introduziu. A expectativa é alta, mas será interessante ver como essas novas técnicas se traduzem em resultados práticos. Quais são as suas opiniões até agora?",
      likes: {
        amount: 9,
        isLikedByUser: false,
      },
      date: "2024-09-15 16:50:10.000000+00",
    },
  ],
};

export default function Thread() {
  return (
    <div className="flex flex-col gap-8 max-md:gap-4 items-center justify-center">
      <h1 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        {dataArray.title}
      </h1>
      <div className="flex flex-col gap-4 items-center">
        {dataArray.posts.map((post) => {
          return <ThreadPost key={dataArray.threadId} data={post} />;
        })}
      </div>
    </div>
  );
}
