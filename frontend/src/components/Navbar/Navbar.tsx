import { useEffect, useState } from "react";
import { ModeToggle } from "../ModeToggle";
import { NavMenu } from "./NavMenu";
import { Separator } from "../ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Badge, LucideIcon, Menu, MessagesSquare } from "lucide-react";
import NavbarNotifications from "./NavbarNotifications";
import { Link } from "react-router-dom";

interface Notification {
  title: string;
  description: string;
  action?: string;
  icon: LucideIcon;
}

const test = [
  {
    title: "Inscrições Abertas para o Vestibular da FATEC",
    description:
      "Não perca a chance de se inscrever para o vestibular da FATEC! As inscrições vão até o final deste mês.",
    icon: Badge,
  },
  {
    title: "Novo Comentário no Fórum",
    description:
      "Alguém comentou sobre um tema relevante no fórum que você participa. Clique para ver mais detalhes.",
    action: "/forum",
    icon: MessagesSquare,
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [userLogged, setUserLogged] = useState(false);

  useEffect(() => {
    setNotifications(test);
    setUserLogged(true);

    async function fetchUserToken() {
      try {
        const response = await fetch(
          "http://localhost:3001/api/login/authenticateByToken",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ token: localStorage.getItem("auth-token") }),
          }
        );

        const result: Response = await response.json();
        console.log(result);
      } catch (error) {}
    }

    fetchUserToken();
  }, []);

  return (
    <>
      <nav className="flex items-center justify-between px-12 py-2 max-md:px-4 ">
        <Link to="/">
          <img
            src="/logo.svg"
            alt="DSM Logo"
            className="max-md:h-[50px] md:w-[70px] p-1 max-md:p-0"
          />
        </Link>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="w-full">
            <div className="flex justify-end">
              <Menu className="md:hidden" />
            </div>
          </SheetTrigger>

          <SheetContent className="ml-12 py-12 bg-[hsl(var(--background))]">
            <NavMenu
              logged={userLogged}
              variant="mobile"
              notifications={notifications}
            />
          </SheetContent>
        </Sheet>

        <div className="flex gap-2 max-md:hidden">
          <NavMenu logged={userLogged} notifications={notifications} />
          <NavbarNotifications notifications={notifications} />
          <ModeToggle />
        </div>
      </nav>
      <Separator />
    </>
  );
}
