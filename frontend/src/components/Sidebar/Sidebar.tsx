import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  MessageSquare,
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
import { fetchUserToken, User } from "../utils";

interface SidebarProps {
  active: string;
}

export default function Sidebar({ active }: SidebarProps) {
  const [expanded, setExpanded] = useState(true);
  const [userData, setUserData] = useState<User>();
  const [isAdmin, setIsAdmin] = useState(false);

  const username = userData?.dados.username || "";
  const email = userData?.dados.email || "";
  const avatar = userData?.dados.avatar || "";

  useEffect(() => {
    const test_mobile: boolean = window.innerWidth < 768;
    setExpanded(!test_mobile);
  }, []);

  useEffect(() => {
    async function fetchUser() {
      const response: User = await fetchUserToken();

      setUserData(response);
      setIsAdmin(response.dados.role === "ADMIN");
    }
    fetchUser();
  }, []);

  return (
    <nav
      className={cn(
        "sticky top-0 h-screen overflow-hidden flex-shrink-0 border-r bg-background transition-all duration-300",
        expanded ? "w-[275px]" : "w-[70px]"
      )}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4">
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
            <PanelLeft className="w-4 h-4" />
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

            {isAdmin && (
              <div className={cn("", !expanded && "hidden")}>
                <Separator className={cn("my-2", !expanded && "my-2")} />
              </div>
            )}

            {isAdmin &&
              sidebar_items.admin.map((item) => (
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
          name={username}
          email={email}
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
              <span className="absolute invisible px-2 py-1 ml-6 text-sm transition-all -translate-x-3 rounded-md left-full bg-accent text-accent-foreground opacity-20 group-hover:visible group-hover:opacity-100 group-hover:translate-x-0">
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
      title: "Atividade do Usuário",
      icon: <User2 className="w-4 h-4" />,
      alert: false,
      href: "atividade",
    },
    {
      title: "Configurações da Conta",
      icon: <Settings2 className="w-4 h-4" />,
      alert: false,
      href: "configuracoes",
    },
  ],
  admin: [
    {
      title: "Estatísticas",
      icon: <ChartLine className="h-4 w-4 ml-[2px]" />,
      alert: false,
      href: "estatisticas",
    },
    {
      title: "Gerenciamento de Usuários",
      icon: <UserCheck2 className="h-4 w-4 ml-[2px]" />,
      alert: false,
      href: "gerenciamento-de-usuarios",
    },
    {
      title: "Gerenciamento de Threads",
      icon: <MessageSquare className="w-4 h-4" />,
      alert: false,
      href: "gerenciamento-de-threads",
    },
  ],
};
