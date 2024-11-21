import { useEffect, useState } from "react";
import { ModeToggle } from "../ModeToggle";
import { NavMenu } from "./NavMenu";
import { Separator } from "../ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Badge, LucideIcon, Menu, MessagesSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { fetchUserToken, User } from "../utils";
import NavbarNotifications from "./NavbarNotifications";

interface Notification {
  title: string;
  description: string;
  action?: string;
  icon: LucideIcon;
}

const test: Notification[] = [
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
  const [userLogged, setUserLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    async function fetchUser() {
      const response: User = await fetchUserToken();

      setUserLogged(response.logado);
      setIsAdmin(response.admin);
    }
    fetchUser();
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
              admin={isAdmin}
              notifications={test}
              logged={userLogged}
              variant="mobile"
            />
          </SheetContent>
        </Sheet>

        <div className="flex gap-2 max-md:hidden">
          <NavMenu admin={isAdmin} logged={userLogged} />
          <NavbarNotifications notifications={test} />
          <ModeToggle />
        </div>
      </nav>
      <Separator />
    </>
  );
}
