import {
    Dialog,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogContent,
    DialogDescription,
} from "../ui/dialog";

interface IDialogData {
    title: string;
    description: string;
}

const dialogsData = [
    {
        title: "Front-end",
        description: "Aprenda a criar interfaces de usuário atraentes e funcionais para aplicativos e sites.",
    },
    {
        title: "Back-end",
        description: "Desenvolva habilidades para criar servidores, bancos de dados e lógica de negócios que impulsionam aplicativos.",
    },
    {
        title: "UX (Experiência do Usuário)",
        description: "Domine a arte de criar experiências digitais intuitivas e agradáveis para os usuários.",
    },
    {
        title: "Design Patterns",
        description: "Aprenda a aplicar padrões de design de software comprovados para criar código mais eficiente e sustentável.",
    },
    {
        title: "Desenvolvedor de Dispositivos Móveis",
        description: "Explore o mundo da criação de aplicativos móveis para Android e iOS.",
    },
    {
        title: "DevOps",
        description: "Descubra como otimizar o desenvolvimento e a entrega de software por meio da integração contínua e entrega contínua.",
    },
    {
        title: "Computação em Nuvem",
        description: "Domine os conceitos e práticas da computação em nuvem, uma das tecnologias mais demandadas no mercado.",
    },
    {
        title: "Inteligência Artificial",
        description: "Aprofunde-se no campo da IA e aprenda a criar sistemas inteligentes e algoritmos de aprendizado de máquina.",
    },
];

function DialogItem({ title, description } : IDialogData) {
    return (
        <Dialog>
            <DialogTrigger className="p-4 border-4 dark:hover:bg-slate-900 hover:bg-slate-200 m-2 flex-shrink-0 text-center">
                {title}
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                <DialogDescription>{description}</DialogDescription>
            </DialogContent>
        </Dialog>
    );
}

export default function DialogCollections() {
    return (
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-4 w-full">
            {dialogsData.map(dialog => (
                <DialogItem key={dialog.title} title={dialog.title} description={dialog.description} />
            ))}
        </div>
    );
}