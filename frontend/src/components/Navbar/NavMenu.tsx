import { ModeToggle } from "../ModeToggle";
import { Button } from "../ui/button";
import NavbarNotifications from "./NavbarNotifications";

interface Notification {
  title: string;
  description: string;
  action?: string;
}

interface NavMenuProps {
  variant?: "default" | "mobile";
  notifications: Notification[];
}

export function NavMenu({ variant, notifications }: NavMenuProps) {
  if (variant === "mobile") {
    return (
      <div className="flex flex-col justify-between items-center h-full">
        <div className="flex flex-col gap-2">
          <Button variant="ghost">O Curso</Button>
          <Button variant="ghost">Certificações e Diplomas</Button>
          <Button variant="ghost">Contato</Button>
          <Button variant="ghost">Fórum</Button>
        </div>
        <div className="w-3/4 flex flex-col-reverse justify-between items-center gap-2">
          <img src="/logo.png" className="w-1/2" />
          <div className="w-full flex justify-center gap-2">
            <ModeToggle />
            <NavbarNotifications notifications={notifications} />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex gap-2">
      <Button variant="ghost">O Curso</Button>
      <Button variant="ghost">Certificações e Diplomas</Button>
      <Button variant="ghost">Contato</Button>
      <Button variant="ghost">Fórum</Button>
    </div>
  );
}
