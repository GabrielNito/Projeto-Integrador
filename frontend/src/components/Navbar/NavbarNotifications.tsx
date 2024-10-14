import { Bell } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Notification {
  title: string;
  description: string;
  action?: string;
}

interface NavbarNotificationsProps {
  notifications: Notification[];
  mobile?: boolean;
}

export default function NavbarNotifications({
  notifications,
  mobile,
}: NavbarNotificationsProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-4 w-4" />
          <span
            className={cn(
              "bg-red-500 w-[7px] h-[7px] rounded-full absolute top-2 right-[10px]",
              !notifications && "hidden"
            )}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side={mobile ? "left" : "bottom"}>
        <DropdownMenuLabel>Notificações</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {notifications.length === 0 ? (
          <div className="flex justify-content items-center p-4">
            <h1>Nenhuma notificação pendente</h1>
          </div>
        ) : null}

        {notifications.map((notification, index) => {
          return (
            <DropdownMenuItem
              key={index}
              onClick={() => {
                if (notification.action) {
                  window.location.href = notification.action;
                }
              }}
            >
              <div className="flex flex-row justify-center items-center gap-2">
                <div className="flex flex-col gap-2">
                  <h1 className="font-semibold">{notification.title}</h1>
                  <h1 className="w-[40ch] opacity-75">
                    {notification.description}
                  </h1>
                </div>
              </div>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
