import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  LayoutDashboard,
  MessageSquare,
  Settings,
  AlertTriangle,
  User2,
  UserCheck2,
  Settings2,
  PanelLeft,
  ChartLine,
} from "lucide-react";
import { Separator } from "../ui/separator";
import SidebarFooter from "./SidebarFooter";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Link } from "react-router-dom";

interface SidebarProps {
  active: string;
}

export default function Sidebar({ active }: SidebarProps) {
  const [expanded, setExpanded] = useState(true);

  const username = "dsm_professor";
  const avatar =
    "https://i.pinimg.com/736x/b1/5a/34/b15a34ae7890d75945ba1df15ca9da5f.jpg";

  useEffect(() => {
    const test_mobile: boolean = window.innerWidth < 768;
    setExpanded(!test_mobile);
  }, []);

  return (
    <nav
      className={cn(
        "sticky top-0 h-screen overflow-hidden flex-shrink-0 border-r bg-background transition-all duration-300",
        expanded ? "w-[275px]" : "w-[70px]"
      )}
    >
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-center p-4">
          <h2
            className={cn(
              "text-lg font-semibold tracking-tight transition-all duration-300",
              !expanded && "hidden"
            )}
          >
            Dashboard
          </h2>
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "h-8 w-8",
              !expanded && "relative left-[-1px] w-auto px-3"
            )}
            onClick={() => setExpanded((curr) => !curr)}
          >
            <PanelLeft className="h-4 w-4" />
          </Button>
        </div>
        <ScrollArea className="flex-grow px-3">
          <div
            className={cn(
              "space-y-1",
              !expanded && "flex flex-col justify-center items-center gap-1"
            )}
          >
            {sidebar_items.default.map((item) => (
              <SidebarItem
                active={active}
                key={item.title}
                item={item}
                expanded={expanded}
              />
            ))}

            <div className={cn("", !expanded && "hidden")}>
              <Separator className={cn("my-2", !expanded && "my-2")} />
            </div>

            {sidebar_items.admin.map((item) => (
              <SidebarItem
                active={active}
                key={item.title}
                item={item}
                expanded={expanded}
              />
            ))}
          </div>
        </ScrollArea>

        <SidebarFooter
          name={"John Doe"}
          email="dsm_professor@fatec.sp.gov.br"
          expanded={expanded}
          avatar={avatar}
          username={username}
        />
      </div>
    </nav>
  );
}

function SidebarItem({
  item,
  expanded,
  active,
}: {
  item: SidebarItemType;
  expanded: boolean;
  active: string;
}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            to={item.href}
            className={cn(
              "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground relative",
              active === item.href
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground",
              !expanded && "justify-center w-10 px-0"
            )}
          >
            <div className="flex items-center justify-center w-5">
              {item.icon}
            </div>
            {expanded && <span className="ml-3">{item.title}</span>}
            {item.alert && (
              <span
                className={cn(
                  "ml-auto h-2 w-2 rounded-full bg-red-500",
                  !expanded && "ml-0 absolute right-2 top-1"
                )}
              />
            )}
            {!expanded && (
              <span className="absolute left-full rounded-md px-2 py-1 ml-6 bg-accent text-accent-foreground text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0">
                {item.title}
              </span>
            )}
          </Link>
        </TooltipTrigger>
        <TooltipContent
          side="right"
          className={cn(
            "bg-muted mt-[-8px] text-foreground",
            expanded && "hidden"
          )}
        >
          <p className="text-sm font-semibold tracking-tight transition-all duration-300">
            {item.title}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

interface SidebarItemType {
  title: string;
  icon: React.ReactNode;
  alert: boolean;
  href: string;
}

interface SidebarItems {
  default: SidebarItemType[];
  admin: SidebarItemType[];
}

const sidebar_items: SidebarItems = {
  default: [
    {
      title: "Geral",
      icon: <LayoutDashboard className="h-4 w-4" />,
      alert: false,
      href: "/dashboard",
    },
    {
      title: "Atividade",
      icon: <User2 className="h-4 w-4" />,
      alert: false,
      href: "/dashboard/atividade",
    },
    {
      title: "Conta",
      icon: <Settings2 className="h-4 w-4" />,
      alert: false,
      href: "/dashboard/conta",
    },
    {
      title: "Configurações",
      icon: <Settings className="h-4 w-4" />,
      alert: false,
      href: "/dashboard/configuracoes",
    },
  ],
  admin: [
    {
      title: "Estatísticas",
      icon: <ChartLine className="h-4 w-4 ml-[2px]" />,
      alert: false,
      href: "/dashboard/estatisticas",
    },
    {
      title: "Gerenciamento de Usuários",
      icon: <UserCheck2 className="h-4 w-4 ml-[2px]" />,
      alert: false,
      href: "/dashboard/gerenciamento-de-usuarios",
    },
    {
      title: "Mensagens aprovadas",
      icon: <MessageSquare className="h-4 w-4" />,
      alert: true,
      href: "/dashboard/mensagens-aprovadas",
    },
    {
      title: "Conteudo Reportado",
      icon: <AlertTriangle className="h-4 w-4" />,
      alert: true,
      href: "/dashboard/conteudo-reportado",
    },
  ],
};
