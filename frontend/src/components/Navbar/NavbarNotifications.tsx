import { Bell, LucideIcon } from "lucide-react";
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
  icon: LucideIcon;
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
          <Bell className="lg:h-4 lg:w-4" />
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
          <div className="flex items-center p-4 justify-content">
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
              <div className="flex flex-row items-center justify-center gap-2">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <notification.icon className="w-6 h-6" />
                    <h1 className="font-semibold">{notification.title}</h1>
                  </div>
                  <h1 className="w-[40ch] opacity-75 pl-8">
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
